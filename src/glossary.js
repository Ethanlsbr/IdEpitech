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
];
