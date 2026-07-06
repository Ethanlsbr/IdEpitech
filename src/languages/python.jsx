import { useCallback, useState } from "react";
import Console from "../components/Console";
import { usePyodide } from "../usePyodide";

export const SAMPLE_PYTHON = `# Welcome to Manta Editor

print("Hello Manta!\\nDiscover code with IDEpitech")
`;

export function usePythonLanguage({ onRequestPanel }) {
  const [lines, setLines] = useState([]);
  const [awaitingInput, setAwaitingInput] = useState(false);

  const appendOutput = useCallback(({ stream, text }) => {
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

      setLines((prev) => [
        ...prev,
        {
          stream: "system",
          text: `\n$ run · ${new Date().toLocaleTimeString()}\n`,
        },
      ]);
      const res = await run(code);
      if (res?.ok && res.result != null) {
        appendOutput({ stream: "result", text: `=> ${res.result}\n` });
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
