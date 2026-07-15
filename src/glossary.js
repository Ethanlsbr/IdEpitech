export const glossary = [
  {
    id: "print",
    name: "Print",
    language: "python",
    description: "Affiche du texte dans la console.",
    code: `# Afficher du texte avec \`print\`

Le premier programme que l'on écrit en Python consiste généralement à afficher du texte.

Pour cela, on utilise la fonction \`print()\`.

\`\`\`py
print("Bonjour !")
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
\`\`\`

Tu peux afficher n'importe quel texte.

\`\`\`py
print("Je découvre Python !")
print("J'aime programmer.")
\`\`\`

Résultat :

\`\`\`txt
Je découvre Python !
J'aime programmer.
\`\`\`

---

## Afficher des nombres

\`print()\` peut aussi afficher des nombres.

\`\`\`py
print(42)
print(3.14)
\`\`\`

Résultat :

\`\`\`txt
42
3.14
\`\`\`

---

## Afficher plusieurs éléments

Tu peux afficher plusieurs valeurs en même temps.

\`\`\`py
print("J'ai", 18, "ans")
\`\`\`

Résultat :

\`\`\`txt
J'ai 18 ans
\`\`\`

Python ajoute automatiquement un espace entre chaque élément.

## Modifier la fin d'un \`print\`

Par défaut, \`print()\` passe automatiquement à la ligne après avoir affiché son contenu.

\`\`\`py
print("Bonjour")
print("Tout le monde")
\`\`\`

Résultat :

\`\`\`txt
Bonjour
Tout le monde
\`\`\`

Il est possible de modifier ce comportement grâce au paramètre \`end\`.

\`\`\`py
print("Bonjour", end=" ")
print("Tout le monde")
\`\`\`

Résultat :

\`\`\`txt
Bonjour Tout le monde
\`\`\`

On peut utiliser n'importe quel texte.

\`\`\`py
print("A", end="-")
print("B", end="-")
print("C")
\`\`\`

Résultat :

\`\`\`txt
A-B-C
\`\`\`
`,
  },
  {
    id: "comment",
    name: "Les Commentaires",
    language: "python",
    description: "Explique ton code sans le modifier.",
    code: `# Les commentaires

Les commentaires permettent d'ajouter des explications dans ton code.

Ils sont ignorés par Python et ne changent pas le fonctionnement du programme.

---

## Commentaire sur une ligne

On utilise le symbole \`#\`.

\`\`\`py

# Ceci est un commentaire

print("Bonjour")
\`\`\`

Résultat :

\`\`\`txt
Bonjour
\`\`\`

Les commentaires sont très utiles pour expliquer ce que fait ton programme.

\`\`\`py

# On affiche un message à l'écran

print("Bienvenue !")
\`\`\`

---

## Commentaires sur plusieurs lignes

Pour écrire un commentaire sur plusieurs lignes, on peut utiliser des triples guillemets.

\`\`\`py
"""
Ce commentaire
prend plusieurs
lignes.
"""

print("Bonjour")
\`\`\`

Résultat :

\`\`\`txt
Bonjour
\`\`\`

---
`,
  },
  {
    id: "variable",
    name: "Les Variables",
    language: "python",
    description: "Stocke des informations.",
    code: `# Les variables

Une variable permet de **stocker une information** pour la réutiliser plus tard.

On peut imaginer une variable comme une boîte dans laquelle on range une valeur.

Par exemple :

\`\`\`py
prenom = "Alice"
\`\`\`

Ici :

- \`prenom\` est le nom de la variable.
- \`"Alice"\` est la valeur stockée.

Pour afficher cette variable :

\`\`\`py
prenom = "Alice"

print(prenom)
\`\`\`

Résultat :

\`\`\`txt
Alice
\`\`\`

---

## Les principaux types

Chaque variable possède un **type**.

Les plus utilisés sont :

| Type      | Description    | Exemple                    |
| --------- | -------------- | -------------------------- |
| \`str\`   | Texte          | \`"Bonjour"\`, \`"Texte"\` |
| \`int\`   | Nombre entier  | \`15\`, \`-5\`             |
| \`float\` | Nombre décimal | \`4.5\`, \`-3.14\`         |
| \`bool\`  | Vrai ou Faux   | \`True\`, \`False\`        |

---

## Typer ses variables

Même si Python ne l'oblige pas, il est conseillé d'indiquer le type de ses variables.

Cela rend le code plus lisible.

\`\`\`py
prenom: str = "Alice"
age: int = 18
taille: float = 1.72
majeur: bool = True
\`\`\`

Tout fonctionne exactement comme avant.

---

## Modifier une variable

On peut changer sa valeur.

\`\`\`py
score: int = 10

print(score)

score = 20

print(score)
\`\`\`

Résultat :

\`\`\`txt
10
20
\`\`\`

---

## Utiliser plusieurs variables

\`\`\`py
prenom: str = "Emma"
age: int = 16

print(prenom)
print(age)
\`\`\`

Résultat :

\`\`\`txt
Emma
16
\`\`\`
`,
  },
  {
    id: "calc",
    name: "Les Calculs",
    language: "python",
    description: "Effectue des calculs dans ton code.",
    code: `# Les calculs

Python peut effectuer des calculs très facilement.

---

## Addition (\`+\`)

\`\`\`py
a: int = 10
b: int = 5

print(a + b)
\`\`\`

Résultat :

\`\`\`txt
15
\`\`\`

---

## Soustraction (\`-\`)

\`\`\`py
a: int = 10
b: int = 5

print(a - b)
\`\`\`

Résultat :

\`\`\`txt
5
\`\`\`

---

## Multiplication (\`\*\`)

\`\`\`py
a: int = 10
b: int = 5

print(a \* b)
\`\`\`

Résultat :

\`\`\`txt
50
\`\`\`

---

## Division (\`/\`)

La division classique renvoie un nombre décimal.

\`\`\`py
a: int = 10
b: int = 4

print(a / b)
\`\`\`

Résultat :

\`\`\`txt
2.5
\`\`\`

---

## Division entière (\`//\`)

La division entière garde uniquement la partie entière.

\`\`\`py
a: int = 10
b: int = 4

print(a // b)
\`\`\`

Résultat :

\`\`\`txt
2
\`\`\`

---

## Reste d'une division (\`%\`)

L'opérateur \`%\` renvoie le reste d'une division.

\`\`\`py
a: int = 10
b: int = 4

print(a % b)
\`\`\`

Résultat :

\`\`\`txt
2
\`\`\`

Cet opérateur est très utilisé pour savoir si un nombre est pair.

\`\`\`py
nombre: int = 8

print(nombre % 2)
\`\`\`

Résultat :

\`\`\`txt
0
\`\`\`

Comme le reste vaut \`0\`, le nombre est pair.

---

## Puissance (\`\*\*\`)

L'opérateur \`\*\*\` permet de calculer une puissance.

\`\`\`py
print(2 \*\* 3)
\`\`\`

Résultat :

\`\`\`txt
8
\`\`\`

---
`,
  },
  {
    id: "condition",
    name: "Les Conditions",
    language: "python",
    description: "Fait une action dans certain cas.",
    code: `# Les conditions

Parfois, un programme doit prendre une décision.

Pour cela, on utilise une condition.

Le mot-clé est \`if\`.

\`\`\`py
age: int = 18

if age >= 18:
    print("Tu es majeur.")
\`\`\`

Résultat :

\`\`\`txt
Tu es majeur.
\`\`\`

---

## Si la condition est fausse

On utilise \`else\`.

\`\`\`py
age: int = 15

if age >= 18:
    print("Tu es majeur.")
else:
    print("Tu es mineur.")
\`\`\`

Résultat :

\`\`\`txt
Tu es mineur.
\`\`\`

---

## Plusieurs possibilités

On peut ajouter \`elif\`.

\`\`\`py
note: int = 15

if note >= 16:
    print("Très bien")
elif note >= 10:
    print("Tu as réussi")
else:
    print("Tu dois recommencer")
\`\`\`

Résultat :

\`\`\`txt
Tu as réussi
\`\`\`

---

## Les comparaisons

Les comparaisons les plus utilisées sont :

| Symbole | Signification     |
| ------- | ----------------- |
| \`==\`  | égal à            |
| \`!=\`  | différent de      |
| \`>\`   | supérieur à       |
| \`<\`   | inférieur à       |
| \`>=\`  | supérieur ou égal |
| \`<=\`  | inférieur ou égal |

Exemple :

\`\`\`py
nombre: int = 8

if nombre == 8:
    print("Le nombre vaut 8")
\`\`\`

Résultat :

\`\`\`txt
Le nombre vaut 8
\`\`\`
`,
  },
  {
    id: "loop",
    name: "Les Boucles",
    language: "python",
    description: "Répète plusieurs fois une action.",
    code: `# Les boucles

Une boucle permet de répéter plusieurs fois une action.

---

## La boucle \`for\`

La boucle \`for\` est très utilisée lorsque l'on connaît le nombre de répétitions.

\`\`\`py
for i in range(5):
    print("Bonjour")
\`\`\`

Résultat :

\`\`\`txt
Bonjour
Bonjour
Bonjour
Bonjour
Bonjour
\`\`\`

---

## Utiliser le compteur

\`\`\`py
for i in range(5):
    print(i)
\`\`\`

Résultat :

\`\`\`txt
0
1
2
3
4
\`\`\`

---

## Choisir le début

\`\`\`py
for i in range(3, 8):
    print(i)
\`\`\`

Résultat :

\`\`\`txt
3
4
5
6
7
\`\`\`

---

## La boucle \`while\`

La boucle \`while\` continue tant qu'une condition est vraie.

\`\`\`py
compteur: int = 1

while compteur <= 5:
    print(compteur)
    compteur += 1
\`\`\`

Résultat :

\`\`\`txt
1
2
3
4
5
\`\`\`
`,
  },
  {
    id: "array",
    name: "Les Listes",
    language: "python",
    description: "Stocke plusieurs valeurs dans une seule variable.",
    code: `# Les listes

Une liste permet de stocker plusieurs valeurs dans une seule variable.

On utilise des crochets \`[]\`.

\`\`\`py
fruits: list[str] = ["Pomme", "Banane", "Orange"]
\`\`\`

---

## Afficher une liste

\`\`\`py
fruits: list[str] = ["Pomme", "Banane", "Orange"]

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Banane', 'Orange']
\`\`\`

---

## Accéder à un élément

Chaque élément possède un numéro appelé **indice**.

Le premier élément est toujours le numéro **0**.

\`\`\`py
fruits: list[str] = ["Pomme", "Banane", "Orange"]

print(fruits[0])
print(fruits[1])
\`\`\`

Résultat :

\`\`\`txt
Pomme
Banane
\`\`\`

---

## Ajouter un élément

On utilise \`append()\`.

\`\`\`py
fruits: list[str] = ["Pomme", "Banane"]

fruits.append("Orange")

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Banane', 'Orange']
\`\`\`

---

## Supprimer un élément

La fonction \`pop()\` permet de supprimer un élément d'une liste.

Si on ne donne pas de numéro, elle supprime le dernier élément.

\`\`\`py
fruits: list[str] = ["Pomme", "Banane", "Orange"]

fruits.pop()

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Banane']
\`\`\`

On peut aussi supprimer un élément précis grâce à son indice.

\`\`\`py
fruits: list[str] = ["Pomme", "Banane", "Orange"]

fruits.pop(1)

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Orange']
\`\`\`

---

## Modifier un élément

\`\`\`py
fruits: list[str] = ["Pomme", "Banane", "Orange"]

fruits[1] = "Kiwi"

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Kiwi', 'Orange']
\`\`\`

---

## Parcourir une liste

On peut utiliser une boucle \`for\`.

\`\`\`py
fruits: list[str] = ["Pomme", "Banane", "Orange"]

for fruit in fruits:
    print(fruit)
\`\`\`

Résultat :

\`\`\`txt
Pomme
Banane
Orange
\`\`\`

---

## Connaître la taille d'une liste

La fonction \`len()\` permet de connaître le nombre d'éléments.

\`\`\`py
fruits: list[str] = ["Pomme", "Banane", "Orange"]

print(len(fruits))
\`\`\`

Résultat :

\`\`\`txt
3
\`\`\`

---

## Les listes de listes

Une liste peut contenir d'autres listes.

On appelle cela une **liste de listes**.

\`\`\`py
grille: list[list[int]] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grille)
\`\`\`

Résultat :

\`\`\`txt
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
\`\`\`

---

## Accéder à un élément d'une liste de listes

Pour accéder à une valeur, il faut préciser la ligne puis la colonne.

\`\`\`py
grille: list[list[int]] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grille[1][2])
\`\`\`

Résultat :

\`\`\`txt
6
\`\`\`

Ici :

- \`grille[1]\` correspond à la deuxième ligne.
- \`grille[1][2]\` correspond au troisième élément de cette ligne.
`,
  },
  {
    id: "function",
    name: "Les Fonctions",
    language: "python",
    description: "Regroupe du code que l'on souhaite réutiliser.",
    code: `# Les fonctions

Une fonction permet de regrouper du code que l'on souhaite réutiliser.

On la crée avec \`def\`.

\`\`\`py
def dire_bonjour():
    print("Bonjour !")
\`\`\`

Pour l'utiliser :

\`\`\`py
def dire_bonjour():
    print("Bonjour !")

dire_bonjour()
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
\`\`\`

---

## Les paramètres

Une fonction peut recevoir des informations.

\`\`\`py
def dire_bonjour(prenom: str):
    print("Bonjour", prenom)

dire_bonjour("Alice")
\`\`\`

Résultat :

\`\`\`txt
Bonjour Alice
\`\`\`

---

## Retourner une valeur

Une fonction peut renvoyer un résultat grâce à \`return\`.

\`\`\`py
def addition(a: int, b: int) -> int:
    return a + b

resultat: int = addition(4, 7)

print(resultat)
\`\`\`

Résultat :

\`\`\`txt
11
\`\`\`

---

## Une fonction avec plusieurs paramètres

\`\`\`py
def presentation(prenom: str, age: int):
    print(prenom, "a", age, "ans.")

presentation("Emma", 16)
\`\`\`

Résultat :

\`\`\`txt
Emma a 16 ans.
\`\`\`
`,
  },
  {
    id: "c-program",
    name: "Le Programme Minimal",
    language: "c",
    description: "La structure de base d'un programme C.",
    code: `# Le programme minimal

En C, on ne peut pas écrire une instruction toute seule dans un fichier.

Tout programme doit contenir une fonction \`main\`.

C'est le **point d'entrée** : c'est par là que le programme commence.

\`\`\`c
int main(void)
{
    return 0;
}
\`\`\`

Ce programme est valide... mais il n'affiche rien.

---

## Un vrai programme

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Bonjour !\\n");
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
\`\`\`

Détaillons :

- \`#include <stdio.h>\` donne accès aux fonctions d'affichage comme \`printf\`.
- \`int main(void)\` est la fonction principale.
- \`return 0;\` indique que tout s'est bien passé.

---

## Le point-virgule

Chaque instruction se termine par un \`;\`.

\`\`\`c
printf("Bonjour !\\n");
\`\`\`

C'est l'oubli le plus fréquent quand on débute.

---

## Les accolades

Les accolades \`{\` et \`}\` délimitent le corps de la fonction.

Tout ce qui est entre les deux appartient à \`main\`.

---

## Le code de retour

\`return 0;\` signifie « le programme s'est terminé correctement ».

Une autre valeur signale une erreur.

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Une erreur est survenue\\n");
    return 1;
}
\`\`\`

---

## La compilation

Contrairement à Python, le C n'est pas lu directement.

Il est d'abord **compilé** : traduit en langage machine.

Si ton code contient une faute, le programme ne démarre même pas :
le compilateur affiche une erreur et t'indique la ligne.
`,
  },
  {
    id: "c-print",
    name: "Afficher du texte",
    language: "c",
    description: "Affiche du texte et des valeurs avec printf.",
    code: `# Afficher avec \`printf\`

La fonction \`printf\` affiche du texte dans la console.

Elle vient de \`stdio.h\`.

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Bonjour !\\n");
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
\`\`\`

---

## Le retour à la ligne

Contrairement à Python, \`printf\` ne passe **pas** à la ligne tout seul.

Il faut l'écrire soi-même avec \`\\n\`.

\`\`\`c
printf("Bonjour");
printf("Tout le monde\\n");
\`\`\`

Résultat :

\`\`\`txt
BonjourTout le monde
\`\`\`

Avec les \`\\n\` :

\`\`\`c
printf("Bonjour\\n");
printf("Tout le monde\\n");
\`\`\`

Résultat :

\`\`\`txt
Bonjour
Tout le monde
\`\`\`

---

## Afficher une valeur

Pour afficher une variable, on place un **format** dans le texte.

\`\`\`c
int age = 18;

printf("J'ai %d ans\\n", age);
\`\`\`

Résultat :

\`\`\`txt
J'ai 18 ans
\`\`\`

\`%d\` est remplacé par la valeur de \`age\`.

---

## Les formats les plus utilisés

| Format | Type           | Exemple       |
| ------ | -------------- | ------------- |
| \`%d\` | Nombre entier  | \`42\`        |
| \`%f\` | Nombre décimal | \`3.140000\`  |
| \`%c\` | Un caractère   | \`'A'\`       |
| \`%s\` | Une chaîne     | \`"Bonjour"\` |

---

## Afficher plusieurs valeurs

Il faut autant de valeurs que de formats, dans le même ordre.

\`\`\`c
int age = 16;
char initiale = 'E';

printf("%c a %d ans\\n", initiale, age);
\`\`\`

Résultat :

\`\`\`txt
E a 16 ans
\`\`\`

---

## Choisir le nombre de décimales

Par défaut, \`%f\` affiche six chiffres après la virgule.

\`\`\`c
float taille = 1.72;

printf("%f\\n", taille);
printf("%.2f\\n", taille);
\`\`\`

Résultat :

\`\`\`txt
1.720000
1.72
\`\`\`
`,
  },
  {
    id: "c-comment",
    name: "Les Commentaires",
    language: "c",
    description: "Explique ton code sans le modifier.",
    code: `# Les commentaires

Les commentaires servent à expliquer ton code.

Ils sont ignorés par le compilateur.

---

## Sur une ligne

On utilise \`//\`.

\`\`\`c
#include <stdio.h>

int main(void)
{
    // On affiche un message
    printf("Bonjour\\n");
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Bonjour
\`\`\`

Un commentaire peut aussi se placer en fin de ligne.

\`\`\`c
printf("Bonjour\\n"); // affiche le message
\`\`\`

---

## Sur plusieurs lignes

On utilise \`/*\` pour ouvrir et \`*/\` pour fermer.

\`\`\`c
/*
Ce commentaire
prend plusieurs
lignes.
*/

printf("Bonjour\\n");
\`\`\`

Résultat :

\`\`\`txt
Bonjour
\`\`\`

---

## Neutraliser du code

Un commentaire permet aussi de désactiver une ligne sans l'effacer.

\`\`\`c
printf("Ligne 1\\n");
// printf("Ligne 2\\n");
printf("Ligne 3\\n");
\`\`\`

Résultat :

\`\`\`txt
Ligne 1
Ligne 3
\`\`\`
`,
  },
  {
    id: "c-variable",
    name: "Les Variables",
    language: "c",
    description: "Stocke des informations, avec un type obligatoire.",
    code: `# Les variables

Une variable permet de **stocker une information**.

En C, il faut **toujours** indiquer son type.

\`\`\`c
int age = 18;
\`\`\`

Ici :

- \`int\` est le type : un nombre entier.
- \`age\` est le nom.
- \`18\` est la valeur.

---

## Afficher une variable

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 18;

    printf("%d\\n", age);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
18
\`\`\`

---

## Les principaux types

| Type       | Description         | Exemple        | Format  |
| ---------- | ------------------- | -------------- | ------- |
| \`int\`    | Nombre entier       | \`15\`, \`-5\` | \`%d\`  |
| \`float\`  | Nombre décimal      | \`4.5\`        | \`%f\`  |
| \`double\` | Décimal plus précis | \`3.14159\`    | \`%lf\` |
| \`char\`   | Un seul caractère   | \`'A'\`        | \`%c\`  |

Attention : un \`char\` s'écrit avec des guillemets **simples**.

\`\`\`c
char lettre = 'A';
\`\`\`

---

## Déclarer sans valeur

On peut déclarer une variable, puis lui donner une valeur plus tard.

\`\`\`c
int score;

score = 10;
\`\`\`

Attention : tant qu'on ne lui a rien donné, son contenu est imprévisible.

Ce n'est pas forcément \`0\` !

---

## Modifier une variable

\`\`\`c
#include <stdio.h>

int main(void)
{
    int score = 10;

    printf("%d\\n", score);

    score = 20;

    printf("%d\\n", score);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
10
20
\`\`\`

---

## Une valeur qui ne change pas

Le mot-clé \`const\` empêche toute modification.

\`\`\`c
const int MAX = 100;
\`\`\`

Essayer de modifier \`MAX\` provoque une erreur de compilation.

---

## Et les booléens ?

En C, il n'existe pas de type \`bool\` de base.

On utilise un \`int\` :

- \`0\` signifie **faux**.
- Toute autre valeur signifie **vrai**.
`,
  },
  {
    id: "c-calc",
    name: "Les Calculs",
    language: "c",
    description: "Effectue des calculs dans ton code.",
    code: `# Les calculs

---

## Les opérateurs

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 5;

    printf("%d\\n", a + b);
    printf("%d\\n", a - b);
    printf("%d\\n", a * b);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
15
5
50
\`\`\`

---

## La division entre entiers

C'est le piège le plus courant en C.

Quand on divise deux entiers, le résultat est un **entier** :
tout ce qui suit la virgule est perdu.

\`\`\`c
int a = 10;
int b = 4;

printf("%d\\n", a / b);
\`\`\`

Résultat :

\`\`\`txt
2
\`\`\`

Ce n'est pas \`2.5\`, mais bien \`2\`.

---

## Obtenir un résultat décimal

Il faut qu'au moins une des deux valeurs soit décimale.

\`\`\`c
float a = 10;
float b = 4;

printf("%.1f\\n", a / b);
\`\`\`

Résultat :

\`\`\`txt
2.5
\`\`\`

---

## Le reste (\`%\`)

L'opérateur \`%\` donne le reste d'une division entière.

\`\`\`c
printf("%d\\n", 10 % 4);
\`\`\`

Résultat :

\`\`\`txt
2
\`\`\`

Il sert très souvent à savoir si un nombre est pair.

\`\`\`c
int nombre = 8;

printf("%d\\n", nombre % 2);
\`\`\`

Résultat :

\`\`\`txt
0
\`\`\`

Le reste vaut \`0\` : le nombre est pair.

---

## Les raccourcis

\`\`\`c
int score = 10;

score += 5;  // score = score + 5
score -= 3;  // score = score - 3
score++;     // ajoute 1
score--;     // enlève 1
\`\`\`

---

## La puissance

Il n'existe pas d'opérateur puissance en C.

On multiplie, ou on utilise \`pow\` de \`math.h\`.

\`\`\`c
printf("%d\\n", 2 * 2 * 2);
\`\`\`

Résultat :

\`\`\`txt
8
\`\`\`
`,
  },
  {
    id: "c-condition",
    name: "Les Conditions",
    language: "c",
    description: "Fait une action dans certains cas.",
    code: `# Les conditions

Le mot-clé est \`if\`, et la condition se met entre **parenthèses**.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 18;

    if (age >= 18) {
        printf("Tu es majeur.\\n");
    }
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Tu es majeur.
\`\`\`

---

## Si la condition est fausse

\`\`\`c
int age = 15;

if (age >= 18) {
    printf("Tu es majeur.\\n");
} else {
    printf("Tu es mineur.\\n");
}
\`\`\`

Résultat :

\`\`\`txt
Tu es mineur.
\`\`\`

---

## Plusieurs possibilités

En C, on écrit \`else if\`, en deux mots.

\`\`\`c
int note = 15;

if (note >= 16) {
    printf("Très bien\\n");
} else if (note >= 10) {
    printf("Tu as réussi\\n");
} else {
    printf("Tu dois recommencer\\n");
}
\`\`\`

Résultat :

\`\`\`txt
Tu as réussi
\`\`\`

---

## Les comparaisons

| Symbole | Signification     |
| ------- | ----------------- |
| \`==\`  | égal à            |
| \`!=\`  | différent de      |
| \`>\`   | supérieur à       |
| \`<\`   | inférieur à       |
| \`>=\`  | supérieur ou égal |
| \`<=\`  | inférieur ou égal |

Attention : \`=\` **donne** une valeur, \`==\` **compare**.

\`\`\`c
int nombre = 8;

if (nombre == 8) {
    printf("Le nombre vaut 8\\n");
}
\`\`\`

Résultat :

\`\`\`txt
Le nombre vaut 8
\`\`\`

---

## Combiner des conditions

| Symbole    | Signification |
| ---------- | ------------- |
| \`&&\`     | ET            |
| \`\\|\\|\` | OU            |
| \`!\`      | NON           |

\`\`\`c
int age = 20;

if (age >= 18 && age < 65) {
    printf("Tu es un adulte\\n");
}
\`\`\`

Résultat :

\`\`\`txt
Tu es un adulte
\`\`\`
`,
  },
  {
    id: "c-loop",
    name: "Les Boucles",
    language: "c",
    description: "Répète plusieurs fois une action.",
    code: `# Les boucles

---

## La boucle \`for\`

Elle s'utilise quand on connaît le nombre de répétitions.

\`\`\`c
#include <stdio.h>

int main(void)
{
    for (int i = 0; i < 5; i++) {
        printf("Bonjour\\n");
    }
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Bonjour
Bonjour
Bonjour
Bonjour
Bonjour
\`\`\`

Les parenthèses contiennent trois parties séparées par des \`;\` :

- \`int i = 0\` : le point de départ.
- \`i < 5\` : la condition pour continuer.
- \`i++\` : ce qu'on fait à la fin de chaque tour.

---

## Utiliser le compteur

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);
}
\`\`\`

Résultat :

\`\`\`txt
0
1
2
3
4
\`\`\`

---

## Choisir le début

\`\`\`c
for (int i = 3; i < 8; i++) {
    printf("%d\\n", i);
}
\`\`\`

Résultat :

\`\`\`txt
3
4
5
6
7
\`\`\`

---

## La boucle \`while\`

Elle continue tant que la condition est vraie.

\`\`\`c
int compteur = 1;

while (compteur <= 5) {
    printf("%d\\n", compteur);
    compteur++;
}
\`\`\`

Résultat :

\`\`\`txt
1
2
3
4
5
\`\`\`

Attention : si la condition ne devient jamais fausse, le programme
tourne indéfiniment.

Ici, oublier \`compteur++\` bloquerait l'éditeur.

---

## Sortir d'une boucle

\`break\` arrête la boucle immédiatement.

\`\`\`c
for (int i = 0; i < 10; i++) {
    if (i == 3) {
        break;
    }
    printf("%d\\n", i);
}
\`\`\`

Résultat :

\`\`\`txt
0
1
2
\`\`\`

\`continue\` passe directement au tour suivant.

\`\`\`c
for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue;
    }
    printf("%d\\n", i);
}
\`\`\`

Résultat :

\`\`\`txt
0
1
3
4
\`\`\`
`,
  },
  {
    id: "c-array",
    name: "Les Tableaux",
    language: "c",
    description: "Stocke plusieurs valeurs dans une seule variable.",
    code: `# Les tableaux

Un tableau stocke plusieurs valeurs **du même type**.

\`\`\`c
int nombres[3] = {1, 2, 3};
\`\`\`

Ici :

- \`int\` est le type des éléments.
- \`[3]\` est la taille : le tableau contient 3 cases.

---

## Accéder à un élément

Chaque case possède un numéro appelé **indice**.

Le premier élément est toujours le numéro **0**.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int nombres[3] = {1, 2, 3};

    printf("%d\\n", nombres[0]);
    printf("%d\\n", nombres[1]);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
1
2
\`\`\`

---

## Modifier un élément

\`\`\`c
int nombres[3] = {1, 2, 3};

nombres[1] = 20;

printf("%d\\n", nombres[1]);
\`\`\`

Résultat :

\`\`\`txt
20
\`\`\`

---

## Parcourir un tableau

Contrairement à Python, on ne peut pas afficher un tableau d'un seul coup.

Il faut une boucle.

\`\`\`c
int nombres[3] = {10, 20, 30};

for (int i = 0; i < 3; i++) {
    printf("%d\\n", nombres[i]);
}
\`\`\`

Résultat :

\`\`\`txt
10
20
30
\`\`\`

---

## La taille d'un tableau

Un tableau ne connaît pas sa propre taille : c'est à toi de la retenir.

Il n'y a pas d'équivalent de \`len()\`.

\`\`\`c
int nombres[3] = {10, 20, 30};
int taille = 3;

for (int i = 0; i < taille; i++) {
    printf("%d\\n", nombres[i]);
}
\`\`\`

---

## Attention aux débordements

Rien ne t'empêche d'écrire en dehors du tableau...

\`\`\`c
int nombres[3] = {1, 2, 3};

printf("%d\\n", nombres[5]); // en dehors du tableau !
\`\`\`

...mais le résultat est imprévisible, et le programme peut planter.

C'est l'une des erreurs les plus fréquentes en C.

---

## Les tableaux à deux dimensions

\`\`\`c
int grille[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

printf("%d\\n", grille[1][2]);
\`\`\`

Résultat :

\`\`\`txt
6
\`\`\`

Ici :

- \`grille[1]\` correspond à la deuxième ligne.
- \`grille[1][2]\` correspond au troisième élément de cette ligne.
`,
  },
  {
    id: "c-string",
    name: "Les Chaînes de Caractères",
    language: "c",
    description: "Manipule du texte avec des tableaux de char.",
    code: `# Les chaînes de caractères

En C, il n'existe pas de type \`string\`.

Une chaîne est un **tableau de \`char\`**.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char prenom[] = "Alice";

    printf("%s\\n", prenom);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Alice
\`\`\`

On l'affiche avec le format \`%s\`.

---

## Un caractère ou une chaîne ?

La distinction est importante.

\`\`\`c
char lettre = 'A';   // un seul caractère : guillemets simples
char mot[] = "A";    // une chaîne : guillemets doubles
\`\`\`

---

## Le caractère de fin

Une chaîne se termine toujours par un caractère invisible : \`\\0\`.

\`\`\`c
char prenom[] = "Alice";
\`\`\`

Ce tableau contient en réalité **6** cases :

\`\`\`txt
'A' 'l' 'i' 'c' 'e' '\\0'
\`\`\`

C'est ce \`\\0\` qui permet à \`printf\` de savoir où s'arrêter.

---

## Accéder à une lettre

\`\`\`c
char prenom[] = "Alice";

printf("%c\\n", prenom[0]);
\`\`\`

Résultat :

\`\`\`txt
A
\`\`\`

---

## La longueur d'une chaîne

La fonction \`strlen\` vient de \`string.h\`.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char prenom[] = "Alice";

    printf("%d\\n", (int)strlen(prenom));
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
5
\`\`\`

\`strlen\` ne compte pas le \`\\0\`.

---

## Parcourir une chaîne

On s'arrête quand on rencontre le \`\\0\`.

\`\`\`c
char prenom[] = "Alice";

for (int i = 0; prenom[i] != '\\0'; i++) {
    printf("%c\\n", prenom[i]);
}
\`\`\`

Résultat :

\`\`\`txt
A
l
i
c
e
\`\`\`
`,
  },
  {
    id: "c-function",
    name: "Les Fonctions",
    language: "c",
    description: "Regroupe du code que l'on souhaite réutiliser.",
    code: `# Les fonctions

Une fonction regroupe du code réutilisable.

En C, il faut annoncer ce qu'elle **renvoie** et ce qu'elle **reçoit**.

\`\`\`c
#include <stdio.h>

void dire_bonjour(void)
{
    printf("Bonjour !\\n");
}

int main(void)
{
    dire_bonjour();
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
\`\`\`

Ici :

- \`void\` avant le nom : la fonction ne renvoie rien.
- \`(void)\` : elle ne reçoit aucun paramètre.

---

## L'ordre compte

Une fonction doit être écrite **avant** l'endroit où on l'utilise.

Sinon, le compilateur ne la connaît pas encore et refuse de compiler.

---

## Les paramètres

\`\`\`c
#include <stdio.h>

void afficher_age(int age)
{
    printf("J'ai %d ans\\n", age);
}

int main(void)
{
    afficher_age(18);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
J'ai 18 ans
\`\`\`

---

## Renvoyer une valeur

Le type écrit avant le nom indique ce que la fonction renvoie.

\`\`\`c
#include <stdio.h>

int addition(int a, int b)
{
    return a + b;
}

int main(void)
{
    int resultat = addition(4, 7);

    printf("%d\\n", resultat);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
11
\`\`\`

---

## Plusieurs paramètres

\`\`\`c
#include <stdio.h>

void presentation(char prenom[], int age)
{
    printf("%s a %d ans.\\n", prenom, age);
}

int main(void)
{
    presentation("Emma", 16);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Emma a 16 ans.
\`\`\`

---

## Et \`main\` ?

\`main\` est une fonction comme les autres.

Elle renvoie un \`int\` : c'est le code de retour du programme.
`,
  },
  {
    id: "c-pointer",
    name: "Les Pointeurs",
    language: "c",
    description: "Manipule l'adresse d'une variable.",
    code: `# Les pointeurs

Chaque variable est rangée quelque part dans la mémoire, à une **adresse**.

Un pointeur est une variable qui contient une adresse.

---

## L'adresse d'une variable

L'opérateur \`&\` donne l'adresse d'une variable.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 18;

    printf("%p\\n", &age);
    return 0;
}
\`\`\`

Résultat (l'adresse change à chaque exécution) :

\`\`\`txt
0x7ffd4a3b5c2c
\`\`\`

---

## Déclarer un pointeur

On ajoute une \`*\` après le type.

\`\`\`c
int age = 18;
int *pointeur = &age;
\`\`\`

\`pointeur\` ne contient pas \`18\`, mais **l'adresse** de \`age\`.

---

## Lire la valeur pointée

L'opérateur \`*\` donne la valeur rangée à cette adresse.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 18;
    int *pointeur = &age;

    printf("%d\\n", *pointeur);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
18
\`\`\`

---

## Modifier par le pointeur

\`\`\`c
int age = 18;
int *pointeur = &age;

*pointeur = 42;

printf("%d\\n", age);
\`\`\`

Résultat :

\`\`\`txt
42
\`\`\`

On a modifié \`age\` **sans jamais y toucher directement**.

---

## À quoi ça sert ?

Une fonction reçoit une **copie** de ses paramètres.

\`\`\`c
void doubler(int n)
{
    n = n * 2;
}
\`\`\`

Cette fonction ne change rien : elle modifie sa copie, puis l'oublie.

Avec un pointeur, elle peut modifier l'original.

\`\`\`c
#include <stdio.h>

void doubler(int *n)
{
    *n = *n * 2;
}

int main(void)
{
    int valeur = 21;

    doubler(&valeur);

    printf("%d\\n", valeur);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
42
\`\`\`

---

## Les deux usages de \`*\`

C'est ce qui embrouille le plus au début.

- À la **déclaration**, \`*\` veut dire « ceci est un pointeur ».
- **Ensuite**, \`*\` veut dire « la valeur à cette adresse ».

\`\`\`c
int *p = &age;  // déclaration
*p = 42;        // utilisation
\`\`\`
`,
  },
  {
    id: "c-scanf",
    name: "Lire une Entrée",
    language: "c",
    description: "Récupère ce que l'utilisateur tape au clavier.",
    code: `# Lire une entrée

La fonction \`scanf\` lit ce que l'utilisateur tape dans la console.

---

## Lire un nombre

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age;

    printf("Quel est ton age ? ");
    scanf("%d", &age);

    printf("Tu as %d ans\\n", age);
    return 0;
}
\`\`\`

Si l'utilisateur tape \`18\` :

\`\`\`txt
Quel est ton age ? 18
Tu as 18 ans
\`\`\`

---

## Ne pas oublier le \`&\`

\`scanf\` a besoin de **l'adresse** de la variable pour la remplir.

\`\`\`c
scanf("%d", &age);   // correct
scanf("%d", age);    // faux !
\`\`\`

C'est l'oubli le plus fréquent.

Sans le \`&\`, \`scanf\` ne sait pas où ranger la valeur.

---

## Lire un mot

Pour une chaîne, il ne faut **pas** de \`&\` :
un tableau est déjà une adresse.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char prenom[64];

    printf("Ton prenom ? ");
    scanf("%63s", prenom);

    printf("Bonjour %s !\\n", prenom);
    return 0;
}
\`\`\`

Le \`63\` limite la lecture à 63 caractères,
pour ne pas déborder du tableau.

---

## Lire plusieurs valeurs

\`\`\`c
int a;
int b;

scanf("%d %d", &a, &b);

printf("%d\\n", a + b);
\`\`\`

Si l'utilisateur tape \`2 40\` :

\`\`\`txt
42
\`\`\`

---

## Vérifier que ça a marché

\`scanf\` renvoie le nombre de valeurs lues correctement.

\`\`\`c
int age;

if (scanf("%d", &age) != 1) {
    printf("Ce n'est pas un nombre !\\n");
    return 1;
}
\`\`\`
`,
  },
];
