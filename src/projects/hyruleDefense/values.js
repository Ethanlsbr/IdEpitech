export const explanationHyruleDefense =
  "grille = charger_facile()\nsudoku = [[v if v != 0 else [i for i in range(1, 10)] for v in ligne] for ligne in grille]\n\nafficher(sudoku)\n";

export const hintsHyruleDefense = [
  "Chargez le sceau difficile — c'est lui qui sauve Hyrule — puis remplacez chaque 0 par la liste [1, 2, 3, 4, 5, 6, 7, 8, 9] des runes encore possibles : grille = charger_difficile().",
  "getLine, getColumn et getBlock ignorent les cases encore en liste et ne renvoient que les runes déjà fixées : pour une case non résolue, retirez de sa liste toutes les runes présentes sur sa ligne (getLine(sudoku[ligne])), sa colonne (getColumn(sudoku, colonne)) et son bloc (getBlock(sudoku, ligne, colonne)).",
  "Dès que la liste d'une case ne contient plus qu'une seule rune, remplacez cette liste par cet unique entier : la case est résolue.",
  "Répétez ce balayage dans une boucle tant qu'il reste des cases en liste, et appelez afficher(sudoku) à chaque tour pour voir le sceau se restaurer (il s'illumine en vert une fois complet).",
  "Hyrule est sauvée ! Allez demander à un Manta, l'air de rien, son personnage préféré de jeux vidéo.",
];
