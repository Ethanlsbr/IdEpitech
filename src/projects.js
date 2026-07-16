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
  language,v
  description: `Écrivez et exécutez du ${LANGUAGES[language].label} librement.`,
  subject: null,
  beforeCode: "",
  afterCode: "",
  explanation: null,
  difficulty: "Facile",
  hasEnd: false,
}));

export const learningPythonProjects = [
  {
    id: "print",
    name: "Print",
    index: 1,
    language: "python",
    description: "Écris ton premier message dans la console.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "",
    explanation:
      "# Affiche dans la console exactement ce message : 'Bonjour !'\n# L'espace et le point d'exclamation en font partie.\n",
    expected: "Bonjour !",
  },
  {
    id: "comment",
    name: "Les Commentaires",
    index: 2,
    language: "python",
    description: "Ajoute une note qui ne s'exécute pas.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "",
    explanation:
      "# Deux choses à faire :\n#   1. écris un commentaire de ton choix\n#   2. affiche exactement le message 'Compris'\n# Seul 'Compris' doit apparaître dans la console. Ton commentaire, lui, ne doit rien afficher.\n",
    expected: "Compris",
  },
  {
    id: "variable",
    name: "Les Variables",
    index: 3,
    language: "python",
    description: "Stocke une information pour la réutiliser ensuite.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "print(f'Verification interne ==>{prenom}<==')",
    explanation:
      "# Range le prénom 'Alice' dans une variable nommée 'prenom', puis affiche-la.\n# C'est le contenu de la variable qui doit s'afficher, pas son nom.\n",
    expected: "Alice\nVerification interne ==>Alice<==",
  },
  {
    id: "calc",
    name: "Les Calculs",
    index: 4,
    language: "python",
    description: "Fais calculer Python à ta place.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "",
    explanation:
      "# Affiche le résultat du calcul 7 + 5\n# C'est à Python de calculer : n'écris pas le résultat toi-même.\n",
    expected: "12",
  },
  {
    id: "calc2",
    name: "Les Calculs 2",
    index: 5,
    language: "python",
    description: "Enchaîne les quatre opérations sur des variables données.",
    subject: null,
    hasEnd: true,
    beforeCode: "a: int = -3\nb: int = 67",
    afterCode: "",
    explanation:
      "# Les variables 'a' et 'b' ont déjà été créées au-dessus.\n# Affiche, une valeur par ligne : a + b, puis a - b, puis a x b, puis a ÷ b\n# Utilise a et b, ne recopie pas les nombres à la main.\n",
    expected: "64\n-70\n-201\n-0.04477611940298507",
  },
  {
    id: "condition",
    name: "Les Conditions",
    index: 6,
    language: "python",
    description: "N'agis que dans un seul cas.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "print(f'Verification interne ==>{age}<==')",
    explanation:
      "# Deux choses à faire :\n#   1. crée une variable nommée 'age' qui vaut 20\n#   2. affiche 'Majeur' uniquement si age est supérieur ou égal à 18\n# Si age valait 12, rien ne devrait s'afficher.\n",
    expected: "Majeur\nVerification interne ==>20<==",
  },
  {
    id: "condition2",
    name: "Les Conditions 2",
    index: 7,
    language: "python",
    description: "Traite aussi le cas contraire.",
    subject: null,
    hasEnd: true,
    beforeCode: "age: int = 4",
    afterCode: "",
    explanation:
      "# La variable 'age' a déjà été créée au-dessus.\n# Affiche 'Majeur' si age est supérieur ou égal à 18, et 'Mineur' sinon.\n# Ton code doit rester juste même si on changeait la valeur de age.\n",
    expected: "Mineur",
  },
  {
    id: "loop",
    name: "Les Boucles",
    index: 8,
    language: "python",
    description: "Répète une action sans réécrire la même ligne.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "",
    explanation:
      "# Avec une boucle, affiche les nombres 1, 2 puis 3, un par ligne.\n# Une seule ligne d'affichage : trois print à la suite, c'est raté.\n",
    expected: "1\n2\n3",
  },
  {
    id: "loop2",
    name: "Les Boucles 2",
    index: 9,
    language: "python",
    description: "Répète tant qu'une condition reste vraie.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "",
    explanation:
      "# Avec une boucle, affiche les puissances de 2 inférieures à 2048,\n# une par ligne : 1, 2, 4, 8, 16, etc.\n# On part de 1 et on multiplie par 2 à chaque tour. 2048 ne doit pas s'afficher.\n",
    expected: "1\n2\n4\n8\n16\n32\n64\n128\n256\n512\n1024",
  },
  {
    id: "array",
    name: "Les Listes",
    index: 10,
    language: "python",
    description: "Stocke plusieurs valeurs dans une seule variable.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "liste.append(4)\nprint(f'Verification interne ==>{liste}<==')",
    explanation:
      "# Crée une liste nommée 'liste' contenant les nombres 1, 2 et 3 dans cet ordre,\n# puis affiche-la en entier, et non un élément à la fois.\n",
    expected: "[1, 2, 3]\nVerification interne ==>[1, 2, 3, 4]<==",
  },
  {
    id: "array2",
    name: "Les Listes 2",
    index: 11,
    language: "python",
    description: "Ajoute un élément à une liste existante.",
    subject: null,
    hasEnd: true,
    beforeCode: 'fruits: list[str] = ["Pomme", "Banane"]',
    afterCode:
      "fruits.append('Kiwi')\nprint(f'Verification interne ==>{fruits}<==')",
    explanation:
      "# La liste 'fruits' a déjà été créée au-dessus.\n# Ajoute 'Orange' à la fin de cette liste, puis affiche-la.\n# Modifie la liste existante : ne la réécris pas en entier.\n",
    expected:
      "['Pomme', 'Banane', 'Orange']\nVerification interne ==>['Pomme', 'Banane', 'Orange', 'Kiwi']<==",
  },
  {
    id: "array3",
    name: "Les Listes 3",
    index: 12,
    language: "python",
    description: "Retire un élément d'une liste.",
    subject: null,
    hasEnd: true,
    beforeCode: "notes: list[int] = [12, 15, 8, 20]",
    afterCode: "print(f'Verification interne ==>{notes}<==')",
    explanation:
      "# La liste 'notes' a déjà été créée au-dessus.\n# Supprime la note 15 de la liste, puis affiche-la.\n# Ce n'est pas la valeur 15 qu'il faut donner, mais sa position dans la liste.\n",
    expected: "[12, 8, 20]\nVerification interne ==>[12, 8, 20]<==",
  },
  {
    id: "function",
    name: "Les Fonctions",
    index: 13,
    language: "python",
    description: "Regroupe du code sous un nom pour le réutiliser.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode:
      "print('Verification interne ==>')\nprint(appel())\nprint('<==')",
    explanation:
      "# Deux choses à faire :\n#   1. écris une fonction nommée 'appel' qui affiche 'Salut'\n#   2. appelle-la\n# Écrire la fonction ne suffit pas : sans l'appel, rien ne s'affiche.\n",
    expected: "Salut\nVerification interne ==>\nSalut\nNone\n<==",
  },
  {
    id: "function2",
    name: "Les Fonctions 2",
    index: 14,
    language: "python",
    description:
      "Fais une fonction qui reçoit une valeur et renvoie un résultat.",
    subject: null,
    hasEnd: true,
    beforeCode: "",
    afterCode: "print(f'Verification interne ==>{le_double(69)}<==')",
    explanation:
      "# Écris une fonction nommée 'le_double' qui prend un nombre entier en paramètre\n# et renvoie son double, puis affiche le résultat obtenu avec 7.\n# Elle ne doit rien afficher elle-même : elle renvoie, et c'est toi qui affiches.\n# Elle doit marcher avec n'importe quel entier, pas seulement 7.\n",
    expected: "14\nVerification interne ==>138<==",
  },
];

export const learningCProjects = [
  {
    id: "c-program",
    name: "Le Programme Minimal",
    language: "c",
    description: "La structure de base d'un programme C.",
    subject: null,
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    hasEnd: true,
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
    beforeCode: ArianeCode,
    afterCode: "",
    explanation:
      "# Charge un labyrinthe : print_map() (la plus facile), print_easy_map(), print_medium_map() ou print_hard_map()\nprint_map()\n\n# Déplace Thésée avec up(), down(), left(), right()\n# Une case déjà visitée devient '.' — appelle finish() quand tu es sur la sortie 'o'\n",
    hints: [
      "Utilise une boucle while qui continue tant que tu n'es pas sur la sortie 'o'.",
      "À chaque tour, regarde les cases voisines et déplace-toi si elle vaut '-' (chemin) ou 'o' (sortie).",
      "Mémorise chaque déplacement dans une liste pour savoir par où tu es passé.",
      "Si tu es bloqué, dépile ton dernier déplacement et fais le mouvement inverse (right<->left, up<->down) pour revenir en arrière.",
      "Lèves toi va voir un manta pour lui dire ton top 3 spotify.",
    ],
    difficulty: "Difficile",
    hasEnd: true,
  },
  {
    id: "appleton-calculator",
    name: "Appleton Calculator",
    language: "html",
    description: "Recréez la fameuse calculatrice d'Apple",
    subject: AppletonSubject,
    beforeCode: "",
    afterCode: "",
    explanation: null,
    difficulty: "Moyen",
    hasEnd: false,
  },
];

export const projects = [...sandboxProjects, ...guidedProjects];
