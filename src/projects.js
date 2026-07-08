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

export const learningPythonProjects = [
  {
    id: "print",
    name: "Print",
    language: "python",
    description: "Affiche du texte dans la console.",
    subject: null,
    code: "",
    starter: "# Affiche exactement : Bonjour !\n",
    expected: "Bonjour !",
  },
  {
    id: "comment",
    name: "Les Commentaires",
    language: "python",
    description: "Explique ton code sans le modifier.",
    subject: null,
    code: "",
    starter:
      "# Écris un commentaire de ton choix,\n# puis affiche exactement : Compris\n",
    expected: "Compris",
  },
  {
    id: "variable",
    name: "Les Variables",
    language: "python",
    description: "Stocke des informations.",
    subject: null,
    code: "",
    starter: '# Stocke "Alice" dans une variable prenom, puis affiche-la\n',
    expected: "Alice",
  },
  {
    id: "calc",
    name: "Les Calculs",
    language: "python",
    description: "Effectue des calculs.",
    subject: null,
    code: "",
    starter: "# Affiche le résultat du calcul 7 + 5\n",
    expected: "12",
  },
  {
    id: "condition",
    name: "Les Conditions",
    language: "python",
    description: "Prends des décisions avec if.",
    subject: null,
    code: "",
    starter:
      "# age vaut 20 : crée la variable age,\n# et si elle est supérieure ou égale à 18, affiche : Majeur\n",
    expected: "Majeur",
  },
  {
    id: "loop",
    name: "Les Boucles",
    language: "python",
    description: "Répète plusieurs fois une action.",
    subject: null,
    code: "",
    starter:
      "# Avec une boucle, affiche les nombres 1, 2 puis 3 (un par ligne)\n",
    expected: "1\n2\n3",
  },
  {
    id: "array",
    name: "Les Listes",
    language: "python",
    description: "Stocke plusieurs valeurs.",
    subject: null,
    code: "",
    starter: "# Crée une liste contenant 1, 2 et 3, puis affiche-la\n",
    expected: "[1, 2, 3]",
  },
  {
    id: "function",
    name: "Les Fonctions",
    language: "python",
    description: "Regroupe du code réutilisable.",
    subject: null,
    code: "",
    starter: '# Écris une fonction qui affiche "Salut", puis appelle-la\n',
    expected: "Salut",
  },
];

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
    description: "Recréez la fameuse calculatrice d'Apple",
    subject: "src/projects/appletonCalculator/appletonCalculator.pdf",
    code: "",
  },
];

export const projects = [...sandboxProjects, ...guidedProjects];
