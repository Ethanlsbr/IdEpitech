import { useCallback, useRef, useState } from "react";
import Console from "../components/Console";
import { useClang } from "../useClang";

export const SAMPLE_C = `// Bienvenue dans l'Editeur Manta
#include <stdio.h>

int main(void)
{
    printf("Bienvenue dans l'Editeur Manta\\n");
    return 0;
}
`;

export function useCLanguage({ onRequestPanel, project }) {
  const [lines, setLines] = useState([]);
  const [awaitingInput, setAwaitingInput] = useState(false);
  const stdoutRef = useRef("");

  const appendOutput = useCallback(({ stream, text }) => {
    if (stream === "stdout") stdoutRef.current += text;
    setLines((prev) => {
      const last = prev[prev.length - 1];
      if (last && last.stream === stream) {
        const merged = [...prev];
        merged[merged.length - 1] = { stream, text: last.text + text };

        return merged;
      }

      return [...prev, { stream, text }];
    });
  }, []);
  const handleInputRequest = useCallback(() => setAwaitingInput(true), []);

  const { status, version, run, interrupt, sendInput } = useClang({
    onOutput: appendOutput,
    onInputRequest: handleInputRequest,
  });

  const execute = useCallback(
    async (code) => {
      if (status !== "ready" && status !== "running") return;
      if (status === "running") interrupt();

      onRequestPanel?.();

      stdoutRef.current = "";
      setAwaitingInput(false);
      setLines((prev) => [
        ...prev,
        {
          stream: "system",
          text: `\n$ run · ${new Date().toLocaleTimeString("fr-FR", { hour12: false })}\n`,
        },
      ]);

      const res = await run(project.code + code);
      setAwaitingInput(false);

      if (res?.error) {
        appendOutput({ stream: "stderr", text: `\n${res.error}\n` });
      } else if (res?.ok && res.result != null) {
        appendOutput({
          stream: "stderr",
          text: `\n[code de sortie ${res.result}]\n`,
        });
      }
      if (project.expected != null && res?.ok) {
        const ok = stdoutRef.current.trim() === project.expected.trim();
        appendOutput({
          stream: ok ? "result" : "stderr",
          text: ok
            ? "\nValidé!\nTu peux passer à l'exercice suivant\n"
            : "\nPas encore (et c'est ok), réessaie.\n",
        });
        if (ok) {
          localStorage.setItem(project.id, true);
        }
      }
    },
    [status, run, interrupt, appendOutput, onRequestPanel, project],
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
