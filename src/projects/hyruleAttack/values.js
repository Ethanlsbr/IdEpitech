export const expectedHyruleAttack =
  "sceau n°1 ==> obtenu: True, attendu: True. Réussi !\nsceau n°2 ==> obtenu: True, attendu: True. Réussi !\nsceau n°3 ==> obtenu: True, attendu: True. Réussi !\nsceau n°4 ==> obtenu: False, attendu: False. Réussi !\nsceau n°5 ==> obtenu: False, attendu: False. Réussi !\nsceau n°6 ==> obtenu: False, attendu: False. Réussi !\nsceau n°7 ==> obtenu: False, attendu: False. Réussi !\nsceau n°8 ==> obtenu: False, attendu: False. Réussi !\nsceau n°9 ==> obtenu: False, attendu: False. Réussi !\nsceau n°10 ==> obtenu: False, attendu: False. Réussi !\nsceau n°11 ==> obtenu: False, attendu: False. Réussi !\nsceau n°12 ==> obtenu: False, attendu: False. Réussi !\n--- 12/12 sceaux correctement jugés ---\nVerification interne ==>OUVERT<==\nLa dernière porte cède : Hyrule vous ouvre ses portes, héros !";

export const goldenExpectedHyruleAttack = expectedHyruleAttack.replaceAll(
  "OUVERT",
  "MAITRISE",
);

export const explanationHyruleAttack =
  "def verifier(sudoku: list) -> bool:\n    # à vous de jouer !\n    return False\n";

export const hintsHyruleAttack = [
  "Le sceau n'est juste que si, sur chaque ligne, chaque colonne et chaque bloc, on retrouve exactement les neuf runes de 1 à 9 — donc une case encore vide (un 0) doit rendre toute la grille invalide.",
  "Parcourez les 9 lignes (getLine(sudoku[i])), les 9 colonnes (getColumn(sudoku, i)) et les 9 blocs (getBlock(sudoku, x, y) avec x et y qui prennent les valeurs 0, 3 et 6).",
  "Ces fonctions éliminent déjà les doublons : comparez simplement chaque ensemble de runes à la cible, par exemple set(getLine(sudoku[i])) == {1, 2, 3, 4, 5, 6, 7, 8, 9}.",
  "Dès qu'une seule de ces comparaisons est fausse, renvoyez False. Ne renvoyez True qu'après les avoir toutes validées.",
  "La porte a cédé, héros ! Levez-vous et allez fredonner le thème de Zelda à un Manta pour prouver votre triomphe.",
];
