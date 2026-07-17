import ArianeCode from "../projects/filDariane/dedale.py?raw";
import ArianeSubject from "../projects/filDariane/filDariane.pdf";
import AppletonSubject from "../projects/appletonCalculator/appletonCalculator.pdf";
import FilDariane from "../projects/filDariane/filDariane";

export const guidedProjects = [
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
    component: FilDariane,
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
    component: null,
  },
];
