import { useCallback, useRef, useState } from "react";
import Console from "../components/Console";
import LearningConsole from "../components/LearningConsole";
import { useClang } from "../useClang";
import { saveCompletion } from "../completion";

export const SAMPLE_C = `// Bienvenue dans l'Editeur Manta
#include <stdio.h>

int main(void)
{
    printf("Bienvenue dans l'Editeur Manta\\n");
    return 0;
}
`;

export function useCLanguage({ onRequestPanel, project, onNext }) {
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

      const res = await run(project.beforeCode + code + project.afterCode);
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
          saveCompletion(project.id, false);
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

  const renderPanel = useCallback(() => {
    const consoleProps = {
      lines,
      awaitingInput,
      onSubmitInput: submitInput,
      onClear: () => setLines([]),
    };

    if (onNext !== undefined) {
      return (
        <LearningConsole project={project} onNext={onNext} {...consoleProps} />
      );
    }

    return <Console {...consoleProps} />;
  }, [project, lines, awaitingInput, submitInput, onNext]);

  return { status, version, execute, renderPanel };
}
