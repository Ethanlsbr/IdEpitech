import { LANG } from "./datas/languages";
import { learningPythonProjects } from "./datas/learningPythonProjects";
import { learningCProjects } from "./datas/learningCProjects";
import { COBRA_DIFF, DIFF, guidedProjects } from "./datas/guidedProjets";
import { createSubjectProject } from "./datas/createSubjectProject";

export const LANGUAGES = LANG;

export const DIFFICULTIES = DIFF;
export const COBRA_DIFFICULTIES = COBRA_DIFF;

const sandboxProjects = Object.keys(LANGUAGES).map((language) => ({
  id: `libre-${language}`,
  name: "Code Libre",
  language,
  description: `Écrivez et exécutez du ${LANGUAGES[language].label} librement.`,
  beforeCode: "",
  afterCode: "",
  hasEnd: false,
}));

export const learningProjects = [
  ...learningPythonProjects,
  ...learningCProjects,
];

export const projects = [
  ...sandboxProjects,
  createSubjectProject,
  ...guidedProjects,
];
