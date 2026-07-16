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
    id: "html-structure",
    name: "La Structure d'une page",
    language: "html",
    description: "Le squelette de toute page web.",
    code: `# La structure d'une page HTML

HTML est le langage qui décrit le **contenu** d'une page web.

Une page est faite de **balises**. Une balise s'ouvre, puis se ferme.

\`\`\`html
<p>Bonjour !</p>
\`\`\`

Ici :

- \`<p>\` est la balise ouvrante.
- \`</p>\` est la balise fermante.
- \`Bonjour !\` est le contenu affiché.

---

## Le squelette d'une page

Toute page HTML suit toujours le même modèle.

\`\`\`html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Ma première page</title>
  </head>
  <body>
    <h1>Bonjour !</h1>
  </body>
</html>
\`\`\`

Résultat affiché :

\`\`\`txt
Bonjour !
\`\`\`

Chaque partie a un rôle précis :

| Balise            | Rôle                                          |
| ----------------- | --------------------------------------------- |
| \`<!DOCTYPE html>\` | Prévient le navigateur que c'est du HTML      |
| \`<html>\`          | Contient toute la page                        |
| \`<head>\`          | Les informations invisibles                   |
| \`<title>\`         | Le nom affiché dans l'onglet du navigateur    |
| \`<body>\`          | Tout ce qui est visible à l'écran             |

Seul ce qui est dans \`<body>\` s'affiche dans la page.

---

## Les balises qui ne se ferment pas

Certaines balises n'ont aucun contenu. On les ferme directement.

\`\`\`html
<br />
<img src="chat.png" alt="Un chat" />
\`\`\`

---

## Ranger ses balises

Une balise peut en contenir d'autres. On décale alors le contenu vers la droite.

\`\`\`html
<body>
  <h1>Mon site</h1>
  <p>Bienvenue !</p>
</body>
\`\`\`

Ce décalage s'appelle l'**indentation**. Le navigateur s'en moque, mais cela rend ton code beaucoup plus lisible.
`,
  },
  {
    id: "html-text",
    name: "Le Texte",
    language: "html",
    description: "Affiche des titres et des paragraphes.",
    code: `# Le texte en HTML

---

## Les titres

Il existe six niveaux de titres, de \`<h1>\` à \`<h6>\`.

\`\`\`html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Encore plus petit</h3>
\`\`\`

\`<h1>\` est le plus gros, \`<h6>\` le plus petit.

Une page ne doit contenir qu'un seul \`<h1>\` : c'est le titre principal.

---

## Les paragraphes

La balise \`<p>\` sert à écrire un paragraphe de texte.

\`\`\`html
<p>J'apprends le HTML.</p>
<p>C'est plus simple que je pensais.</p>
\`\`\`

Résultat affiché :

\`\`\`txt
J'apprends le HTML.

C'est plus simple que je pensais.
\`\`\`

---

## Les retours à la ligne

Attention : les retours à la ligne écrits dans le code sont **ignorés**.

\`\`\`html
<p>Première phrase.
Deuxième phrase.</p>
\`\`\`

Résultat affiché :

\`\`\`txt
Première phrase. Deuxième phrase.
\`\`\`

Pour forcer un retour à la ligne, il faut utiliser \`<br />\`.

\`\`\`html
<p>Première phrase.<br />Deuxième phrase.</p>
\`\`\`

Résultat affiché :

\`\`\`txt
Première phrase.
Deuxième phrase.
\`\`\`

---

## Mettre un mot en valeur

\`\`\`html
<p>Ce mot est <strong>important</strong>.</p>
<p>Ce mot est <em>accentué</em>.</p>
\`\`\`

- \`<strong>\` affiche le texte en **gras**.
- \`<em>\` affiche le texte en _italique_.
`,
  },
  {
    id: "html-link-image",
    name: "Les Liens et les Images",
    language: "html",
    description: "Relie tes pages et affiche des images.",
    code: `# Les liens et les images

---

## Les liens

La balise \`<a>\` crée un lien cliquable.

\`\`\`html
<a href="https://www.epitech.eu">Visiter Epitech</a>
\`\`\`

Ici :

- \`href\` indique la destination du lien.
- \`Visiter Epitech\` est le texte sur lequel on clique.

---

## Ouvrir dans un nouvel onglet

\`\`\`html
<a href="https://www.epitech.eu" target="_blank">Visiter Epitech</a>
\`\`\`

---

## Les images

La balise \`<img>\` affiche une image. Elle n'a pas de balise fermante.

\`\`\`html
<img src="chat.png" alt="Un chat qui dort" />
\`\`\`

Ici :

- \`src\` indique où se trouve l'image.
- \`alt\` décrit l'image. Ce texte s'affiche si l'image ne charge pas, et il est lu par les logiciels pour les personnes aveugles.

\`alt\` n'est pas optionnel : mets-le toujours.

---

## Choisir la taille d'une image

\`\`\`html
<img src="chat.png" alt="Un chat qui dort" width="300" />
\`\`\`

L'image fera 300 pixels de large, et sa hauteur s'adaptera toute seule.

---

## Une image cliquable

Comme une balise peut en contenir une autre, on peut mettre une image dans un lien.

\`\`\`html
<a href="https://www.epitech.eu">
  <img src="logo.png" alt="Logo Epitech" />
</a>
\`\`\`
`,
  },
  {
    id: "html-list",
    name: "Les Listes",
    language: "html",
    description: "Range plusieurs éléments les uns sous les autres.",
    code: `# Les listes en HTML

---

## Une liste à puces

On utilise \`<ul>\` pour la liste, et \`<li>\` pour chaque élément.

\`\`\`html
<ul>
  <li>Pomme</li>
  <li>Banane</li>
  <li>Orange</li>
</ul>
\`\`\`

Résultat affiché :

\`\`\`txt
• Pomme
• Banane
• Orange
\`\`\`

---

## Une liste numérotée

On remplace \`<ul>\` par \`<ol>\`.

\`\`\`html
<ol>
  <li>Se lever</li>
  <li>Coder</li>
  <li>Dormir</li>
</ol>
\`\`\`

Résultat affiché :

\`\`\`txt
1. Se lever
2. Coder
3. Dormir
\`\`\`

Les numéros sont générés automatiquement : ne les écris pas toi-même.

---

## Retenir la différence

| Balise | Signification | Affichage |
| ------ | ------------- | --------- |
| \`<ul>\` | Liste non ordonnée | Des puces |
| \`<ol>\` | Liste ordonnée     | Des numéros |
| \`<li>\` | Un élément de liste | Une ligne |

---

## Une liste dans une liste

Un \`<li>\` peut contenir une autre liste.

\`\`\`html
<ul>
  <li>Fruits
    <ul>
      <li>Pomme</li>
      <li>Banane</li>
    </ul>
  </li>
  <li>Légumes</li>
</ul>
\`\`\`
`,
  },
  {
    id: "html-attribute",
    name: "Les Attributs, div et span",
    language: "html",
    description: "Donne des informations et regroupe ton contenu.",
    code: `# Les attributs, \`div\` et \`span\`

---

## Les attributs

Un attribut ajoute une information à une balise. Il s'écrit dans la balise ouvrante.

\`\`\`html
<a href="https://www.epitech.eu">Epitech</a>
\`\`\`

Ici, \`href\` est l'attribut et \`"https://www.epitech.eu"\` est sa valeur.

Une balise peut avoir plusieurs attributs.

\`\`\`html
<img src="chat.png" alt="Un chat" width="200" />
\`\`\`

---

## L'attribut \`class\`

\`class\` sert à donner un nom à une balise, pour pouvoir la décorer en CSS plus tard.

\`\`\`html
<p class="important">Attention !</p>
\`\`\`

Plusieurs balises peuvent partager la même \`class\`.

---

## L'attribut \`id\`

\`id\` sert aussi à nommer une balise, mais il doit être **unique** dans toute la page.

\`\`\`html
<p id="message">Bonjour</p>
\`\`\`

| Attribut | Combien de balises peuvent le porter ? |
| -------- | -------------------------------------- |
| \`class\` | Autant que tu veux |
| \`id\`    | Une seule dans la page |

---

## La balise \`div\`

\`<div>\` est une boîte qui ne fait rien toute seule. Elle sert à **regrouper** du contenu.

\`\`\`html
<div class="carte">
  <h2>Chat</h2>
  <p>Un animal qui dort beaucoup.</p>
</div>
\`\`\`

Un \`<div>\` prend toute la largeur disponible et se place sous le contenu précédent.

---

## La balise \`span\`

\`<span>\` fait la même chose, mais pour un morceau de texte **à l'intérieur** d'une ligne.

\`\`\`html
<p>Mon fruit préféré est la <span class="rouge">pomme</span>.</p>
\`\`\`

Le \`<span>\` ne casse pas la ligne : le texte continue autour.
`,
  },
  {
    id: "html-form",
    name: "Les Boutons et les Champs",
    language: "html",
    description: "Récupère ce que l'utilisateur écrit.",
    code: `# Les boutons et les champs

---

## Un bouton

\`\`\`html
<button>Valider</button>
\`\`\`

Le texte entre les balises est celui affiché sur le bouton.

Pour l'instant, ce bouton ne fait rien : c'est le JavaScript qui lui donnera une action.

---

## Un champ de texte

\`\`\`html
<input type="text" placeholder="Ton prénom" />
\`\`\`

Ici :

- \`type\` indique le genre de champ.
- \`placeholder\` est le texte grisé affiché tant que le champ est vide.

\`<input>\` n'a pas de balise fermante.

---

## Les types de champs

\`\`\`html
<input type="text" placeholder="Ton prénom" />
<input type="number" placeholder="Ton âge" />
<input type="password" placeholder="Mot de passe" />
<input type="checkbox" />
\`\`\`

| Type       | Utilisation                      |
| ---------- | -------------------------------- |
| \`text\`     | Du texte libre                   |
| \`number\`   | Un nombre uniquement             |
| \`password\` | Du texte masqué par des points   |
| \`checkbox\` | Une case à cocher                |

---

## Nommer un champ

Comme pour les autres balises, on utilise un \`id\` pour pouvoir retrouver le champ plus tard.

\`\`\`html
<input type="text" id="prenom" placeholder="Ton prénom" />
<button id="valider">Valider</button>
\`\`\`

---

## Une étiquette

\`<label>\` affiche un texte devant le champ.

\`\`\`html
<label for="prenom">Prénom :</label>
<input type="text" id="prenom" />
\`\`\`

L'attribut \`for\` doit contenir l'\`id\` du champ concerné. Cliquer sur l'étiquette place alors le curseur dans le champ.
`,
  },
  {
    id: "css-intro",
    name: "Écrire du CSS",
    language: "css",
    description: "Décore ta page web.",
    code: `# Écrire du CSS

Si le HTML est le contenu de la page, le CSS est sa **décoration** : les couleurs, les tailles, les espaces.

---

## Une règle CSS

\`\`\`css
p {
  color: red;
}
\`\`\`

Cette règle veut dire : « tous les paragraphes seront rouges ».

Elle se lit en trois parties :

- \`p\` est le **sélecteur** : ce que l'on veut décorer.
- \`color\` est la **propriété** : ce que l'on veut changer.
- \`red\` est la **valeur** : le résultat voulu.

Chaque ligne se termine par un point-virgule \`;\`.

---

## Plusieurs propriétés

On peut changer plusieurs choses dans la même règle.

\`\`\`css
p {
  color: red;
  font-size: 20px;
}
\`\`\`

---

## Où écrire son CSS

La méthode la plus courante est la balise \`<style>\`, placée dans le \`<head>\`.

\`\`\`html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Ma page</title>
    <style>
      h1 {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Bonjour !</h1>
  </body>
</html>
\`\`\`

Résultat : le titre s'affiche en bleu.

---

## Dans un fichier séparé

Quand le CSS devient long, on le range dans son propre fichier, par exemple \`style.css\`.

\`\`\`css
h1 {
  color: blue;
}
\`\`\`

On le relie ensuite à la page dans le \`<head>\`.

\`\`\`html
<link rel="stylesheet" href="style.css" />
\`\`\`

C'est la façon de faire à préférer sur un vrai site.

---

## Les commentaires

\`\`\`css
/* Le titre de la page */
h1 {
  color: blue;
}
\`\`\`

Tout ce qui est entre \`/*\` et \`*/\` est ignoré.
`,
  },
  {
    id: "css-selector",
    name: "Les Sélecteurs",
    language: "css",
    description: "Choisis les éléments à décorer.",
    code: `# Les sélecteurs

Le sélecteur indique **quels éléments** la règle va décorer.

---

## Par nom de balise

\`\`\`css
p {
  color: gray;
}
\`\`\`

Tous les \`<p>\` de la page deviennent gris.

---

## Par \`class\`

Pour ne viser que certaines balises, on leur donne une \`class\` en HTML.

\`\`\`html
<p class="important">Attention !</p>
<p>Texte normal.</p>
\`\`\`

En CSS, on écrit un point \`.\` devant le nom de la classe.

\`\`\`css
.important {
  color: red;
}
\`\`\`

Seul le premier paragraphe devient rouge.

---

## Par \`id\`

Pour viser une seule balise précise, on utilise son \`id\`.

\`\`\`html
<p id="message">Bonjour</p>
\`\`\`

En CSS, on écrit un dièse \`#\` devant.

\`\`\`css
#message {
  color: green;
}
\`\`\`

---

## Résumé

| Sélecteur   | Vise                               |
| ----------- | ---------------------------------- |
| \`p\`         | Toutes les balises \`<p>\`           |
| \`.important\` | Les balises avec \`class="important"\` |
| \`#message\`  | La balise avec \`id="message"\`      |

Retiens : le point pour une \`class\`, le dièse pour un \`id\`.

---

## Décorer plusieurs sélecteurs d'un coup

On les sépare par une virgule.

\`\`\`css
h1,
h2 {
  color: purple;
}
\`\`\`

---

## Au survol de la souris

\`\`\`css
button:hover {
  color: red;
}
\`\`\`

Le bouton devient rouge uniquement quand la souris passe dessus.
`,
  },
  {
    id: "css-text",
    name: "Les Couleurs et le Texte",
    language: "css",
    description: "Change les couleurs et l'apparence du texte.",
    code: `# Les couleurs et le texte

---

## La couleur du texte

\`\`\`css
p {
  color: red;
}
\`\`\`

---

## La couleur de fond

\`\`\`css
p {
  background-color: yellow;
}
\`\`\`

Ne confonds pas : \`color\` pour le texte, \`background-color\` pour le fond.

---

## Écrire une couleur

Il existe plusieurs façons de donner une couleur.

\`\`\`css
p {
  color: red;
}

p {
  color: #ff0000;
}

p {
  color: rgb(255, 0, 0);
}
\`\`\`

Ces trois règles donnent exactement le même rouge.

| Écriture | Exemple | Remarque |
| -------- | ------- | -------- |
| Le nom   | \`red\`, \`blue\`, \`white\` | Simple, mais peu de choix |
| Le code hexadécimal | \`#ff0000\` | Le plus utilisé |
| \`rgb\`    | \`rgb(255, 0, 0)\` | Rouge, vert et bleu, de 0 à 255 |

---

## La taille du texte

\`\`\`css
h1 {
  font-size: 40px;
}
\`\`\`

\`px\` signifie « pixels ». N'oublie jamais l'unité : \`font-size: 40\` ne fonctionne pas.

---

## La police

\`\`\`css
body {
  font-family: Arial, sans-serif;
}
\`\`\`

On donne plusieurs polices : si la première n'existe pas sur l'ordinateur, le navigateur essaie la suivante.

---

## Le gras et l'italique

\`\`\`css
p {
  font-weight: bold;
  font-style: italic;
}
\`\`\`

---

## Aligner le texte

\`\`\`css
h1 {
  text-align: center;
}
\`\`\`

Les valeurs possibles sont \`left\`, \`center\` et \`right\`.
`,
  },
  {
    id: "css-box",
    name: "Le Modèle de Boîte",
    language: "css",
    description: "Gère les tailles, les bordures et les espaces.",
    code: `# Le modèle de boîte

En CSS, **chaque élément est une boîte**.

Cette boîte est faite de quatre couches, de l'intérieur vers l'extérieur :

| Couche      | Rôle                                       |
| ----------- | ------------------------------------------ |
| Le contenu  | Le texte ou l'image                        |
| \`padding\`   | L'espace **à l'intérieur** de la bordure   |
| \`border\`    | Le trait autour de la boîte                |
| \`margin\`    | L'espace **à l'extérieur** de la bordure   |

Retiens la différence : \`padding\` pousse le contenu loin de la bordure, \`margin\` pousse les autres éléments loin de la boîte.

---

## La taille

\`\`\`css
div {
  width: 300px;
  height: 150px;
}
\`\`\`

On peut aussi donner une largeur en pourcentage de l'espace disponible.

\`\`\`css
div {
  width: 50%;
}
\`\`\`

---

## La bordure

\`\`\`css
div {
  border: 2px solid black;
}
\`\`\`

Cette ligne donne trois informations d'un coup : l'épaisseur, le style du trait et la couleur.

\`\`\`css
div {
  border: 3px dashed red;
}
\`\`\`

---

## Arrondir les coins

\`\`\`css
div {
  border-radius: 10px;
}
\`\`\`

Plus le nombre est grand, plus les coins sont arrondis.

---

## Le \`padding\`

\`\`\`css
div {
  padding: 20px;
}
\`\`\`

Le contenu est décollé de 20 pixels de la bordure, sur les quatre côtés.

On peut viser un seul côté.

\`\`\`css
div {
  padding-top: 20px;
  padding-left: 10px;
}
\`\`\`

---

## La \`margin\`

\`\`\`css
div {
  margin: 20px;
}
\`\`\`

La boîte est décollée de 20 pixels des éléments voisins.

---

## Centrer une boîte

\`\`\`css
div {
  width: 300px;
  margin: auto;
}
\`\`\`

\`auto\` répartit l'espace restant à gauche et à droite : la boîte se retrouve au milieu.

Attention, cela ne marche que si la boîte a une \`width\`.
`,
  },
  {
    id: "css-flex",
    name: "Placer avec Flexbox",
    language: "css",
    description: "Aligne plusieurs éléments côte à côte.",
    code: `# Placer avec Flexbox

Par défaut, les \`<div>\` se placent les unes **sous** les autres.

\`\`\`html
<div class="boite">A</div>
<div class="boite">B</div>
<div class="boite">C</div>
\`\`\`

Résultat affiché :

\`\`\`txt
A
B
C
\`\`\`

Flexbox permet de les placer **côte à côte**.

---

## Activer Flexbox

On l'active sur le **parent**, pas sur les boîtes elles-mêmes.

\`\`\`html
<div class="conteneur">
  <div class="boite">A</div>
  <div class="boite">B</div>
  <div class="boite">C</div>
</div>
\`\`\`

\`\`\`css
.conteneur {
  display: flex;
}
\`\`\`

Résultat affiché :

\`\`\`txt
A B C
\`\`\`

---

## Espacer les éléments

\`\`\`css
.conteneur {
  display: flex;
  gap: 20px;
}
\`\`\`

\`gap\` ajoute un espace entre chaque enfant.

---

## Placer horizontalement

\`justify-content\` gère la position sur la ligne.

\`\`\`css
.conteneur {
  display: flex;
  justify-content: center;
}
\`\`\`

| Valeur          | Résultat                                  |
| --------------- | ----------------------------------------- |
| \`flex-start\`    | Tout à gauche (c'est le comportement par défaut) |
| \`center\`        | Au milieu                                 |
| \`flex-end\`      | Tout à droite                             |
| \`space-between\` | Collés aux deux bords, espacés au milieu  |

---

## Placer verticalement

\`align-items\` gère la position en hauteur.

\`\`\`css
.conteneur {
  display: flex;
  height: 300px;
  align-items: center;
}
\`\`\`

---

## Centrer parfaitement

C'est la recette la plus utilisée du CSS.

\`\`\`css
.conteneur {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
\`\`\`

Le contenu se retrouve pile au milieu, horizontalement et verticalement.

---

## Empiler à la verticale

\`\`\`css
.conteneur {
  display: flex;
  flex-direction: column;
}
\`\`\`

Attention : avec \`flex-direction: column\`, les rôles s'inversent. \`justify-content\` gère alors la verticale, et \`align-items\` l'horizontale.
`,
  },
  {
    id: "js-console",
    name: "Console.log",
    language: "js",
    description: "Affiche des messages dans la console.",
    code: `# Afficher avec \`console.log\`

Le JavaScript est le langage qui rend une page web **vivante** : il réagit aux clics et modifie le contenu.

Pour afficher un message, on utilise \`console.log()\`.

\`\`\`js
console.log("Bonjour !");
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
\`\`\`

Chaque instruction se termine par un point-virgule \`;\`.

---

## Où s'affiche le résultat ?

Le message ne s'affiche **pas** dans la page : il apparaît dans la console du navigateur.

Pour l'ouvrir, appuie sur la touche \`F12\`, puis va dans l'onglet « Console ».

\`console.log\` sert à toi, le développeur, pour vérifier ce que fait ton code. Ce n'est pas fait pour être vu par le visiteur.

---

## Afficher des nombres

\`\`\`js
console.log(42);
console.log(3.14);
\`\`\`

Résultat :

\`\`\`txt
42
3.14
\`\`\`

---

## Afficher plusieurs éléments

\`\`\`js
console.log("J'ai", 18, "ans");
\`\`\`

Résultat :

\`\`\`txt
J'ai 18 ans
\`\`\`

---

## Où écrire son JavaScript

Dans une balise \`<script>\`, placée juste avant la fin du \`<body>\`.

\`\`\`html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Ma page</title>
  </head>
  <body>
    <h1>Bonjour !</h1>
    <script>
      console.log("La page est chargée");
    </script>
  </body>
</html>
\`\`\`

On la met à la fin pour que le HTML au-dessus existe déjà quand le script s'exécute.

---

## Les commentaires

\`\`\`js
// Ceci est un commentaire
console.log("Bonjour");

/*
Celui-ci prend
plusieurs lignes.
*/
\`\`\`
`,
  },
  {
    id: "js-variable",
    name: "Les Variables",
    language: "js",
    description: "Stocke des informations.",
    code: `# Les variables

Une variable permet de **stocker une information** pour la réutiliser plus tard.

\`\`\`js
let prenom = "Alice";

console.log(prenom);
\`\`\`

Résultat :

\`\`\`txt
Alice
\`\`\`

Ici :

- \`let\` annonce la création d'une variable.
- \`prenom\` est son nom.
- \`"Alice"\` est la valeur stockée.

---

## \`let\` ou \`const\` ?

\`let\` crée une variable que l'on pourra modifier.

\`\`\`js
let score = 10;

score = 20;

console.log(score);
\`\`\`

Résultat :

\`\`\`txt
20
\`\`\`

\`const\` crée une variable que l'on ne pourra **plus** changer.

\`\`\`js
const prenom = "Alice";

prenom = "Emma";
\`\`\`

Résultat :

\`\`\`txt
TypeError: Assignment to constant variable.
\`\`\`

Le réflexe à prendre : utilise \`const\` par défaut, et \`let\` seulement quand tu sais que la valeur va changer.

---

## Les principaux types

| Type      | Description    | Exemple             |
| --------- | -------------- | ------------------- |
| \`string\`  | Texte          | \`"Bonjour"\`         |
| \`number\`  | Nombre         | \`15\`, \`4.5\`, \`-3\`  |
| \`boolean\` | Vrai ou Faux   | \`true\`, \`false\`     |

Contrairement à Python, il n'y a qu'un seul type de nombre : \`number\` sert pour les entiers comme pour les décimaux.

---

## Les calculs

\`\`\`js
const a = 10;
const b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
\`\`\`

Résultat :

\`\`\`txt
14
6
40
2.5
2
\`\`\`

\`%\` donne le reste de la division. Il est très utilisé pour savoir si un nombre est pair.

---

## Coller du texte

\`\`\`js
const prenom = "Alice";

console.log("Bonjour " + prenom);
\`\`\`

Résultat :

\`\`\`txt
Bonjour Alice
\`\`\`

L'opérateur \`+\` colle deux textes bout à bout. N'oublie pas l'espace avant le guillemet fermant, sinon tu obtiendrais \`BonjourAlice\`.
`,
  },
  {
    id: "js-condition",
    name: "Les Conditions",
    language: "js",
    description: "Fait une action dans certain cas.",
    code: `# Les conditions

Une condition permet à ton programme de prendre une décision.

Le mot-clé est \`if\`.

\`\`\`js
const age = 18;

if (age >= 18) {
  console.log("Tu es majeur.");
}
\`\`\`

Résultat :

\`\`\`txt
Tu es majeur.
\`\`\`

La condition se met entre parenthèses, et le code à exécuter entre accolades \`{}\`.

---

## Si la condition est fausse

On utilise \`else\`.

\`\`\`js
const age = 15;

if (age >= 18) {
  console.log("Tu es majeur.");
} else {
  console.log("Tu es mineur.");
}
\`\`\`

Résultat :

\`\`\`txt
Tu es mineur.
\`\`\`

---

## Plusieurs possibilités

On ajoute \`else if\`.

\`\`\`js
const note = 15;

if (note >= 16) {
  console.log("Très bien");
} else if (note >= 10) {
  console.log("Tu as réussi");
} else {
  console.log("Tu dois recommencer");
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
| \`===\`  | égal à            |
| \`!==\`  | différent de      |
| \`>\`    | supérieur à       |
| \`<\`    | inférieur à       |
| \`>=\`   | supérieur ou égal |
| \`<=\`   | inférieur ou égal |

Attention à ne pas confondre :

- \`=\` sert à **ranger** une valeur dans une variable.
- \`===\` sert à **comparer** deux valeurs.

---

## Combiner des conditions

\`\`\`js
const age = 20;
const permis = true;

if (age >= 18 && permis) {
  console.log("Tu peux conduire.");
}
\`\`\`

Résultat :

\`\`\`txt
Tu peux conduire.
\`\`\`

| Symbole | Signification | Vrai si                     |
| ------- | ------------- | --------------------------- |
| \`&&\`   | ET            | les deux conditions sont vraies |
| \`\\|\\|\`   | OU            | au moins une est vraie      |
| \`!\`     | NON           | la condition est fausse     |
`,
  },
  {
    id: "js-loop",
    name: "Les Boucles",
    language: "js",
    description: "Répète plusieurs fois une action.",
    code: `# Les boucles

Une boucle permet de répéter plusieurs fois une action.

---

## La boucle \`for\`

\`\`\`js
for (let i = 0; i < 5; i++) {
  console.log("Bonjour");
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

Les parenthèses contiennent trois parties, séparées par des points-virgules :

- \`let i = 0\` : le compteur démarre à 0.
- \`i < 5\` : on continue tant que c'est vrai.
- \`i++\` : on ajoute 1 au compteur à chaque tour.

---

## Utiliser le compteur

\`\`\`js
for (let i = 0; i < 5; i++) {
  console.log(i);
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

Le compteur commence à 0 et s'arrête **avant** 5 : la boucle tourne bien 5 fois.

---

## La boucle \`while\`

Elle continue tant qu'une condition est vraie.

\`\`\`js
let compteur = 1;

while (compteur <= 5) {
  console.log(compteur);
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

N'oublie jamais de faire avancer le compteur avec \`compteur++\` : sans cette ligne, la condition resterait vraie pour toujours et la page se bloquerait.

---

## Les tableaux

Un tableau stocke plusieurs valeurs dans une seule variable.

\`\`\`js
const fruits = ["Pomme", "Banane", "Orange"];

console.log(fruits[0]);
console.log(fruits.length);
\`\`\`

Résultat :

\`\`\`txt
Pomme
3
\`\`\`

Le premier élément porte toujours le numéro **0**, et \`length\` donne le nombre d'éléments.

---

## Parcourir un tableau

\`\`\`js
const fruits = ["Pomme", "Banane", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
\`\`\`

Résultat :

\`\`\`txt
Pomme
Banane
Orange
\`\`\`
`,
  },
  {
    id: "js-function",
    name: "Les Fonctions",
    language: "js",
    description: "Regroupe du code que l'on souhaite réutiliser.",
    code: `# Les fonctions

Une fonction permet de regrouper du code que l'on souhaite réutiliser.

On la crée avec \`function\`.

\`\`\`js
function direBonjour() {
  console.log("Bonjour !");
}

direBonjour();
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
\`\`\`

Écrire la fonction ne suffit pas : sans l'appel \`direBonjour()\`, rien ne se passe.

---

## Les paramètres

Une fonction peut recevoir des informations.

\`\`\`js
function direBonjour(prenom) {
  console.log("Bonjour " + prenom);
}

direBonjour("Alice");
direBonjour("Emma");
\`\`\`

Résultat :

\`\`\`txt
Bonjour Alice
Bonjour Emma
\`\`\`

La même fonction sert pour tous les prénoms : c'est tout l'intérêt.

---

## Retourner une valeur

Une fonction peut renvoyer un résultat grâce à \`return\`.

\`\`\`js
function addition(a, b) {
  return a + b;
}

const resultat = addition(4, 7);

console.log(resultat);
\`\`\`

Résultat :

\`\`\`txt
11
\`\`\`

Une fonction qui \`return\` n'affiche rien elle-même : elle renvoie la valeur, et c'est à toi de l'afficher.

Après un \`return\`, la fonction s'arrête : le code écrit en dessous ne sera jamais exécuté.

---

## Plusieurs paramètres

\`\`\`js
function presentation(prenom, age) {
  console.log(prenom + " a " + age + " ans.");
}

presentation("Emma", 16);
\`\`\`

Résultat :

\`\`\`txt
Emma a 16 ans.
\`\`\`

---

## Les fonctions fléchées

Tu croiseras souvent une autre écriture, plus courte.

\`\`\`js
const addition = (a, b) => {
  return a + b;
};

console.log(addition(4, 7));
\`\`\`

Résultat :

\`\`\`txt
11
\`\`\`

Les deux écritures font la même chose.
`,
  },
  {
    id: "js-dom",
    name: "Modifier la Page",
    language: "js",
    description: "Réagis aux clics et change le contenu.",
    code: `# Modifier la page

C'est le vrai travail du JavaScript : aller chercher un élément HTML, puis le modifier.

---

## Aller chercher un élément

On utilise \`document.querySelector()\`, avec le même sélecteur qu'en CSS.

\`\`\`html
<h1 id="titre">Bonjour</h1>
\`\`\`

\`\`\`js
const titre = document.querySelector("#titre");

console.log(titre);
\`\`\`

Rappel des sélecteurs : \`#titre\` pour un \`id\`, \`.carte\` pour une \`class\`, \`h1\` pour une balise.

---

## Changer le texte

\`\`\`html
<h1 id="titre">Bonjour</h1>
\`\`\`

\`\`\`js
const titre = document.querySelector("#titre");

titre.textContent = "Salut !";
\`\`\`

Le titre affiché dans la page devient :

\`\`\`txt
Salut !
\`\`\`

Le HTML n'a pas changé sur le disque : c'est la page affichée qui est modifiée.

---

## Changer le style

\`\`\`js
const titre = document.querySelector("#titre");

titre.style.color = "red";
\`\`\`

Attention, les noms changent un peu : en CSS on écrit \`background-color\`, en JavaScript on écrit \`backgroundColor\`.

\`\`\`js
titre.style.backgroundColor = "yellow";
\`\`\`

---

## Réagir à un clic

On utilise \`addEventListener\`.

\`\`\`html
<button id="bouton">Clique-moi</button>
\`\`\`

\`\`\`js
const bouton = document.querySelector("#bouton");

bouton.addEventListener("click", () => {
  console.log("Tu as cliqué !");
});
\`\`\`

Le code entre accolades ne s'exécute pas tout de suite : il attend le clic.

---

## Un exemple complet

\`\`\`html
<h1 id="titre">Bonjour</h1>
<button id="bouton">Changer</button>

<script>
  const titre = document.querySelector("#titre");
  const bouton = document.querySelector("#bouton");

  bouton.addEventListener("click", () => {
    titre.textContent = "Tu as cliqué !";
    titre.style.color = "red";
  });
</script>
\`\`\`

Au clic, le titre change de texte et devient rouge.

---

## Lire un champ

\`\`\`html
<input type="text" id="prenom" />
<button id="valider">Valider</button>

<script>
  const champ = document.querySelector("#prenom");
  const bouton = document.querySelector("#valider");

  bouton.addEventListener("click", () => {
    console.log("Bonjour " + champ.value);
  });
</script>
\`\`\`

\`value\` contient ce que l'utilisateur a écrit dans le champ.
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
