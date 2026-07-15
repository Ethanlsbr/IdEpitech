import argparse
import os
import re
import textwrap
from xml.sax.saxutils import escape as xml_escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

CITY = "Lyon"

NAVY = colors.HexColor("#4B4E72")
GREY_LINE = colors.HexColor("#CCCCCC")
CODE_BG = colors.HexColor("#F2F2F2")
CODE_BORDER = colors.HexColor("#DADADA")
INFO_BG = colors.HexColor("#E4F1FB")
INFO_BORDER = colors.HexColor("#BBDEF5")

FONT = "Helvetica"
FONT_BOLD = "Helvetica-Bold"
MONO_FONT = "Courier"

for regular, bold in [
    (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ),
    (
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
    ),
]:
    if os.path.exists(regular) and os.path.exists(bold):
        pdfmetrics.registerFont(TTFont("Custom", regular))
        pdfmetrics.registerFont(TTFont("Custom-Bold", bold))
        FONT, FONT_BOLD = "Custom", "Custom-Bold"
        break

for mono in [
    "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationMono-Regular.ttf",
]:
    if os.path.exists(mono):
        pdfmetrics.registerFont(TTFont("Custom-Mono", mono))
        MONO_FONT = "Custom-Mono"
        break


h1_style = ParagraphStyle(
    "h1",
    fontName=FONT_BOLD,
    fontSize=20,
    textColor=NAVY,
    spaceBefore=18,
    spaceAfter=10,
    leading=24,
)
h2_style = ParagraphStyle(
    "h2",
    fontName=FONT_BOLD,
    fontSize=13,
    textColor=NAVY,
    spaceBefore=45,
    spaceAfter=25,
    leading=16,
)
body_style = ParagraphStyle(
    "body",
    fontName=FONT,
    fontSize=10.5,
    leading=16,
    spaceBefore=2,
    spaceAfter=6,
)
bullet_style = ParagraphStyle(
    "bullet",
    parent=body_style,
    leftIndent=20,
    bulletIndent=6,
    bulletFontName=FONT,
    bulletFontSize=10.5,
    spaceBefore=2,
    spaceAfter=2,
    leading=15,
)
cell_style = ParagraphStyle(
    "cell",
    fontName=FONT,
    fontSize=9.5,
    leading=13,
)
cell_header_style = ParagraphStyle(
    "cell_header",
    fontName=FONT_BOLD,
    fontSize=9.5,
    leading=13,
    textColor=colors.white,
)
code_style = ParagraphStyle(
    "code",
    fontName=MONO_FONT,
    fontSize=9,
    leading=13,
    textColor=colors.HexColor("#333333"),
    backColor=CODE_BG,
    borderColor=CODE_BORDER,
    borderWidth=0.75,
    borderPadding=8,
    borderRadius=6,
    spaceBefore=30,
    spaceAfter=30,
)
info_style = ParagraphStyle(
    "info",
    fontName=FONT,
    fontSize=10,
    leading=14,
    textColor=NAVY,
    backColor=INFO_BG,
    borderColor=INFO_BORDER,
    borderWidth=0.75,
    borderPadding=10,
    borderRadius=6,
    spaceBefore=30,
    spaceAfter=30,
)

_INLINE_CODE_RE = re.compile(r"(`[^`]+`)")
_BOLD_RE = re.compile(r"\*\*([^*]+)\*\*")


def _inline(text):
    out = []
    for part in _INLINE_CODE_RE.split(text):
        if len(part) >= 2 and part.startswith("`") and part.endswith("`"):
            out.append(
                f'<font face="{MONO_FONT}" size="9" color="#333333">'
                f"{xml_escape(part[1:-1])}</font>"
            )
        else:
            out.append(_BOLD_RE.sub(r"<b>\1</b>", xml_escape(part)))
    return "".join(out)


story = []


def h1(text):
    story.append(Paragraph(_inline(text), h1_style))


def h2(text):
    story.append(Paragraph(_inline(text), h2_style))


def p(text):
    story.append(Paragraph(_inline(text), body_style))


def bullets(items):
    for item in items:
        story.append(Paragraph(_inline(item), bullet_style, bulletText="•"))
    story.append(Spacer(10, 6))


def numbered(items):
    for i, item in enumerate(items, start=1):
        story.append(Paragraph(_inline(item), bullet_style, bulletText=f"{i}."))
    story.append(Spacer(10, 6))


def _resolve_image(path, base_dir):
    candidates = [
        path,
        os.path.join(base_dir, path),
        os.path.join(base_dir, os.path.basename(path)),
    ]
    for candidate in candidates:
        if os.path.isfile(candidate):
            return candidate
    return None


def image(path, base_dir):
    resolved = _resolve_image(path, base_dir)
    if resolved is None:
        return
    iw, ih = ImageReader(resolved).getSize()
    max_w = A4[0] - 5 * cm
    max_h = 11 * cm
    ratio = min(max_w / iw, max_h / ih, 1.0)
    img = Image(resolved, width=iw * ratio, height=ih * ratio)
    img.hAlign = "CENTER"
    story.append(Spacer(10, 6))
    story.append(img)
    story.append(Spacer(10, 8))


def table(rows):
    if not rows:
        return
    ncols = max(len(r) for r in rows)
    data = []
    for r_idx, row in enumerate(rows):
        cells = []
        style = cell_header_style if r_idx == 0 else cell_style
        for c_idx in range(ncols):
            raw = row[c_idx] if c_idx < len(row) else ""
            cells.append(Paragraph(_inline(raw), style))
        data.append(cells)

    avail = A4[0] - 5 * cm
    col_w = avail / ncols
    tbl = Table(data, colWidths=[col_w] * ncols, hAlign="LEFT")
    tbl.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), NAVY),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, CODE_BG]),
                ("GRID", (0, 0), (-1, -1), 0.5, GREY_LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    story.append(Spacer(10, 6))
    story.append(tbl)
    story.append(Spacer(10, 8))


def code(snippet):
    snippet = textwrap.dedent(snippet).strip("\n")
    lines = []
    for line in snippet.split("\n"):
        stripped = line.lstrip(" ")
        indent = "&nbsp;" * (len(line) - len(stripped))
        lines.append(indent + xml_escape(stripped))
    story.append(Paragraph("<br/>"))
    story.append(Paragraph("<br/>".join(lines), code_style))
    story.append(Paragraph("<br/>"))


def info(text):
    story.append(Paragraph(f"{_inline(text)}", info_style))


_HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)$")
_ULIST_RE = re.compile(r"^[-*•]\s+")
_OLIST_RE = re.compile(r"^\d+\.\s+")
_IMAGE_RE = re.compile(r"^!\[[^\]]*\]\(([^)]+)\)$")
_TABLE_SEP_RE = re.compile(r"^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$")


def _split_table_row(line):
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    return [c.strip() for c in line.split("|")]


def parse_markdown(text, base_dir="."):
    lines = text.split("\n")
    n = len(lines)
    title = None
    para = []
    i = 0

    def flush_paragraph():
        if para:
            p(" ".join(para))
            para.clear()

    while i < n:
        raw = lines[i]
        stripped = raw.strip()

        if stripped.startswith("```"):
            flush_paragraph()
            i += 1
            code_lines = []
            while i < n and not lines[i].strip().startswith("```"):
                code_lines.append(lines[i])
                i += 1
            i += 1
            code("\n".join(code_lines))
            continue

        if not stripped:
            flush_paragraph()
            i += 1
            continue

        heading = _HEADING_RE.match(stripped)
        if heading:
            flush_paragraph()
            level = len(heading.group(1))
            content = heading.group(2).strip()
            if level == 1 and title is None:
                title = content
            elif level == 1:
                h1(content)
            else:
                h2(content)
            i += 1
            continue

        img_match = _IMAGE_RE.match(stripped)
        if img_match:
            flush_paragraph()
            image(img_match.group(1).strip(), base_dir)
            i += 1
            continue

        if "|" in stripped and i + 1 < n and _TABLE_SEP_RE.match(lines[i + 1].strip()):
            flush_paragraph()
            rows = [_split_table_row(stripped)]
            i += 2
            while i < n and "|" in lines[i] and lines[i].strip():
                rows.append(_split_table_row(lines[i]))
                i += 1
            table(rows)
            continue

        if stripped.startswith(">"):
            flush_paragraph()
            quote = []
            while i < n and lines[i].strip().startswith(">"):
                quote.append(lines[i].strip().lstrip(">").strip())
                i += 1
            info(" ".join(quote))
            continue

        if _ULIST_RE.match(stripped):
            flush_paragraph()
            items = []
            while i < n and _ULIST_RE.match(lines[i].strip()):
                items.append(_ULIST_RE.sub("", lines[i].strip()))
                i += 1
            bullets(items)
            continue

        if _OLIST_RE.match(stripped):
            flush_paragraph()
            items = []
            while i < n and _OLIST_RE.match(lines[i].strip()):
                items.append(_OLIST_RE.sub("", lines[i].strip()))
                i += 1
            numbered(items)
            continue

        para.append(stripped)
        i += 1

    flush_paragraph()
    return title


SUBJECT_TITLE = "Sujet"


def draw_cover(canvas, doc):
    width, height = A4
    canvas.saveState()

    canvas.setFillColor(NAVY)
    path = canvas.beginPath()
    path.moveTo(0, height)
    path.lineTo(width * 0.62, height)
    path.lineTo(0, height * 0.32)
    path.close()
    canvas.drawPath(path, fill=1, stroke=0)

    canvas.setFillColor(colors.white)
    canvas.setFont(FONT_BOLD, 26)
    canvas.drawString(2.2 * cm, height - 3.2 * cm, "CODING CLUB")
    canvas.setFont(FONT, 15)
    canvas.drawString(2.2 * cm, height - 4.0 * cm, "EPITECH")

    logo_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "logo.png")
    if os.path.isfile(logo_path):
        logo_size = 5.0 * cm
        logo_cx, logo_cy = 3.6 * cm, height - 6.8 * cm
        canvas.drawImage(
            logo_path,
            logo_cx - logo_size / 2,
            logo_cy - logo_size / 2,
            width=logo_size,
            height=logo_size,
            preserveAspectRatio=True,
            mask="auto",
        )

    canvas.setFillColor(NAVY)
    canvas.setFont(FONT_BOLD, 26)
    canvas.drawRightString(width - 2.2 * cm, height * 0.42, SUBJECT_TITLE)
    canvas.setStrokeColor(NAVY)
    canvas.setLineWidth(1)
    canvas.line(
        width * 0.45,
        height * 0.42 - 0.5 * cm,
        width - 2.2 * cm,
        height * 0.42 - 0.5 * cm,
    )

    canvas.setFillColor(colors.HexColor("#777777"))
    canvas.setFont(FONT, 8)
    canvas.drawString(1.5 * cm, 1.2 * cm, "© Coding Club " + CITY)
    canvas.restoreState()


def draw_content_header(canvas, doc):
    width, height = A4
    canvas.saveState()

    canvas.setFillColor(NAVY)
    canvas.roundRect(
        1.5 * cm, height - 2.3 * cm, 0.9 * cm, 0.7 * cm, 3, fill=1, stroke=0
    )
    canvas.setFillColor(colors.white)
    canvas.setFont(FONT_BOLD, 10)
    canvas.drawCentredString(
        1.5 * cm + 0.45 * cm, height - 2.08 * cm, str(canvas.getPageNumber() - 1)
    )

    canvas.setStrokeColor(GREY_LINE)
    canvas.setLineWidth(1)
    canvas.line(1.5 * cm, height - 2.5 * cm, width - 1.5 * cm, height - 2.5 * cm)
    canvas.restoreState()


def build_pdf(output_file):
    doc = BaseDocTemplate(
        output_file,
        pagesize=A4,
        leftMargin=2.5 * cm,
        rightMargin=2.5 * cm,
        topMargin=2.5 * cm,
        bottomMargin=2.5 * cm,
    )

    cover_frame = Frame(0, 0, A4[0], A4[1], id="cover", showBoundary=0)
    content_frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height - 0.6 * cm,
        id="content",
        showBoundary=0,
    )

    doc.addPageTemplates(
        [
            PageTemplate(id="Cover", frames=[cover_frame], onPage=draw_cover),
            PageTemplate(
                id="Content", frames=[content_frame], onPage=draw_content_header
            ),
        ]
    )

    doc.build([NextPageTemplate("Content"), PageBreak()] + story)


def main():
    parser = argparse.ArgumentParser(
        description=(
            "Convertit un fichier Markdown en PDF stylisé (sujet Coding Club)."
        )
    )
    parser.add_argument(
        "-i",
        "--input",
        required=True,
        help="Fichier Markdown source à parser (.md)",
    )
    parser.add_argument(
        "-o",
        "--output",
        required=True,
        help="Fichier PDF à générer (.pdf)",
    )
    args = parser.parse_args()

    with open(args.input, encoding="utf-8") as f:
        md_text = f.read()

    global SUBJECT_TITLE
    base_dir = os.path.dirname(os.path.abspath(args.input))
    title = parse_markdown(md_text, base_dir)
    if title:
        SUBJECT_TITLE = title

    build_pdf(args.output)
    print(f"Sujet généré : {os.path.abspath(args.output)}")


if __name__ == "__main__":
    main()
