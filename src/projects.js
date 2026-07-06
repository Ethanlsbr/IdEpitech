export const LANGUAGES = {
  python: {
    label: "Python",
    icon: "🐍",
    badge: "bg-emerald-500/10 text-emerald-300",
  },
//  c: {
//    label: "C",
//    icon: "C",
//    badge: "bg-sky-500/10 text-sky-300",
//  },
};

const sandboxProjects = Object.keys(LANGUAGES).map((language) => ({
  id: `libre-${language}`,
  name: "Code Libre",
  language,
  description: `Écrivez et exécutez du ${LANGUAGES[language].label} librement.`,
  subject: null,
}));

const guidedProjects = [
  {
    id: "fil-ariane",
    name: "Fil d'Ariane",
    language: "python",
    description: "Guidez Thésée hors du labyrinthe en déroulant le fil.",
    subject: "src/projects/filDariane/fil-d-ariane.pdf",
  },
  {
    id: "fizzbuzz",
    name: "FizzBuzz",
    language: "python",
    description: "Fizz, Buzz, FizzBuzz de 1 à 100.",
    subject: null,
  },
  {
    id: "mon-projet",
    name: "Mon Projet",
    language: "python",
    description: "…",
    subject: null,
  },
];

export const projects = [...sandboxProjects, ...guidedProjects];
