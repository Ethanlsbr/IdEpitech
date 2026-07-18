#!/usr/bin/env bash
# Compile every project's Markdown subject into a PDF of the same name.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILDER="$ROOT_DIR/pdf-builder/sujet_cobra.py"
PROJECTS_DIR="$ROOT_DIR/src/projects"

shopt -s nullglob
md_files=("$PROJECTS_DIR"/*/*.md)
shopt -u nullglob

if [ ${#md_files[@]} -eq 0 ]; then
	echo "No .md file found under $PROJECTS_DIR" >&2
	exit 1
fi

for md in "${md_files[@]}"; do
	pdf="${md%.md}.pdf"
	echo "Building ${pdf#"$ROOT_DIR/"}..."
	./pdf-builder/.venv/bin/python3 "$BUILDER" -i "$md" -o "$pdf"
done
