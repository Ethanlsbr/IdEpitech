import { useCallback, useRef, useState } from "react";
import Console from "../components/Console";
import { usePyodide } from "../usePyodide";

export const SAMPLE_PYTHON = `# Welcome to Manta Editor

print("Hello Manta!\\nDiscover code with IDEpitech")
`;

export function usePythonLanguage({ onRequestPanel, project }) {
  const [lines, setLines] = useState([]);
  const [awaitingInput, setAwaitingInput] = useState(false);
  const stdoutRef = useRef("");

  const appendOutput = useCallback(({ stream, text }) => {
    if (stream === "stdout")
      stdoutRef.current += text;
    setLines((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.stream === stream) {
        const merged = [...prev];
        merged[merged.length - 1] = { stream, text: last.text + "\n" + text };

        return merged;
      }

      return [...prev, { stream, text }];
    });
  }, []);
  const handleInputRequest = useCallback(() => setAwaitingInput(true), []);

  const { status, version, run, sendInput } = usePyodide({
    onOutput: appendOutput,
    onInputRequest: handleInputRequest,
  });

  const execute = useCallback(
    async (code) => {
      if (status !== "ready") return;

      onRequestPanel?.();

      stdoutRef.current = "";
      setLines((prev) => [
        ...prev,
        {
          stream: "system",
          text: `\n$ run · ${new Date().toLocaleTimeString()}\n`,
        },
      ]);
      const res = await run(project.code + code);
      if (res?.ok && res.result != null) {
        appendOutput({ stream: "result", text: `=> ${res.result}\n` });
      }
      if (project.expected != null) {
        const ok = stdoutRef.current.trim() === project.expected.trim();
        appendOutput({
          stream: ok ? "result" : "stderr",
          text: ok ? "\nValidé!\nTu peux passer à l'exercice suivant\n" : "\nPas encore (et c'est ok), réessaie.\n",
        });
      }
    },
    [status, run, appendOutput, onRequestPanel],
  );

  const submitInput = useCallback(
    (line) => {
      appendOutput({ stream: "input", text: line + "\n" });
      setAwaitingInput(false);
      sendInput(line);
    },
    [appendOutput, sendInput],
  );

  const renderPanel = useCallback(
    () => (
      <Console
        lines={lines}
        awaitingInput={awaitingInput}
        onSubmitInput={submitInput}
        onClear={() => setLines([])}
      />
    ),
    [lines, awaitingInput, submitInput],
  );

  return { status, version, execute, renderPanel };
}
