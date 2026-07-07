import ArianeCode from "./projects/filDariane/dedale.py?raw";

export const LANGUAGES = {
  python: {
    label: "Python",
    icon: "🐍",
    badge: "bg-emerald-500/10 text-emerald-300",
  },
  html: {
    label: "HTML",
    icon: "🌐",
    badge: "bg-sky-500/10 text-sky-300",
  },
};

const sandboxProjects = Object.keys(LANGUAGES).map((language) => ({
  id: `libre-${language}`,
  name: "Code Libre",
  language,
  description: `Écrivez et exécutez du ${LANGUAGES[language].label} librement.`,
  subject: null,
  code: "",
}));

const guidedProjects = [
  {
    id: "fil-ariane",
    name: "Fil d'Ariane",
    language: "python",
    description: "Guidez Thésée hors du labyrinthe en déroulant le fil.",
    subject: "src/projects/filDariane/fil-d-ariane.pdf",
    code: ArianeCode,
  },
  {
    id: "appleton-calculator",
    name: "Appleton Calculator",
    language: "html",
    description: "...",
    subject: "src/projects/appletonCalculator/appletonCalculator.pdf",
    code: "",
  },
  {
    id: "fizzbuzz",
    name: "FizzBuzz",
    language: "python",
    description: "Fizz, Buzz, FizzBuzz de 1 à 100.",
    subject: null,
    code: "",
  },
  {
    id: "mon-projet",
    name: "Mon Projet",
    language: "python",
    description: "…",
    subject: null,
    code: "",
  },
];

export const projects = [...sandboxProjects, ...guidedProjects];
