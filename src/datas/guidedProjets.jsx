import ArianeCode from "../projects/filDariane/dedale.py?raw";
import ArianeSubject from "../projects/filDariane/filDariane.pdf";
import AppletonSubject from "../projects/appletonCalculator/appletonCalculator.pdf";
import HyruleAttackSubject from "../projects/hyruleAttack/hyruleAttack.pdf";
import HyruleAttackHelpers from "../projects/hyruleAttack/sceau.py?raw";
import HyruleAttackGrader from "../projects/hyruleAttack/grader.py?raw";
import HyruleDefenseSubject from "../projects/hyruleDefense/hyruleDefense.pdf";
import HyruleDefenseHelpers from "../projects/hyruleDefense/sceaux.py?raw";
import FilDariane from "../projects/filDariane/filDariane";
import HyruleDefense from "../projects/hyruleDefense/hyruleDefense";
import {
  expectedHyruleAttack,
  explanationHyruleAttack,
  goldenExpectedHyruleAttack,
  hintsHyruleAttack,
} from "../projects/hyruleAttack/values";
import {
  explanationHyruleDefense,
  hintsHyruleDefense,
} from "../projects/hyruleDefense/values";
import {
  explanationFilDariane,
  hintsFilDariane,
} from "../projects/filDariane/values";

export const guidedProjects = [
  {
    id: "fil-ariane",
    name: "Fil d'Ariane",
    language: "python",
    description: "Guidez Thésée hors du labyrinthe en déroulant le fil.",
    subject: ArianeSubject,
    beforeCode: ArianeCode,
    afterCode: "",
    explanation: explanationFilDariane,
    hints: hintsFilDariane,
    difficulty: "Difficile",
    hasEnd: true,
    component: FilDariane,
  },
  {
    id: "appleton-calculator",
    name: "Appleton Calculator",
    language: "html",
    description: "Recréez la fameuse calculatrice d'Apple.",
    subject: AppletonSubject,
    beforeCode: "",
    afterCode: "",
    difficulty: "Moyen",
    hasEnd: false,
  },
  {
    id: "hyrule-attack",
    name: "Assaut d'Hyrule",
    language: "python",
    description: "Vérifiez le sceau Sheikah pour briser la porte d'Hyrule.",
    subject: HyruleAttackSubject,
    beforeCode: HyruleAttackHelpers,
    afterCode: HyruleAttackGrader,
    expected: expectedHyruleAttack,
    goldenExpected: goldenExpectedHyruleAttack,
    explanation: explanationHyruleAttack,
    hints: hintsHyruleAttack,
    difficulty: "Moyen",
    hasEnd: true,
  },
  {
    id: "hyrule-defense",
    name: "Défense d'Hyrule",
    language: "python",
    description: "Restaurez les sceaux brisés pour sauver Hyrule de Ganon.",
    subject: HyruleDefenseSubject,
    beforeCode: HyruleDefenseHelpers,
    afterCode: "",
    explanation: explanationHyruleDefense,
    hints: hintsHyruleDefense,
    difficulty: "Difficile",
    hasEnd: true,
    component: HyruleDefense,
  },
];
