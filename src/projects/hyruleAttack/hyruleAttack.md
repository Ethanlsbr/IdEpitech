# Sujet : Assaut d'Hyrule

## I. Introduction

Le royaume d'Hyrule est tombé. Ganon a scellé les portes de son château derrière une antique magie Sheikah, et vous êtes le dernier héros encore debout.

Devant chaque porte se dresse un terminal ancien gravé d'une grille de neuf runes sur neuf. Pour franchir le sceau, une règle immuable doit être respectée : sur **chaque ligne**, dans **chaque colonne** et à l'intérieur de **chaque bloc** de trois par trois, les neuf runes sacrées (de `1` à `9`) doivent apparaître **une seule et unique fois**.

Les Sheikah ont laissé de fausses grilles pour piéger les imprudents. Si vous validez un sceau corrompu, les gardiens vous réduiront en cendres. Vous devez donc bâtir un **vérificateur de sceau** capable de reconnaître, sans la moindre erreur, une grille juste et complète.

Le but du projet est de coder, en Python, un vérificateur de sudoku résolu.

## II. Les runes anciennes

Les Sheikah, dans leur grande sagesse, ont gravé sur le terminal trois fonctions que vous pouvez invoquer librement. Utilisez-les !

| fonction                                         | ce qu'elle vous rend                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------- |
| `getLine(ligne: list) -> list`                   | la liste des runes déjà présentes sur une ligne                           |
| `getColumn(sudoku: list, index: int) -> list`    | la liste des runes déjà présentes dans une colonne                        |
| `getBlock(sudoku: list, x: int, y: int) -> list` | la liste des runes déjà présentes dans le bloc contenant la case `(x, y)` |

> Remarquez que ces fonctions ne renvoient jamais deux fois la même rune : elles éliminent les doublons. C'est un indice précieux pour votre vérification.

## III. Le sceau à briser

Vous devez écrire **une unique fonction nommée** `verifier` qui reçoit une grille (une liste de neuf listes de neuf entiers) et qui rend un verdict :

- `True` si le sceau est **juste et complet** (les neuf runes sont présentes exactement une fois sur chaque ligne, chaque colonne et chaque bloc) ;
- `False` dans **tous les autres cas** : une rune en double, une rune manquante, ou une case encore vide.

```py
def verifier(sudoku: list) -> bool:
    # à vous de jouer !
    return False
```

Le terminal éprouvera votre fonction `verifier` contre **douze sceaux** :

- de véritables sceaux valides tirés des archives Sheikah (attendu : `True`) ;
- des sceaux corrompus où une rune apparaît deux fois (attendu : `False`) ;
- des sceaux incomplets, auxquels il manque des runes (attendu : `False`).

À chaque épreuve, le terminal affiche le résultat de cette façon :

```txt
sceau n°1 ==> obtenu: True, attendu: True. Réussi !
...
sceau n°4 ==> obtenu: False, attendu: False. Réussi !
...
```

**Le sceau ne cède que lorsque les douze grilles sont correctement jugées.** Tant qu'une seule épreuve échoue, la porte reste close.

## IV. La légende du héros

Félicitations, héros ! Si vous voulez prouver votre valeur aux Sheikah, tentez le défi ultime.

> **Bonus :** refaites le vérificateur **sans jamais utiliser** `getLine`, `getColumn` ni `getBlock`. À vous de parcourir vous-même les lignes, les colonnes et les blocs. Si vous réussissez vous obtiendrez la 'golden mark'

> Si vous êtes curieux, pensez à poser vos questions aux Mantas. Ils connaissent bien les secrets d'Hyrule.
