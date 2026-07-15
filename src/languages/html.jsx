import { useCallback, useState } from "react";
import HtmlView from "../components/HtmlView";

export const SAMPLE_HTML = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to Manta Editor</title>
  </head>
  <body>
    <h1>Hello Manta!</h1>
    <p>Discover code with IDEpitech</p>
  </body>
</html>
`;

export function useHtmlLanguage({ onRequestPanel, project }) {
  const [preview, setPreview] = useState("");

  const execute = useCallback(
    async (code) => {
      onRequestPanel?.();
      setPreview(project.beforeCode + code + project.afterCode);
    },
    [onRequestPanel, project],
  );

  const renderPanel = useCallback(
    () => <HtmlView html={preview} onClear={() => setPreview("")} />,
    [preview],
  );

  return { status: "ready", version: "5", execute, renderPanel };
}
