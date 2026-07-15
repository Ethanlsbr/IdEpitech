import ArianeCode from "./projects/filDariane/dedale.py?raw";
import ArianeSubject from "./projects/filDariane/filDariane.pdf";
import AppletonSubject from "./projects/appletonCalculator/appletonCalculator.pdf";

export const LANGUAGES = {
  python: {
    label: "Python",
    icon: "🐍",
    badge: "bg-emerald-500/10 text-emerald-300",
    color: "#10b981",
  },
  html: {
    label: "HTML",
    icon: "🌐",
    badge: "bg-sky-500/10 text-sky-300",
    color: "#0ea5e9",
  },
  c: {
    label: "C",
    icon: "C",
    badge: "bg-zinc-500/10 text-zinc-300",
    color: "gray",
  },
};

export const DIFFICULTIES = ["Facile", "Moyen", "Difficile"];

const sandboxProjects = Object.keys(LANGUAGES).map((language) => ({
  id: `libre-${language}`,
  name: "Code Libre",
  language,
  description: `Écrivez et exécutez du ${LANGUAGES[language].label} librement.`,
  subject: null,
  code: "",
  explanation: null,
  difficulty: "Facile",
}));

export const learningPythonProjects = [
  {
    id: "print",
    name: "Print",
    language: "python",
    description: "Affiche du texte dans la console.",
    subject: null,
    code: "",
    explanation: "# Affiche exactement : Bonjour !\n",
    expected: "Bonjour !",
  },
  {
    id: "comment",
    name: "Les Commentaires",
    language: "python",
    description: "Explique ton code sans le modifier.",
    subject: null,
    code: "",
    explanation:
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
    explanation: '# Stocke "Alice" dans une variable prenom, puis affiche-la\n',
    expected: "Alice",
  },
  {
    id: "calc",
    name: "Les Calculs",
    language: "python",
    description: "Effectue des calculs.",
    subject: null,
    code: "",
    explanation: "# Affiche le résultat du calcul 7 + 5\n",
    expected: "12",
  },
  {
    id: "condition",
    name: "Les Conditions",
    language: "python",
    description: "Prends des décisions avec if.",
    subject: null,
    code: "",
    explanation:
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
    explanation:
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
    explanation: "# Crée une liste contenant 1, 2 et 3, puis affiche-la\n",
    expected: "[1, 2, 3]",
  },
  {
    id: "function",
    name: "Les Fonctions",
    language: "python",
    description: "Regroupe du code réutilisable.",
    subject: null,
    code: "",
    explanation: '# Écris une fonction qui affiche "Salut", puis appelle-la\n',
    expected: "Salut",
  },
];

export const learningCProjects = [
  {
    id: "c-program",
    name: "Le Programme Minimal",
    language: "c",
    description: "La structure de base d'un programme C.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Complète le programme pour afficher exactement : Bonjour !

int main(void)
{
    return 0;
}
`,
    expected: "Bonjour !",
  },
  {
    id: "c-print",
    name: "Afficher du texte",
    language: "c",
    description: "Affiche du texte et des valeurs avec printf.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Affiche exactement : J'ai 18 ans
// Utilise la variable age et le format %d

int main(void)
{
    int age = 18;

    return 0;
}
`,
    expected: "J'ai 18 ans",
  },
  {
    id: "c-comment",
    name: "Les Commentaires",
    language: "c",
    description: "Explique ton code sans le modifier.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Écris un commentaire de ton choix,
// puis affiche exactement : Compris

int main(void)
{
    return 0;
}
`,
    expected: "Compris",
  },
  {
    id: "c-variable",
    name: "Les Variables",
    language: "c",
    description: "Stocke des informations, avec un type obligatoire.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Stocke 18 dans une variable age de type int,
// puis affiche-la

int main(void)
{
    return 0;
}
`,
    expected: "18",
  },
  {
    id: "c-calc",
    name: "Les Calculs",
    language: "c",
    description: "Effectue des calculs.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Affiche le résultat du calcul 7 + 5

int main(void)
{
    return 0;
}
`,
    expected: "12",
  },
  {
    id: "c-condition",
    name: "Les Conditions",
    language: "c",
    description: "Prends des décisions avec if.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// age vaut 20 : crée la variable age,
// et si elle est supérieure ou égale à 18, affiche : Majeur

int main(void)
{
    return 0;
}
`,
    expected: "Majeur",
  },
  {
    id: "c-loop",
    name: "Les Boucles",
    language: "c",
    description: "Répète plusieurs fois une action.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Avec une boucle, affiche les nombres 1, 2 puis 3 (un par ligne)

int main(void)
{
    return 0;
}
`,
    expected: "1\n2\n3",
  },
  {
    id: "c-array",
    name: "Les Tableaux",
    language: "c",
    description: "Stocke plusieurs valeurs.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Crée un tableau contenant 10, 20 et 30,
// puis affiche chaque valeur (une par ligne)

int main(void)
{
    return 0;
}
`,
    expected: "10\n20\n30",
  },
  {
    id: "c-string",
    name: "Les Chaînes de Caractères",
    language: "c",
    description: "Manipule du texte avec des tableaux de char.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Stocke "Alice" dans un tableau de char nommé prenom,
// puis affiche-le avec le format %s

int main(void)
{
    return 0;
}
`,
    expected: "Alice",
  },
  {
    id: "c-function",
    name: "Les Fonctions",
    language: "c",
    description: "Regroupe du code réutilisable.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// Écris une fonction qui affiche "Salut",
// puis appelle-la depuis main

int main(void)
{
    return 0;
}
`,
    expected: "Salut",
  },
  {
    id: "c-pointer",
    name: "Les Pointeurs",
    language: "c",
    description: "Manipule l'adresse d'une variable.",
    subject: null,
    code: "",
    explanation: `#include <stdio.h>

// valeur vaut 21.
// Sans y toucher directement, passe par un pointeur
// pour la changer en 42.

int main(void)
{
    int valeur = 21;

    printf("%d\\n", valeur);
    return 0;
}
`,
    expected: "42",
  },
];

export const learningProjects = [
  ...learningPythonProjects,
  ...learningCProjects,
];

const guidedProjects = [
  {
    id: "fil-ariane",
    name: "Fil d'Ariane",
    language: "python",
    description: "Guidez Thésée hors du labyrinthe en déroulant le fil.",
    subject: ArianeSubject,
    code: ArianeCode,
    explanation: null,
    hints: [
      "Utilise une boucle while qui continue tant que tu n'es pas sur la sortie 'o'.",
      "À chaque tour, regarde les cases voisines et déplace-toi si elle vaut '-' (chemin) ou 'o' (sortie).",
      "Mémorise chaque déplacement dans une liste pour savoir par où tu es passé.",
      "Si tu es bloqué, dépile ton dernier déplacement et fais le mouvement inverse (right<->left, up<->down) pour revenir en arrière.",
      "Lèves toi va voir un manta pour lui dire ton top 3 spotify.",
    ],
    difficulty: "Difficile",
  },
  {
    id: "appleton-calculator",
    name: "Appleton Calculator",
    language: "html",
    description: "Recréez la fameuse calculatrice d'Apple",
    subject: AppletonSubject,
    code: "",
    explanation: null,
    difficulty: "Moyen",
  },
];

export const projects = [...sandboxProjects, ...guidedProjects];
