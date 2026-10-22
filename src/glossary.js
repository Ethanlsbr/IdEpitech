export const glossary = [
  {
    id: "basics-english",
    name: "Pourquoi tout est en anglais",
    language: "basics",
    description:
      "Les mots du code viennent de l'anglais, dans tous les langages.",
    code: `# Pourquoi le code est en anglais ?

> Cette page ne parle d'aucun langage en particulier : elle vaut pour tous les langages du glossaire — **Python**, **HTML**, **CSS**, **JavaScript** et **C**.

---

## Tous les langages parlent anglais

Quand on découvre la programmation, une chose surprend tout de suite : **tout est écrit en anglais**.

Ce n'est pas un caprice. Les premiers langages ont été créés aux États-Unis, et leurs auteurs ont choisi des mots anglais du quotidien.

La bonne nouvelle : ces mots sont peu nombreux, et une fois traduits, ils décrivent exactement ce qu'ils font.

---

## Un exemple par langage

| Langage    | Mot            | Vient de              | Veut dire                  |
| ---------- | -------------- | --------------------- | -------------------------- |
| Python     | \`print\`        | to print              | Imprimer, donc afficher    |
| Python     | \`if\` / \`else\`  | if / else             | Si / sinon                 |
| JavaScript | \`console.log\`  | log                   | Journal de bord            |
| JavaScript | \`let\`          | let                   | Soit une variable          |
| C          | \`printf\`       | print formatted       | Affiche avec un format     |
| C          | \`main\`         | main                  | Principal                  |
| HTML       | \`body\`         | body                  | Le corps de la page        |
| HTML       | \`href\`         | hypertext reference   | La référence du lien       |
| CSS        | \`color\`        | color                 | Couleur                    |
| CSS        | \`width\`        | width                 | Largeur                    |

En Python, par exemple, \`print\` vient de **to print**, « imprimer » : à l'époque, les ordinateurs n'avaient pas d'écran et écrivaient leurs résultats sur du papier. Le mot est resté. La carte **Print** de la catégorie Python revient sur ce cas.

Chaque catégorie du glossaire fait la même chose avec ses propres mots.

---

## Lis ton code à voix haute, en français

C'est l'astuce la plus efficace quand on débute : traduis chaque ligne, et le programme redevient une phrase normale.

\`\`\`py
age = 20

if age >= 18:
    print("Tu es majeur")
else:
    print("Tu es mineur")
\`\`\`

Se lit : « age vaut 20. **Si** age est supérieur ou égal à 18, **affiche** "Tu es majeur", **sinon** affiche "Tu es mineur". »

Résultat :

\`\`\`txt
Tu es majeur
\`\`\`

Le même programme avec une autre valeur :

\`\`\`py
age = 12

if age >= 18:
    print("Tu es majeur")
else:
    print("Tu es mineur")
\`\`\`

Résultat :

\`\`\`txt
Tu es mineur
\`\`\`

Le code n'a pas bougé d'une ligne : seule la valeur de \`age\` change. C'est exactement à ça que sert un programme.

La méthode marche dans tous les langages. La même phrase s'écrit ainsi en JavaScript :

\`\`\`js
if (age >= 18) {
  console.log("Tu es majeur");
}
\`\`\`

Les mots sont les mêmes, seule la ponctuation change.

---

## Les mots imposés et les mots que tu choisis

Dans une ligne de code, il y a toujours deux sortes de mots :

- Les **mots-clés** du langage (\`if\`, \`print\`, \`body\`, \`color\`...) : ils sont imposés, en anglais, et s'écrivent toujours de la même façon.
- Les **noms que tu inventes** (variables, fonctions, classes CSS) : tu es totalement libre.

En Python, le nom de la variable est le tien :

\`\`\`py
prenom = "Marine"

print(prenom)
\`\`\`

Résultat :

\`\`\`txt
Marine
\`\`\`

Avec une autre valeur :

\`\`\`py
prenom = "Tom"

print(prenom)
\`\`\`

Résultat :

\`\`\`txt
Tom
\`\`\`

En HTML et en CSS, c'est pareil : le nom de la balise est imposé, mais le nom de la classe est le tien.

\`\`\`html
<p class="important">Attention !</p>
\`\`\`

Ici \`p\` et \`class\` viennent du langage, \`important\` vient de toi.

Rien ne t'oblige donc à nommer les choses en anglais : \`prenom\` fonctionne aussi bien que \`firstname\`. L'important est de choisir un nom qui décrit ce qu'il contient.
`,
  },
  {
    id: "basics-punctuation",
    name: "La Ponctuation du code",
    language: "basics",
    description: "Chaque signe a un rôle précis, dans tous les langages.",
    code: `# La ponctuation du code

> Cette page ne parle d'aucun langage en particulier : elle vaut pour tous les langages du glossaire — **Python**, **HTML**, **CSS**, **JavaScript** et **C**. Les règles exactes de chacun sont détaillées dans sa propre catégorie.

---

## Un signe n'est jamais une décoration

En français, une virgule mal placée change le sens d'une phrase. En programmation c'est pareil, en plus strict : l'ordinateur ne devine jamais ce que tu voulais dire.

Chaque langage doit répondre à deux questions, et il le fait avec sa ponctuation :

- Où commence et où finit un **bloc** (un groupe de lignes qui vont ensemble) ?
- Où finit une **instruction** (un ordre) ?

---

## Comment chaque langage y répond

| Langage    | Ouvre un bloc | Ferme le bloc        | Fin d'une instruction   |
| ---------- | ------------- | -------------------- | ----------------------- |
| Python     | \`:\`           | Le retour à la marge | Rien                    |
| JavaScript | \`{\`           | \`}\`                  | \`;\`                     |
| C          | \`{\`           | \`}\`                  | \`;\`                     |
| HTML       | \`<balise>\`    | \`</balise>\`          | Rien                    |
| CSS        | \`{\`           | \`}\`                  | \`;\` après chaque ligne  |

La même idée, écrite dans trois langages :

\`\`\`py
if age >= 18:
    print("Majeur")
\`\`\`

\`\`\`js
if (age >= 18) {
  console.log("Majeur");
}
\`\`\`

\`\`\`c
if (age >= 18) {
    printf("Majeur\\n");
}
\`\`\`

En Python, par exemple, ce sont les deux-points qui annoncent le bloc, exactement comme en français dans « ma liste de courses **:** du pain, du lait ». Les autres langages préfèrent des accolades.

---

## Les parenthèses : « fais-le, maintenant »

Dans tous les langages de programmation, écrire le nom d'une fonction ne suffit pas. Ce sont les parenthèses qui la déclenchent.

\`\`\`py
print("Bonjour")
print("Bonsoir")
\`\`\`

Résultat :

\`\`\`txt
Bonjour
Bonsoir
\`\`\`

Ce que l'on écrit entre les parenthèses, ce sont les informations que l'on donne. Deux valeurs différentes donnent deux résultats différents.

Le principe est identique en JavaScript et en C, seul le nom de la fonction change.

---

## Les guillemets : du texte, rien que du texte

Les guillemets transforment ce qu'il y a à l'intérieur en **texte brut**. Sans guillemets, le mot est compris comme le **nom** de quelque chose.

\`\`\`py
age = 20

print("age")
print(age)
\`\`\`

Résultat :

\`\`\`txt
age
20
\`\`\`

Avec une autre valeur :

\`\`\`py
age = 12

print("age")
print(age)
\`\`\`

Résultat :

\`\`\`txt
age
12
\`\`\`

\`"age"\` affiche toujours les trois lettres a-g-e. \`age\` affiche le contenu de la boîte, quel qu'il soit.

En HTML et en CSS aussi, les guillemets entourent une valeur : \`class="carte"\`, \`href="index.html"\`.

---

## \`=\` et \`==\`

C'est la confusion la plus fréquente, et elle existe dans tous les langages de programmation.

| Signe  | Rôle                                | Se lit                       |
| ------ | ----------------------------------- | ---------------------------- |
| \`=\`    | Range une valeur dans une variable  | « age reçoit 20 »            |
| \`==\`   | Compare deux valeurs                | « est-ce que age vaut 20 ? » |

\`\`\`py
age = 20

if age == 20:
    print("Tu as 20 ans")
else:
    print("Tu n'as pas 20 ans")
\`\`\`

Résultat :

\`\`\`txt
Tu as 20 ans
\`\`\`

Avec une autre valeur :

\`\`\`py
age = 31

if age == 20:
    print("Tu as 20 ans")
else:
    print("Tu n'as pas 20 ans")
\`\`\`

Résultat :

\`\`\`txt
Tu n'as pas 20 ans
\`\`\`

En JavaScript, la comparaison s'écrit \`===\` avec trois signes. En C, elle s'écrit \`==\` comme en Python.

---

## Un signe oublié bloque tout

C'est vrai partout, mais les conséquences ne sont pas les mêmes :

| Langage        | Ce qui se passe si tu oublies un signe                        |
| -------------- | ------------------------------------------------------------- |
| Python         | Le programme ne démarre pas et affiche une \`SyntaxError\`      |
| JavaScript, C  | Erreur immédiate, ou comportement imprévisible                |
| HTML, CSS      | **Aucun message** : le navigateur ignore ce qu'il ne comprend pas |

Le cas HTML et CSS est le plus déroutant : ta page s'affiche quand même, simplement de travers. Il faut donc relire ton code soi-même.
`,
  },
  {
    id: "basics-indentation",
    name: "L'Indentation",
    language: "basics",
    description: "Le décalage des lignes : indispensable ou décoratif ?",
    code: `# L'indentation

> Cette page ne parle d'aucun langage en particulier : elle vaut pour tous les langages du glossaire — **Python**, **HTML**, **CSS**, **JavaScript** et **C**.

---

## Ce que c'est

L'indentation, c'est le **décalage** en début de ligne : les espaces que l'on ajoute à gauche du code.

\`\`\`py
for i in range(2):
    print("Je suis décalé")
\`\`\`

Les quatre espaces devant \`print\` ne sont pas là pour faire joli.

---

## À quoi ça sert

Le décalage indique **quelles lignes appartiennent à quoi**.

C'est le principe d'un sommaire : ce qui est décalé sous un titre fait partie de ce titre.

\`\`\`txt
Recette
    Casser les œufs
    Mélanger
Servir
\`\`\`

Les deux lignes décalées font partie de la recette. « Servir » n'en fait pas partie.

---

## Deux familles de langages

| Langage        | L'indentation est...                                        |
| -------------- | ----------------------------------------------------------- |
| Python         | **Obligatoire** : c'est elle qui définit les blocs           |
| JavaScript, C  | Facultative : ce sont les accolades qui définissent les blocs |
| HTML, CSS      | Facultative : elle montre juste ce qui est à l'intérieur de quoi |

---

## Quand elle change le résultat

En Python, par exemple, deux programmes contenant exactement les mêmes lignes ne font pas la même chose selon le décalage.

\`\`\`py
for i in range(3):
    print(i)
    print("Fini")
\`\`\`

Résultat :

\`\`\`txt
0
Fini
1
Fini
2
Fini
\`\`\`

La même chose, avec une ligne remise à la marge :

\`\`\`py
for i in range(3):
    print(i)
print("Fini")
\`\`\`

Résultat :

\`\`\`txt
0
1
2
Fini
\`\`\`

Dans le premier cas, \`print("Fini")\` appartient à la boucle. Dans le second, non.

Les erreurs d'indentation propres à Python sont détaillées dans les cartes **Conditions** et **Boucles** de sa catégorie.

---

## Quand elle ne change rien

En C et en JavaScript, ce sont les accolades qui délimitent les blocs. Le décalage n'a aucun effet sur le programme.

\`\`\`c
int main(void)
{
if (age >= 18) {
printf("Majeur\\n");
}
return 0;
}
\`\`\`

Ce code compile et fonctionne... mais il est illisible.

En HTML, c'est la même chose : le navigateur se moque des espaces.

\`\`\`html
<body>
  <h1>Mon site</h1>
  <p>Bienvenue !</p>
</body>
\`\`\`

Ici, le décalage montre d'un coup d'œil que le titre et le paragraphe sont **dans** le corps de la page.

---

## La règle commune

L'indentation reste obligatoire partout — pas pour la machine, mais pour les humains qui liront ton code, à commencer par toi dans deux semaines.

- Un cran de décalage par niveau d'imbrication.
- Deux ou quatre espaces, mais **toujours les mêmes** dans un fichier.
- La touche \`Tab\` le fait pour toi dans ton éditeur.
`,
  },
  {
    id: "basics-execution",
    name: "Comment un code s'exécute",
    language: "basics",
    description: "Ce que la machine fait vraiment avec tes lignes.",
    code: `# Comment un code s'exécute

> Cette page ne parle d'aucun langage en particulier : elle vaut pour tous les langages du glossaire — **Python**, **HTML**, **CSS**, **JavaScript** et **C**.

---

## Trois familles de langages

Tous les langages du glossaire ne « s'exécutent » pas de la même façon.

| Langage            | Ce que la machine en fait                                       |
| ------------------ | --------------------------------------------------------------- |
| HTML, CSS          | **Décrits** : le navigateur les lit et dessine la page. Aucun calcul, aucune décision. |
| Python, JavaScript | **Interprétés** : les lignes sont lues et exécutées les unes après les autres. |
| C                  | **Compilé** : tout le fichier est d'abord traduit en langage machine, puis lancé. |

La conséquence pratique se voit sur les erreurs : en C, une seule faute empêche le programme de démarrer, même les lignes correctes. En Python, les lignes valides s'exécutent jusqu'à la faute.

---

## De haut en bas

Un ordinateur ne comprend pas ton intention. Il lit tes lignes **une par une, de haut en bas**, et fait exactement ce qui est écrit.

\`\`\`py
print("Premier")
print("Deuxième")
print("Troisième")
\`\`\`

Résultat :

\`\`\`txt
Premier
Deuxième
Troisième
\`\`\`

Change l'ordre des lignes, et le résultat change avec :

\`\`\`py
print("Troisième")
print("Premier")
print("Deuxième")
\`\`\`

Résultat :

\`\`\`txt
Troisième
Premier
Deuxième
\`\`\`

L'ordre compte aussi en HTML : la balise écrite en premier s'affiche en premier sur la page.

---

## Une chose doit exister avant d'être utilisée

C'est une règle générale, avec un visage différent dans chaque langage.

- En Python et en JavaScript, une variable doit être créée **avant** la ligne qui l'utilise.
- En C, une fonction doit être écrite **avant** l'endroit où on l'appelle.
- En HTML, on place le \`<script>\` à la fin du \`<body>\`, pour que les balises existent déjà quand le JavaScript les cherche.

\`\`\`py
prenom = "Marine"

print(prenom)
\`\`\`

Résultat :

\`\`\`txt
Marine
\`\`\`

Les mêmes lignes, dans l'autre sens :

\`\`\`py
print(prenom)

prenom = "Marine"
\`\`\`

Résultat :

\`\`\`txt
NameError: name 'prenom' is not defined
\`\`\`

Au moment où la première ligne est lue, la variable n'existe pas encore. La machine ne va pas « regarder plus bas ».

---

## Calculer et afficher sont deux choses différentes

C'est vrai dans tous les langages de programmation.

\`\`\`py
a = 7
b = 3

a + b
\`\`\`

Résultat :

\`\`\`txt

\`\`\`

Rien ne s'affiche. Le calcul a bien été fait, mais personne n'a demandé de montrer le résultat : il est aussitôt jeté.

Il faut le dire explicitement :

\`\`\`py
a = 7
b = 3

print(a + b)
\`\`\`

Résultat :

\`\`\`txt
10
\`\`\`

Avec deux autres valeurs :

\`\`\`py
a = 12
b = 5

print(a + b)
\`\`\`

Résultat :

\`\`\`txt
17
\`\`\`

L'ordre est le même partout : \`print\` en Python, \`console.log\` en JavaScript, \`printf\` en C.

---

## Où regarder le résultat

| Ce que tu écris        | Où ça apparaît                          |
| ---------------------- | --------------------------------------- |
| \`print\`, \`printf\`      | Dans la console, sous ton code          |
| \`console.log\`          | Dans la console du navigateur (\`F12\`)   |
| Du HTML et du CSS      | Directement sur la page                 |

La console est un simple journal, réservé au développeur. Le visiteur d'un site ne la voit jamais.
`,
  },
  {
    id: "basics-vocabulary",
    name: "Le Vocabulaire du code",
    language: "basics",
    description: "Variable, fonction, paramètre, appeler... qui fait quoi.",
    code: `# Le vocabulaire du code

> Cette page ne parle d'aucun langage en particulier : elle vaut pour tous les langages du glossaire — **Python**, **HTML**, **CSS**, **JavaScript** et **C**.

Attention toutefois : HTML et CSS ne sont pas des langages de programmation. Ils décrivent une page, mais n'ont ni variable, ni boucle, ni condition. Les mots ci-dessous concernent donc surtout Python, JavaScript et C.

---

## Le tableau à retenir

| Mot            | Ce que ça désigne                                        |
| -------------- | -------------------------------------------------------- |
| Instruction    | Une ligne qui donne un ordre                             |
| Variable       | Une boîte qui retient une valeur                         |
| Valeur         | Ce qu'il y a dans la boîte                               |
| Type           | La nature de la valeur : texte, nombre entier, décimal   |
| Bloc           | Un groupe de lignes qui vont ensemble                    |
| Condition      | Un test qui est soit vrai, soit faux                     |
| Boucle         | Des lignes que l'on répète                               |
| Fonction       | Un morceau de code rangé sous un nom, réutilisable       |
| Appeler        | Déclencher une fonction                                  |
| Paramètre      | Le nom de l'information que la fonction attend           |
| Argument       | La valeur réellement donnée lors de l'appel              |
| Retourner      | Renvoyer un résultat à celui qui a appelé                |
| Exécuter       | Lancer le programme                                      |
| Compiler       | Traduire le code en langage machine (C uniquement)       |
| Bug            | Un comportement qui n'est pas celui voulu                |
| Déboguer       | Chercher et corriger un bug                              |
| Bibliothèque   | Une boîte à outils déjà écrite par quelqu'un d'autre     |

---

## Tout ça sur un seul exemple

\`\`\`py
def double(nombre):
    return nombre * 2

print(double(4))
print(double(9))
\`\`\`

Résultat :

\`\`\`txt
8
18
\`\`\`

Décortiquons :

- \`double\` est une **fonction** : du code rangé sous un nom.
- \`nombre\` est le **paramètre** : le nom de l'information attendue.
- \`return\` **retourne** le résultat, sans rien afficher.
- \`double(4)\` est un **appel**, et \`4\` est l'**argument**.
- \`double(9)\` est un deuxième appel, avec un autre argument.

La fonction n'a été écrite qu'une fois, mais elle sert autant de fois que tu veux. C'est toute la raison d'être d'une fonction.

Le vocabulaire est identique dans les autres langages, seule l'écriture change :

\`\`\`js
function double(nombre) {
  return nombre * 2;
}

console.log(double(4));
console.log(double(9));
\`\`\`

Résultat :

\`\`\`txt
8
18
\`\`\`

---

## Paramètre ou argument ?

C'est la nuance qui revient le plus souvent.

- Le **paramètre** est le nom écrit dans la définition : il est fixe.
- L'**argument** est la valeur donnée au moment de l'appel : il change à chaque fois.

Dans l'exemple ci-dessus, \`nombre\` est le paramètre. \`4\` et \`9\` sont deux arguments différents.

---

## Retourner n'est pas afficher

C'est le contresens le plus classique, et il existe dans les tous langages de programmation du glossaire.

\`\`\`py
def double(nombre):
    return nombre * 2

double(4)
double(9)
\`\`\`

Résultat :

\`\`\`txt

\`\`\`

La fonction a bien travaillé deux fois, mais son résultat n'a été ni affiché ni rangé nulle part.

\`\`\`py
def double(nombre):
    return nombre * 2

resultat = double(4)

print(resultat)
print(double(9))
\`\`\`

Résultat :

\`\`\`txt
8
18
\`\`\`

Retiens : **retourner** rend la valeur, **afficher** la montre.
`,
  },
  {
    id: "basics-errors",
    name: "Lire un message d'erreur",
    language: "basics",
    description: "Une erreur n'est pas une punition, c'est une indication.",
    code: `# Lire un message d'erreur

> Cette page ne parle d'aucun langage en particulier : elle vaut pour tous les langages du glossaire — **Python**, **HTML**, **CSS**, **JavaScript** et **C**.

Un message d'erreur n'est pas une punition. C'est la machine qui t'explique où elle s'est arrêtée, et pourquoi.

---

## Trois sortes de problèmes

| Sorte                   | Quand ça arrive                     | Ce que tu vois                    |
| ----------------------- | ----------------------------------- | --------------------------------- |
| Erreur de **syntaxe**   | Le code est mal écrit               | Le programme ne démarre pas       |
| Erreur à l'**exécution** | Le code est bien écrit, mais impossible à faire | Il s'arrête en cours de route |
| **Bug**                 | Le code fonctionne                  | Aucun message, mais le résultat est faux |

---

## L'anatomie d'un message

\`\`\`txt
  File "main.py", line 3
    if note >= 10
                 ^
SyntaxError: expected ':'
\`\`\`

Trois informations utiles, et on les retrouve dans tous les langages :

- **où** : le fichier et le numéro de ligne.
- **quoi** : le type d'erreur, ici \`SyntaxError\`.
- **pourquoi** : le détail, ici « il manquait un \`:\` ».

Le réflexe à prendre : **lire la dernière ligne en premier**, puis aller voir la ligne indiquée.

---

## Où chercher le message, selon le langage

| Langage    | Où le message apparaît                                          |
| ---------- | --------------------------------------------------------------- |
| Python     | Dans la console, à l'endroit où le programme s'est arrêté        |
| JavaScript | Dans la console du navigateur, en rouge (touche \`F12\`)           |
| C          | Au moment de la compilation : le programme ne se lance même pas  |
| HTML, CSS  | **Nulle part** : le navigateur ignore silencieusement ce qu'il ne comprend pas |

Le cas HTML et CSS est le plus piégeux. Une accolade oubliée en CSS ne provoque aucun message : simplement, toute la suite du fichier est ignorée. Si une règle « ne marche pas », vérifie d'abord celle du dessus.

---

## Les grandes familles d'erreurs

Les noms changent d'un langage à l'autre, mais les causes sont toujours les mêmes.

| Cause                          | En Python           | En JavaScript      |
| ------------------------------ | ------------------- | ------------------ |
| Ponctuation manquante          | \`SyntaxError\`       | \`SyntaxError\`      |
| Décalage incorrect             | \`IndentationError\`  | (n'existe pas)     |
| Nom mal écrit ou inexistant    | \`NameError\`         | \`ReferenceError\`   |
| Types incompatibles            | \`TypeError\`         | \`TypeError\`        |
| Numéro en dehors d'une liste   | \`IndexError\`        | \`undefined\`        |
| Division par zéro              | \`ZeroDivisionError\` | \`Infinity\`         |

Chaque catégorie du glossaire montre les erreurs typiques de son langage au moment où le sujet apparaît.

---

## Le cas du bug silencieux

Là, aucun message ne s'affiche : le programme tourne, mais il ne fait pas ce que tu voulais.

\`\`\`py
a = 7
b = 3

print(a - b)
\`\`\`

Résultat :

\`\`\`txt
4
\`\`\`

Si tu attendais \`10\`, le problème n'est pas la machine : tu as écrit \`-\` au lieu de \`+\`.

\`\`\`py
a = 7
b = 3

print(a + b)
\`\`\`

Résultat :

\`\`\`txt
10
\`\`\`

---

## Les réflexes qui marchent partout

- Lire la **dernière ligne** du message, c'est elle qui dit quoi.
- Aller voir le **numéro de ligne** indiqué, et aussi celle juste au-dessus.
- Afficher les valeurs intermédiaires pour voir où le programme dévie de ce que tu imaginais.
- Ne changer **qu'une seule chose** à la fois, puis relancer.
`,
  },
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

---

## Pourquoi « print » ?

En anglais, **to print** veut dire **imprimer**. À l'époque où le mot a été choisi, les ordinateurs n'avaient pas d'écran : ils écrivaient leurs résultats sur du papier.

Le papier a disparu, le mot est resté. Traduis donc \`print\` par **« affiche »**, jamais par « imprime ».

Les parenthèses, elles, veulent dire « fais-le maintenant », et ce qu'on met à l'intérieur est ce que l'on veut afficher.

---

## Afficher n'importe quel texte

Tu peux afficher le texte que tu veux, entre guillemets.

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

Tu peux afficher plusieurs valeurs en même temps, en les séparant par des virgules.

\`\`\`py
print("J'ai", 18, "ans")
print("J'ai", 42, "ans")
\`\`\`

Résultat :

\`\`\`txt
J'ai 18 ans
J'ai 42 ans
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
prenom = "Marine"
\`\`\`

Ici :

- \`prenom\` est le nom de la variable.
- \`=\` ne veut pas dire « est égal à », mais **« reçoit »**. On range toujours ce qui est à droite dans ce qui est à gauche.
- \`"Marine"\` est la valeur stockée.

Pour afficher cette variable :

\`\`\`py
prenom = "Marine"
print(prenom)

prenom = "Tom"
print(prenom)
\`\`\`

Résultat :

\`\`\`txt
Marine
Tom
\`\`\`

Attention à ne pas confondre le **nom** et la **valeur** :

\`\`\`py
prenom = "Marine"

print("prenom")
print(prenom)
\`\`\`

Résultat :

\`\`\`txt
prenom
Marine
\`\`\`

Avec des guillemets, Python affiche le texte tel quel. Sans guillemets, il affiche le contenu de la boîte.

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
prenom: str = "Marine"
age: int = 18
taille: float = 1.72
majeur: bool = True
\`\`\`

Tout fonctionne exactement comme avant.

---

## Modifier une variable

On peut changer sa valeur.

\`\`\`py
score = 10

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
prenom = "Emma"
age = 16

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

Un calcul n'est jamais affiché tout seul : il faut le mettre dans un \`print()\`, sinon le résultat est calculé puis aussitôt oublié.

---

## Addition (\`+\`)

\`\`\`py
a = 10
b = 5

print(a + b)
print(7 + 3)
\`\`\`

Résultat :

\`\`\`txt
15
10
\`\`\`

---

## Soustraction (\`-\`)

\`\`\`py
a = 10
b = 5

print(a - b)
print(7 - 3)
\`\`\`

Résultat :

\`\`\`txt
5
4
\`\`\`

---

## Multiplication (\`\*\`)

\`\`\`py
a = 10
b = 5

print(a \* b)
print(7 \* 3)
\`\`\`

Résultat :

\`\`\`txt
50
21
\`\`\`

---

## Division (\`/\`)

La division classique renvoie un nombre décimal.

\`\`\`py
a = 10
b = 4

print(a / b)
print(9 / 2)
\`\`\`

Résultat :

\`\`\`txt
2.5
4.5
\`\`\`

Même quand le résultat tombe juste, Python écrit un \`.0\` à la fin : \`8 / 2\` donne \`4.0\`, et non \`4\`.

---

## Division entière (\`//\`)

La division entière garde uniquement la partie entière.

\`\`\`py
a = 10
b = 4

print(a // b)
print(9 // 2)
\`\`\`

Résultat :

\`\`\`txt
2
4
\`\`\`

---

## Reste d'une division (\`%\`)

L'opérateur \`%\` renvoie le reste d'une division.

\`\`\`py
a = 10
b = 4

print(a % b)
print(9 % 2)
\`\`\`

Résultat :

\`\`\`txt
2
1
\`\`\`

Cet opérateur est très utilisé pour savoir si un nombre est pair.

\`\`\`py
nombre = 8

print(nombre % 2)
\`\`\`

Résultat :

\`\`\`txt
0
\`\`\`

Comme le reste vaut \`0\`, le nombre est pair.

\`\`\`py
nombre = 7

print(nombre % 2)
\`\`\`

Résultat :

\`\`\`txt
1
\`\`\`

Le reste vaut \`1\` : le nombre est impair.

---

## Puissance (\`\*\*\`)

L'opérateur \`\*\*\` permet de calculer une puissance.

\`\`\`py
print(2 \*\* 3)
print(5 \*\* 2)
\`\`\`

Résultat :

\`\`\`txt
8
25
\`\`\`

Cela se lit « 2 multiplié par lui-même 3 fois », donc \`2 \* 2 \* 2\`.

---

## Calculer avec des variables

Le résultat d'un calcul peut être rangé dans une variable, exactement comme une valeur.

\`\`\`py
prix = 12.5
quantite = 4

total = prix \* quantite

print(total)
\`\`\`

Résultat :

\`\`\`txt
50.0
\`\`\`
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

Le mot-clé est \`if\`, qui veut dire **« si »** en anglais.

\`\`\`py
age = 18

if age >= 18:
    print("Tu es majeur.")
\`\`\`

Résultat :

\`\`\`txt
Tu es majeur.
\`\`\`

Cette ligne se lit en français : « **si** age est supérieur ou égal à 18, **alors** affiche "Tu es majeur." ».

Deux détails sont obligatoires :

- Le \`:\` à la fin de la ligne \`if\`. Il annonce ce qu'il faut faire dans ce cas. Sans lui, le programme ne démarre pas.
- Le **décalage** de quatre espaces devant \`print\`. C'est lui qui dit que cette ligne appartient au \`if\`.

Avec une autre valeur, rien ne s'affiche :

\`\`\`py
age = 15

if age >= 18:
    print("Tu es majeur.")
\`\`\`

Résultat :

\`\`\`txt

\`\`\`

La condition est fausse, donc Python saute le bloc décalé et passe à la suite.

---

## Si la condition est fausse

On utilise \`else\`, qui veut dire **« sinon »**.

\`\`\`py
age = 15

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

On peut ajouter \`elif\`, contraction de **else if** : « sinon, si... ».

\`\`\`py
note = 15

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

Le même code avec une autre note :

\`\`\`py
note = 18

if note >= 16:
    print("Très bien")
elif note >= 10:
    print("Tu as réussi")
else:
    print("Tu dois recommencer")
\`\`\`

Résultat :

\`\`\`txt
Très bien
\`\`\`

Python teste les conditions **dans l'ordre** et s'arrête à la première qui est vraie. Une seule ligne s'affiche, jamais deux.

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

Attention à ne pas confondre :

- \`=\` **range** une valeur dans une variable.
- \`==\` **compare** deux valeurs.

Exemple :

\`\`\`py
nombre = 8

if nombre == 8:
    print("Le nombre vaut 8")
else:
    print("Le nombre ne vaut pas 8")
\`\`\`

Résultat :

\`\`\`txt
Le nombre vaut 8
\`\`\`

Avec une autre valeur :

\`\`\`py
nombre = 3

if nombre == 8:
    print("Le nombre vaut 8")
else:
    print("Le nombre ne vaut pas 8")
\`\`\`

Résultat :

\`\`\`txt
Le nombre ne vaut pas 8
\`\`\`
`,
  },
  {
    id: "loop",
    name: "Les Boucles",
    language: "python",
    description: "Répète plusieurs fois une action.",
    code: `# Les boucles

Une boucle permet de répéter plusieurs fois une action, sans réécrire la même ligne dix fois.

---

## La boucle \`for\`

La boucle \`for\` est très utilisée lorsque l'on connaît le nombre de répétitions.

En anglais, \`for\` veut dire **« pour »**, et \`range\` veut dire **« intervalle »**. La ligne se lit donc : « pour chaque nombre de 0 à 4, fais ceci ».

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

Avec une autre valeur :

\`\`\`py
for i in range(2):
    print("Bonjour")
\`\`\`

Résultat :

\`\`\`txt
Bonjour
Bonjour
\`\`\`

Comme pour le \`if\`, le \`:\` est obligatoire, et c'est le décalage qui indique quelles lignes sont répétées.

---

## Utiliser le compteur

\`i\` est une variable créée par la boucle : elle contient le numéro du tour en cours.

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

Avec une autre valeur :

\`\`\`py
for i in range(3):
    print(i)
\`\`\`

Résultat :

\`\`\`txt
0
1
2
\`\`\`

Le compteur démarre à \`0\` et s'arrête **avant** le nombre donné. \`range(3)\` fait bien trois tours : 0, 1 et 2.

---

## Choisir le début

Avec deux nombres, on choisit le départ et l'arrivée.

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

Avec d'autres valeurs :

\`\`\`py
for i in range(10, 13):
    print(i)
\`\`\`

Résultat :

\`\`\`txt
10
11
12
\`\`\`

Le premier nombre est inclus, le second ne l'est jamais.

---

## Ce qui est décalé, et ce qui ne l'est pas

\`\`\`py
for i in range(3):
    print(i)
print("Fini")
\`\`\`

Résultat :

\`\`\`txt
0
1
2
Fini
\`\`\`

La ligne \`print("Fini")\` n'est pas décalée : elle ne fait pas partie de la boucle et ne s'exécute qu'une seule fois, à la fin.

\`\`\`py
for i in range(3):
    print(i)
    print("Fini")
\`\`\`

Résultat :

\`\`\`txt
0
Fini
1
Fini
2
Fini
\`\`\`

Cette fois elle est décalée : elle appartient à la boucle et s'affiche à chaque tour.

---

## La boucle \`while\`

La boucle \`while\` (« tant que ») continue tant qu'une condition est vraie.

\`\`\`py
compteur = 1

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

Avec une autre valeur :

\`\`\`py
compteur = 1

while compteur <= 3:
    print(compteur)
    compteur += 1
\`\`\`

Résultat :

\`\`\`txt
1
2
3
\`\`\`

N'oublie jamais la ligne \`compteur += 1\` : sans elle, la condition reste vraie pour toujours et le programme ne s'arrête plus.
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
fruits = ["Pomme", "Banane", "Orange"]
\`\`\`

---

## Afficher une liste

\`\`\`py
fruits = ["Pomme", "Banane", "Orange"]

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
fruits = ["Pomme", "Banane", "Orange"]

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

On utilise \`append()\`, qui veut dire **« ajouter à la fin »** en anglais.

\`\`\`py
fruits = ["Pomme", "Banane"]

fruits.append("Orange")

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Banane', 'Orange']
\`\`\`

Avec une autre valeur :

\`\`\`py
fruits = ["Pomme", "Banane"]

fruits.append("Kiwi")

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Banane', 'Kiwi']
\`\`\`

Le nouvel élément se place toujours à la fin.

---

## Supprimer un élément

La fonction \`pop()\` permet de supprimer un élément d'une liste.

Si on ne donne pas de numéro, elle supprime le dernier élément.

\`\`\`py
fruits = ["Pomme", "Banane", "Orange"]

fruits.pop()

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Banane']
\`\`\`

On peut aussi supprimer un élément précis grâce à son indice.

\`\`\`py
fruits = ["Pomme", "Banane", "Orange"]

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
fruits = ["Pomme", "Banane", "Orange"]

fruits[1] = "Kiwi"

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Pomme', 'Kiwi', 'Orange']
\`\`\`

En changeant l'indice et la valeur :

\`\`\`py
fruits = ["Pomme", "Banane", "Orange"]

fruits[0] = "Fraise"

print(fruits)
\`\`\`

Résultat :

\`\`\`txt
['Fraise', 'Banane', 'Orange']
\`\`\`

---

## Parcourir une liste

On peut utiliser une boucle \`for\`.

\`\`\`py
fruits = ["Pomme", "Banane", "Orange"]

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

La fonction \`len()\` permet de connaître le nombre d'éléments. Son nom vient de **length**, « longueur ».

\`\`\`py
fruits = ["Pomme", "Banane", "Orange"]

print(len(fruits))
\`\`\`

Résultat :

\`\`\`txt
3
\`\`\`

Avec une autre liste :

\`\`\`py
fruits = ["Pomme", "Banane", "Orange", "Kiwi", "Fraise"]

print(len(fruits))
\`\`\`

Résultat :

\`\`\`txt
5
\`\`\`

Attention : \`len()\` compte les éléments en partant de 1, alors que les indices partent de 0. Le dernier élément d'une liste porte donc le numéro \`len(fruits) - 1\`.

---

## Les listes de listes

Une liste peut contenir d'autres listes.

On appelle cela une **liste de listes**.

\`\`\`py
grille = [
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
grille = [
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

Avec d'autres indices :

\`\`\`py
grille = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grille[0][1])
\`\`\`

Résultat :

\`\`\`txt
2
\`\`\`

Première ligne, deuxième colonne. On lit toujours dans cet ordre : la ligne, puis la colonne.
`,
  },
  {
    id: "function",
    name: "Les Fonctions",
    language: "python",
    description: "Regroupe du code que l'on souhaite réutiliser.",
    code: `# Les fonctions

Une fonction permet de regrouper du code que l'on souhaite réutiliser.

On la crée avec \`def\`, abréviation de **define** : « je définis ».

\`\`\`py
def dire_bonjour():
    print("Bonjour !")
\`\`\`

Écrire une fonction ne suffit pas : à ce stade, rien ne s'affiche. On a seulement rangé du code sous un nom.

Pour l'utiliser, il faut l'**appeler**, c'est-à-dire écrire son nom suivi de parenthèses.

\`\`\`py
def dire_bonjour():
    print("Bonjour !")

dire_bonjour()
dire_bonjour()
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
Bonjour !
\`\`\`

Deux appels, deux affichages : le code n'a été écrit qu'une fois, mais il a servi deux fois.

Ici, par exemple, la fonction se nomme "dire_bonjour".

---

## Les paramètres

Une fonction devient vraiment utile quand elle reçoit une information différente à chaque appel.

\`\`\`py
def dire_bonjour(prenom):
    print("Bonjour", prenom)

dire_bonjour("Marine")
dire_bonjour("Tom")
\`\`\`

Résultat :

\`\`\`txt
Bonjour Marine
Bonjour Tom
\`\`\`

Ici, par exemple, la fonction se nomme "dire_bonjour", prend une chaîne de caractères en paramètre et ne retourne rien.

Deux mots à ne pas confondre :

- \`prenom\` est le **paramètre** : le nom écrit dans la définition, il ne change jamais.
- \`"Marine"\` et \`"Tom"\` sont les **arguments** : les valeurs données au moment de l'appel.

---

## Retourner une valeur

Une fonction peut renvoyer un résultat grâce à \`return\` (« renvoie »).

\`\`\`py
def addition(a, b):
    return a + b

resultat = addition(4, 7)

print(resultat)

print(addition(10, 3))
\`\`\`

Résultat :

\`\`\`txt
11
13
\`\`\`

Ici, par exemple, la fonction se nomme "addition", prend deux entiers en paramètre et retourne un entier.

Attention : \`return\` **rend** la valeur, il ne l'affiche pas.

\`\`\`py
def addition(a, b):
    return a + b

addition(4, 7)
addition(10, 3)
\`\`\`

Résultat :

\`\`\`txt

\`\`\`

Les deux additions ont bien été faites, mais leurs résultats n'ont été ni affichés ni rangés : ils sont perdus. C'est à toi d'écrire le \`print\`.

---

## Une fonction avec plusieurs paramètres

Les arguments sont donnés **dans le même ordre** que les paramètres.

\`\`\`py
def presentation(prenom, age):
    print(prenom, "a", age, "ans.")

presentation("Emma", 16)
presentation("Lucas", 20)
\`\`\`

Résultat :

\`\`\`txt
Emma a 16 ans.
Lucas a 20 ans.
\`\`\`

Enfin, cette fonction se nomme "presentation", prend une chaîne de caractères et un entier en paramètre et ne retourne rien.
`,
  },
  {
    id: "html-structure",
    name: "La Structure d'une page",
    language: "html",
    description: "Le squelette de toute page web.",
    code: `# La structure d'une page HTML

HTML est le langage qui décrit le **contenu** d'une page web.

Son nom vient de **HyperText Markup Language** : « langage de balisage hypertexte ». Balisage, parce qu'on entoure chaque morceau de contenu d'une étiquette qui dit ce qu'il est.

Une page est donc faite de **balises** (**tag** en anglais). Une balise s'ouvre, puis se ferme.

\`\`\`html
<p>Bonjour !</p>
\`\`\`

Ici :

- \`<p>\` est la balise ouvrante. Son nom vient de **paragraph**, « paragraphe ».
- \`</p>\` est la balise fermante : c'est la barre oblique \`/\` qui indique la fermeture.
- \`Bonjour !\` est le contenu affiché.

Les noms de balises sont presque toujours des mots anglais abrégés. Les traduire suffit à retenir leur rôle.

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

Chaque partie a un rôle précis, et son nom anglais le décrit :

| Balise            | Vient de       | Rôle                                       |
| ----------------- | -------------- | ------------------------------------------ |
| \`<!DOCTYPE html>\` | document type  | Prévient le navigateur que c'est du HTML   |
| \`<html>\`          | html           | Contient toute la page                     |
| \`<head>\`          | head, la tête  | Les informations invisibles                |
| \`<title>\`         | title, le titre | Le nom affiché dans l'onglet du navigateur |
| \`<body>\`          | body, le corps | Tout ce qui est visible à l'écran          |
| \`<h1>\`            | heading 1      | Le titre principal du contenu              |

L'image à retenir : une page a une **tête** (invisible, elle contient les informations techniques) et un **corps** (visible).

Seul ce qui est dans \`<body>\` s'affiche dans la page.

L'attribut \`lang="fr"\` vient de **language** : il annonce que la page est en français.

---

## Les balises qui ne se ferment pas

Certaines balises n'ont aucun contenu. On les ferme directement.

\`\`\`html
<br />
<img src="chat.png" alt="Un chat" />
\`\`\`

\`br\` vient de **break**, « rupture » : c'est un retour à la ligne. \`img\` vient de **image**. Comme elles n'entourent rien, elles n'ont pas de balise fermante.

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

Il existe six niveaux de titres, de \`<h1>\` à \`<h6>\`. Le \`h\` vient de **heading**, « en-tête, titre », et le chiffre donne le niveau.

\`\`\`html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Encore plus petit</h3>
\`\`\`

\`<h1>\` est le plus gros, \`<h6>\` le plus petit.

Une page ne doit contenir qu'un seul \`<h1>\` : c'est le titre principal.

---

## Les paragraphes

La balise \`<p>\` sert à écrire un paragraphe de texte. Son nom vient de **paragraph**.

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

Pour forcer un retour à la ligne, il faut utiliser \`<br />\`, contraction de **break**, « rupture ».

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

- \`<strong>\` veut dire « fort » : le texte s'affiche en **gras**.
- \`<em>\` vient de **emphasis**, « mise en relief » : le texte s'affiche en _italique_.
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

La balise \`<a>\` crée un lien cliquable. Le \`a\` vient de **anchor**, « ancre » : le lien est le point d'accroche entre deux pages.

\`\`\`html
<a href="https://www.epitech.eu">Visiter Epitech</a>
\`\`\`

Ici :

- \`href\` indique la destination du lien. C'est la contraction de **hypertext reference**, « référence hypertexte ».
- \`Visiter Epitech\` est le texte sur lequel on clique.

---

## Ouvrir dans un nouvel onglet

\`\`\`html
<a href="https://www.epitech.eu" target="_blank">Visiter Epitech</a>
\`\`\`

\`target\` veut dire « cible » : où le lien doit s'ouvrir. \`_blank\` veut dire « vierge », donc un onglet vide, tout neuf.

---

## Les images

La balise \`<img>\` affiche une image. Elle n'a pas de balise fermante.

\`\`\`html
<img src="chat.png" alt="Un chat qui dort" />
\`\`\`

Ici :

- \`src\` vient de **source** : il indique où se trouve l'image.
- \`alt\` vient de **alternative text**, « texte de remplacement ». Il décrit l'image, s'affiche si elle ne charge pas, et il est lu par les logiciels pour les personnes aveugles.

\`alt\` n'est pas optionnel : mets-le toujours.

---

## Choisir la taille d'une image

\`\`\`html
<img src="chat.png" alt="Un chat qui dort" width="300" />
\`\`\`

L'image fera 300 pixels de large, et sa hauteur s'adaptera toute seule.

Avec une autre valeur :

\`\`\`html
<img src="chat.png" alt="Un chat qui dort" width="100" />
\`\`\`

La même image s'affichera trois fois plus petite. Seule la valeur a changé.

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

| Balise | Vient de        | Signification       | Affichage   |
| ------ | --------------- | ------------------- | ----------- |
| \`<ul>\` | unordered list  | Liste non ordonnée  | Des puces   |
| \`<ol>\` | ordered list    | Liste ordonnée      | Des numéros |
| \`<li>\` | list item       | Un élément de liste | Une ligne   |

Le moyen de ne plus se tromper : \`o\` comme **ordered**, donc numéroté ; \`u\` comme **unordered**, donc à puces.

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

\`class\` veut dire « catégorie ». L'attribut sert à donner un nom à une balise, pour pouvoir la décorer en CSS plus tard.

\`\`\`html
<p class="important">Attention !</p>
\`\`\`

Plusieurs balises peuvent partager la même \`class\`.

---

## L'attribut \`id\`

\`id\` est l'abréviation de **identifier**, « identifiant ». Il sert aussi à nommer une balise, mais il doit être **unique** dans toute la page — comme un numéro de carte d'identité.

\`\`\`html
<p id="message">Bonjour</p>
\`\`\`

| Attribut | Combien de balises peuvent le porter ? |
| -------- | -------------------------------------- |
| \`class\` | Autant que tu veux |
| \`id\`    | Une seule dans la page |

---

## La balise \`div\`

\`<div>\` vient de **division**. C'est une boîte qui ne fait rien toute seule : elle sert à **regrouper** du contenu.

\`\`\`html
<div class="carte">
  <h2>Chat</h2>
  <p>Un animal qui dort beaucoup.</p>
</div>
\`\`\`

Un \`<div>\` prend toute la largeur disponible et se place sous le contenu précédent.

---

## La balise \`span\`

\`<span>\` veut dire « portion ». Elle fait la même chose qu'un \`<div>\`, mais pour un morceau de texte **à l'intérieur** d'une ligne.

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

\`input\` veut dire **« entrée »** : c'est par là que l'information entre dans ta page.

Ici :

- \`type\` indique le genre de champ.
- \`placeholder\` veut dire « qui tient la place » : c'est le texte grisé affiché tant que le champ est vide.

\`<input>\` n'a pas de balise fermante.

---

## Les types de champs

\`\`\`html
<input type="text" placeholder="Ton prénom" />
<input type="number" placeholder="Ton âge" />
<input type="password" placeholder="Mot de passe" />
<input type="checkbox" />
\`\`\`

| Type       | Vient de       | Utilisation                    |
| ---------- | -------------- | ------------------------------ |
| \`text\`     | text           | Du texte libre                 |
| \`number\`   | number         | Un nombre uniquement           |
| \`password\` | mot de passe   | Du texte masqué par des points |
| \`checkbox\` | case à cocher  | Une case à cocher              |

---

## Nommer un champ

Comme pour les autres balises, on utilise un \`id\` pour pouvoir retrouver le champ plus tard.

\`\`\`html
<input type="text" id="prenom" placeholder="Ton prénom" />
<button id="valider">Valider</button>
\`\`\`

---

## Une étiquette

\`<label>\` veut dire « étiquette ». Elle affiche un texte devant le champ.

\`\`\`html
<label for="prenom">Prénom :</label>
<input type="text" id="prenom" />
\`\`\`

L'attribut \`for\` veut dire « pour » : il doit contenir l'\`id\` du champ concerné. Cliquer sur l'étiquette place alors le curseur dans le champ.
`,
  },
  {
    id: "css-intro",
    name: "Écrire du CSS",
    language: "css",
    description: "Décore ta page web.",
    code: `# Écrire du CSS

Si le HTML est le contenu de la page, le CSS est sa **décoration** : les couleurs, les tailles, les espaces.

Son nom vient de **Cascading Style Sheets** : « feuilles de style en cascade ». En cascade, parce que les règles coulent du haut vers le bas : si deux règles se contredisent, c'est la dernière écrite qui l'emporte.

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
- \`color\` est la **propriété** : ce que l'on veut changer. \`color\` veut simplement dire « couleur ».
- \`red\` est la **valeur** : le résultat voulu. \`red\` veut dire « rouge ».

Les noms de propriétés sont tous des mots anglais du quotidien. Les traduire suffit presque toujours à deviner ce qu'ils font.

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

La méthode la plus courante est la balise \`<style>\` (« style »), placée dans le \`<head>\`.

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

\`link\` veut dire « lien », \`rel\` vient de **relation** et \`stylesheet\` de « feuille de style ». La ligne se lit donc : « voici un lien vers un fichier, et sa relation avec ma page est d'être sa feuille de style ».

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

\`hover\` veut dire « survoler » : le bouton devient rouge uniquement quand la souris passe dessus.
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

\`background\` veut dire « arrière-plan ». \`background-color\` est donc « la couleur de l'arrière-plan ».

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

\`font\` veut dire « police de caractères » et \`size\` « taille ».

\`\`\`css
h1 {
  font-size: 40px;
}
\`\`\`

Avec une autre valeur, le même titre s'affiche beaucoup plus petit :

\`\`\`css
h1 {
  font-size: 16px;
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

\`family\` veut dire « famille ». On donne plusieurs polices : si la première n'existe pas sur l'ordinateur, le navigateur essaie la suivante.

---

## Le gras et l'italique

\`\`\`css
p {
  font-weight: bold;
  font-style: italic;
}
\`\`\`

\`weight\` veut dire « poids » : c'est l'épaisseur du trait, et \`bold\` veut dire « gras ». \`style\` avec \`italic\` donne l'italique.

Avec d'autres valeurs, on revient au texte normal :

\`\`\`css
p {
  font-weight: normal;
  font-style: normal;
}
\`\`\`

---

## Aligner le texte

\`align\` veut dire « aligner ».

\`\`\`css
h1 {
  text-align: center;
}
\`\`\`

Les valeurs possibles sont \`left\` (gauche), \`center\` (centre) et \`right\` (droite).
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

| Couche      | Vient de                    | Rôle                                     |
| ----------- | --------------------------- | ---------------------------------------- |
| Le contenu  | content                     | Le texte ou l'image                      |
| \`padding\`   | padding, le rembourrage     | L'espace **à l'intérieur** de la bordure |
| \`border\`    | border, la bordure          | Le trait autour de la boîte              |
| \`margin\`    | margin, la marge            | L'espace **à l'extérieur** de la bordure |

L'image à retenir : le \`padding\` est le rembourrage d'un colis, à l'intérieur du carton. La \`margin\` est l'espace vide que tu laisses entre deux colis posés côte à côte.

Retiens la différence : \`padding\` pousse le contenu loin de la bordure, \`margin\` pousse les autres éléments loin de la boîte.

---

## La taille

\`width\` veut dire « largeur » et \`height\` « hauteur ».

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

Cette ligne donne trois informations d'un coup : l'épaisseur, le style du trait et la couleur. \`solid\` veut dire « plein ».

\`\`\`css
div {
  border: 3px dashed red;
}
\`\`\`

\`dashed\` veut dire « en tirets » : le trait devient pointillé.

---

## Arrondir les coins

\`radius\` veut dire « rayon », comme le rayon d'un cercle.

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

\`auto\` veut dire « automatique » : le navigateur répartit lui-même l'espace restant à gauche et à droite, et la boîte se retrouve au milieu.

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

Flexbox permet de les placer **côte à côte**. Son nom vient de **flexible box** : « boîte souple », capable de s'adapter à la place disponible.

---

## Activer Flexbox

\`display\` veut dire « affichage » : c'est la façon dont l'élément dispose ses enfants.

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
|A B C              |
\`\`\`

---

## Espacer les éléments

\`\`\`css
.conteneur {
  display: flex;
  gap: 20px;
}
\`\`\`

\`gap\` veut dire « écart » : il ajoute un espace entre chaque enfant.

---

## Placer horizontalement

\`justify-content\` veut dire « justifier le contenu », comme dans un traitement de texte : il gère la position sur la ligne.

\`\`\`css
.conteneur {
  display: flex;
  justify-content: center;
}
\`\`\`

Résultat affiché :

\`\`\`txt
|       A B C       |
\`\`\`

Avec une autre valeur :

\`\`\`css
.conteneur {
  display: flex;
  justify-content: space-between;
}
\`\`\`

Résultat affiché :

\`\`\`txt
|A       B       C|
\`\`\`

| Valeur          | Résultat                                  |
| --------------- | ----------------------------------------- |
| \`flex-start\`    | Tout à gauche (c'est le comportement par défaut) |
| \`center\`        | Au milieu                                 |
| \`flex-end\`      | Tout à droite                             |
| \`space-between\` | Collés aux deux bords, espacés au milieu  |

---

## Placer verticalement

\`align-items\` veut dire « aligner les éléments » : il gère la position en hauteur.

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

\`direction\` veut dire « sens », \`column\` « colonne » et \`row\` « rangée ». Par défaut, Flexbox est en \`row\` : les boîtes se suivent horizontalement.

Avec l'autre valeur :

\`\`\`css
.conteneur {
  display: flex;
  flex-direction: row;
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
console.log("Bonsoir !");
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
Bonsoir !
\`\`\`

Le nom est plus long qu'en Python, mais il se traduit très bien : **log** veut dire « journal », comme le journal de bord d'un bateau. \`console.log\` signifie donc « note ceci dans le journal de la console ».

C'est l'équivalent exact du \`print\` de Python.

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
console.log("J'ai", 42, "ans");
\`\`\`

Résultat :

\`\`\`txt
J'ai 18 ans
J'ai 42 ans
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
let prenom = "Marine";

console.log(prenom);
\`\`\`

Résultat :

\`\`\`txt
Marine
\`\`\`

Ici :

- \`let\` annonce la création d'une variable.
- \`prenom\` est son nom.
- \`=\` ne veut pas dire « est égal à », mais **« reçoit »**.
- \`"Marine"\` est la valeur stockée.

Le même code avec une autre valeur :

\`\`\`js
let prenom = "Tom";

console.log(prenom);
\`\`\`

Résultat :

\`\`\`txt
Tom
\`\`\`

---

## \`let\` ou \`const\` ?

Les deux mots viennent de l'anglais : \`let\` veut dire « soit », comme en mathématiques (« soit un nombre x... »), et \`const\` est l'abréviation de **constant**, « qui ne change pas ».

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
const prenom = "Marine";

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

Les mêmes opérations, avec d'autres valeurs :

\`\`\`js
const a = 12;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
\`\`\`

Résultat :

\`\`\`txt
17
7
60
2.4
2
\`\`\`

\`%\` donne le reste de la division. Il est très utilisé pour savoir si un nombre est pair.

---

## Coller du texte

\`\`\`js
const prenom = "Marine";

console.log("Bonjour " + prenom);
\`\`\`

Résultat :

\`\`\`txt
Bonjour Marine
\`\`\`

Avec une autre valeur :

\`\`\`js
const prenom = "Tom";

console.log("Bonjour " + prenom);
\`\`\`

Résultat :

\`\`\`txt
Bonjour Tom
\`\`\`

L'opérateur \`+\` colle deux textes bout à bout. N'oublie pas l'espace avant le guillemet fermant, sinon tu obtiendrais \`BonjourMarine\`.
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

Cela se lit : « **si** age est supérieur ou égal à 18, affiche "Tu es majeur." ».

Avec une autre valeur, rien ne s'affiche :

\`\`\`js
const age = 15;

if (age >= 18) {
  console.log("Tu es majeur.");
}
\`\`\`

Résultat :

\`\`\`txt

\`\`\`

La condition se met entre parenthèses, et le code à exécuter entre accolades \`{}\`.

Là où Python utilise un \`:\` et le décalage des lignes, le JavaScript utilise les accolades. L'indentation, elle, reste conseillée : elle ne sert qu'à rendre le code lisible.

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

Le même code avec une autre note :

\`\`\`js
const note = 18;

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
Très bien
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
} else {
  console.log("Tu ne peux pas conduire.");
}
\`\`\`

Résultat :

\`\`\`txt
Tu peux conduire.
\`\`\`

Avec d'autres valeurs :

\`\`\`js
const age = 20;
const permis = false;

if (age >= 18 && permis) {
  console.log("Tu peux conduire.");
} else {
  console.log("Tu ne peux pas conduire.");
}
\`\`\`

Résultat :

\`\`\`txt
Tu ne peux pas conduire.
\`\`\`

Avec \`&&\`, il faut que **les deux** conditions soient vraies. Ici l'âge convient, mais pas le permis.

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

Les deux mots-clés viennent de l'anglais : \`for\` veut dire « pour », et \`while\` « tant que ».

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

Avec une autre valeur :

\`\`\`js
for (let i = 0; i < 2; i++) {
  console.log("Bonjour");
}
\`\`\`

Résultat :

\`\`\`txt
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

En partant d'une autre valeur :

\`\`\`js
for (let i = 3; i < 8; i++) {
  console.log(i);
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

Avec une autre valeur :

\`\`\`js
let compteur = 1;

while (compteur <= 3) {
  console.log(compteur);
  compteur++;
}
\`\`\`

Résultat :

\`\`\`txt
1
2
3
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

Avec un autre indice et un autre tableau :

\`\`\`js
const fruits = ["Pomme", "Banane", "Orange", "Kiwi"];

console.log(fruits[2]);
console.log(fruits.length);
\`\`\`

Résultat :

\`\`\`txt
Orange
4
\`\`\`

Le premier élément porte toujours le numéro **0**, et \`length\` (« longueur ») donne le nombre d'éléments.

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

On la crée avec \`function\`, « fonction », et elle rend son résultat avec \`return\`, « renvoie ».

\`\`\`js
function direBonjour() {
  console.log("Bonjour !");
}

direBonjour();
direBonjour();
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
Bonjour !
\`\`\`

Écrire la fonction ne suffit pas : sans l'appel \`direBonjour()\`, rien ne se passe. Ce sont les parenthèses qui veulent dire « fais-le, maintenant ».

---

## Les paramètres

Une fonction peut recevoir des informations.

\`\`\`js
function direBonjour(prenom) {
  console.log("Bonjour " + prenom);
}

direBonjour("Marine");
direBonjour("Emma");
\`\`\`

Résultat :

\`\`\`txt
Bonjour Marine
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
console.log(addition(10, 3));
\`\`\`

Résultat :

\`\`\`txt
11
13
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
presentation("Lucas", 20);
\`\`\`

Résultat :

\`\`\`txt
Emma a 16 ans.
Lucas a 20 ans.
\`\`\`

Les arguments sont donnés dans le même ordre que les paramètres : d'abord le prénom, ensuite l'âge.

---

## Les fonctions fléchées

Tu croiseras souvent une autre écriture, plus courte.

\`\`\`js
const addition = (a, b) => {
  return a + b;
};

console.log(addition(4, 7));
console.log(addition(10, 3));
\`\`\`

Résultat :

\`\`\`txt
11
13
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

On utilise \`document.querySelector()\`. En anglais, \`document\` désigne la page affichée, et \`querySelector\` veut dire « sélecteur de recherche » : la ligne se lit « dans la page, trouve-moi l'élément qui correspond à ce sélecteur ».

On lui donne le même sélecteur qu'en CSS.

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

Avec une autre valeur :

\`\`\`js
const titre = document.querySelector("#titre");

titre.textContent = "Bienvenue !";
\`\`\`

Le titre affiché devient :

\`\`\`txt
Bienvenue !
\`\`\`

\`textContent\` veut dire « le contenu texte ». Le HTML n'a pas changé sur le disque : c'est la page affichée qui est modifiée.

---

## Changer le style

\`\`\`js
const titre = document.querySelector("#titre");

titre.style.color = "red";
\`\`\`

Avec une autre valeur, le titre devient bleu :

\`\`\`js
const titre = document.querySelector("#titre");

titre.style.color = "blue";
\`\`\`

Attention, les noms changent un peu : en CSS on écrit \`background-color\`, en JavaScript on écrit \`backgroundColor\`.

\`\`\`js
titre.style.backgroundColor = "yellow";
\`\`\`

---

## Réagir à un clic

On utilise \`addEventListener\`, mot à mot « ajoute un écouteur d'événement ». On place une oreille sur le bouton, qui attend qu'il se passe quelque chose — ici un \`"click"\`, un clic.

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

\`value\` veut dire « valeur » : la propriété contient ce que l'utilisateur a écrit dans le champ.
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

Détaillons, en traduisant chaque mot :

- \`#include <stdio.h>\` : **include** veut dire « inclure ». Cette ligne ajoute au programme les outils d'affichage, dont \`printf\`.
- \`int main(void)\` : **main** veut dire « principal ». C'est la fonction par laquelle le programme commence.
- \`printf\` : contraction de **print formatted**, « affiche avec un format ».
- \`return 0;\` : **return** veut dire « renvoie ». Ici, le programme annonce que tout s'est bien passé.

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

Avec une autre valeur :

\`\`\`c
int age = 42;

printf("J'ai %d ans\\n", age);
\`\`\`

Résultat :

\`\`\`txt
J'ai 42 ans
\`\`\`

\`%d\` est remplacé par la valeur de \`age\`. C'est le « format » du nom \`printf\` : un emplacement réservé dans le texte.

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

Avec d'autres valeurs :

\`\`\`c
int age = 20;
char initiale = 'L';

printf("%c a %d ans\\n", initiale, age);
\`\`\`

Résultat :

\`\`\`txt
L a 20 ans
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

Avec une autre valeur :

\`\`\`c
float taille = 1.85;

printf("%f\\n", taille);
printf("%.2f\\n", taille);
\`\`\`

Résultat :

\`\`\`txt
1.850000
1.85
\`\`\`

Le \`.2\` veut dire « deux chiffres après la virgule ».
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

Avec une autre valeur :

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 42;

    printf("%d\\n", age);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
42
\`\`\`

---

## Les principaux types

Les noms des types sont des mots anglais abrégés.

| Type       | Vient de       | Description         | Exemple        | Format  |
| ---------- | -------------- | ------------------- | -------------- | ------- |
| \`int\`    | integer        | Nombre entier       | \`15\`, \`-5\` | \`%d\`  |
| \`float\`  | floating point | Nombre décimal      | \`4.5\`        | \`%f\`  |
| \`double\` | double         | Décimal plus précis | \`3.14159\`    | \`%lf\` |
| \`char\`   | character      | Un seul caractère   | \`'A'\`        | \`%c\`  |

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

Le mot-clé \`const\`, abréviation de **constant**, empêche toute modification.

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

Les mêmes opérations, avec d'autres valeurs :

\`\`\`c
#include <stdio.h>

int main(void)
{
    int a = 7;
    int b = 3;

    printf("%d\\n", a + b);
    printf("%d\\n", a - b);
    printf("%d\\n", a * b);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
10
4
21
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

Avec d'autres valeurs :

\`\`\`c
int a = 9;
int b = 2;

printf("%d\\n", a / b);
\`\`\`

Résultat :

\`\`\`txt
4
\`\`\`

Là encore, le \`.5\` a disparu.

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

Avec d'autres valeurs :

\`\`\`c
float a = 9;
float b = 2;

printf("%.1f\\n", a / b);
\`\`\`

Résultat :

\`\`\`txt
4.5
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

Avec d'autres valeurs :

\`\`\`c
printf("%d\\n", 9 % 2);
\`\`\`

Résultat :

\`\`\`txt
1
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

\`\`\`c
int nombre = 7;

printf("%d\\n", nombre % 2);
\`\`\`

Résultat :

\`\`\`txt
1
\`\`\`

Le reste vaut \`1\` : le nombre est impair.

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

Avec d'autres valeurs :

\`\`\`c
printf("%d\\n", 5 * 5);
\`\`\`

Résultat :

\`\`\`txt
25
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

Cela se lit : « **si** age est supérieur ou égal à 18, affiche "Tu es majeur." ».

Avec une autre valeur, rien ne s'affiche :

\`\`\`c
#include <stdio.h>

int main(void)
{
    int age = 15;

    if (age >= 18) {
        printf("Tu es majeur.\\n");
    }
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt

\`\`\`

Ici, ce sont les accolades qui délimitent le bloc. L'indentation ne sert qu'à la lisibilité — mais on l'écrit quand même toujours.

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

Le même code avec une autre note :

\`\`\`c
int note = 18;

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
Très bien
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
} else {
    printf("Le nombre ne vaut pas 8\\n");
}
\`\`\`

Résultat :

\`\`\`txt
Le nombre vaut 8
\`\`\`

Avec une autre valeur :

\`\`\`c
int nombre = 3;

if (nombre == 8) {
    printf("Le nombre vaut 8\\n");
} else {
    printf("Le nombre ne vaut pas 8\\n");
}
\`\`\`

Résultat :

\`\`\`txt
Le nombre ne vaut pas 8
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
} else {
    printf("Tu n'es pas un adulte actif\\n");
}
\`\`\`

Résultat :

\`\`\`txt
Tu es un adulte
\`\`\`

Avec une autre valeur :

\`\`\`c
int age = 70;

if (age >= 18 && age < 65) {
    printf("Tu es un adulte\\n");
} else {
    printf("Tu n'es pas un adulte actif\\n");
}
\`\`\`

Résultat :

\`\`\`txt
Tu n'es pas un adulte actif
\`\`\`

Avec \`&&\`, les deux conditions doivent être vraies en même temps. Ici la première l'est, mais pas la seconde.
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

\`for\` veut dire « pour » en anglais. Elle s'utilise quand on connaît le nombre de répétitions.

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

Avec une autre valeur :

\`\`\`c
for (int i = 0; i < 2; i++) {
    printf("Bonjour\\n");
}
\`\`\`

Résultat :

\`\`\`txt
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

\`while\` veut dire « tant que ». Elle continue tant que la condition est vraie.

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

Avec une autre valeur :

\`\`\`c
int compteur = 1;

while (compteur <= 3) {
    printf("%d\\n", compteur);
    compteur++;
}
\`\`\`

Résultat :

\`\`\`txt
1
2
3
\`\`\`

Attention : si la condition ne devient jamais fausse, le programme
tourne indéfiniment.

Ici, oublier \`compteur++\` bloquerait l'éditeur.

---

## Sortir d'une boucle

\`break\` veut dire « casser, interrompre » : la boucle s'arrête immédiatement.

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

Avec une autre valeur :

\`\`\`c
for (int i = 0; i < 10; i++) {
    if (i == 5) {
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
3
4
\`\`\`

\`continue\` veut dire « continue » : on saute la fin du tour en cours et on passe directement au suivant.

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

Avec une autre valeur :

\`\`\`c
for (int i = 0; i < 5; i++) {
    if (i == 4) {
        continue;
    }
    printf("%d\\n", i);
}
\`\`\`

Résultat :

\`\`\`txt
0
1
2
3
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

Avec un autre indice et une autre valeur :

\`\`\`c
int nombres[3] = {1, 2, 3};

nombres[0] = 50;

printf("%d\\n", nombres[0]);
\`\`\`

Résultat :

\`\`\`txt
50
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

En C, il n'existe pas de type \`string\` (« chaîne »).

Une chaîne est un **tableau de \`char\`**, c'est-à-dire une suite de caractères rangés les uns après les autres.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char prenom[] = "Marine";

    printf("%s\\n", prenom);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Marine
\`\`\`

Avec une autre valeur :

\`\`\`c
#include <stdio.h>

int main(void)
{
    char prenom[] = "Tom";

    printf("%s\\n", prenom);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Tom
\`\`\`

On l'affiche avec le format \`%s\`, pour **string** : « chaîne ».

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
char prenom[] = "Marine";
\`\`\`

Ce tableau contient en réalité **6** cases :

\`\`\`txt
'A' 'l' 'i' 'c' 'e' '\\0'
\`\`\`

C'est ce \`\\0\` qui permet à \`printf\` de savoir où s'arrêter.

---

## Accéder à une lettre

\`\`\`c
char prenom[] = "Marine";

printf("%c\\n", prenom[0]);
\`\`\`

Résultat :

\`\`\`txt
A
\`\`\`

Avec un autre indice :

\`\`\`c
char prenom[] = "Marine";

printf("%c\\n", prenom[3]);
\`\`\`

Résultat :

\`\`\`txt
c
\`\`\`

---

## La longueur d'une chaîne

La fonction \`strlen\` vient de \`string.h\`. Son nom est la contraction de **string length** : « longueur de la chaîne ».

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char prenom[] = "Marine";

    printf("%d\\n", (int)strlen(prenom));
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
5
\`\`\`

Avec une autre valeur :

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char prenom[] = "Emma";

    printf("%d\\n", (int)strlen(prenom));
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
4
\`\`\`

\`strlen\` ne compte pas le \`\\0\`.

---

## Parcourir une chaîne

On s'arrête quand on rencontre le \`\\0\`.

\`\`\`c
char prenom[] = "Marine";

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
    dire_bonjour();
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Bonjour !
Bonjour !
\`\`\`

Ici :

- \`void\` avant le nom : **void** veut dire « vide », donc la fonction ne renvoie rien.
- \`(void)\` : elle ne reçoit aucun paramètre.

Écrire la fonction ne suffit pas : c'est l'appel, avec ses parenthèses, qui la déclenche. Deux appels, deux affichages.

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
    afficher_age(42);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
J'ai 18 ans
J'ai 42 ans
\`\`\`

\`age\` est le **paramètre** : le nom écrit dans la définition. \`18\` et \`42\` sont les **arguments** : les valeurs données à chaque appel.

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
    printf("%d\\n", addition(10, 3));
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
11
13
\`\`\`

Attention : \`return\` **rend** la valeur, il ne l'affiche pas. Sans le \`printf\`, l'addition serait bien calculée, mais son résultat perdu.

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
    presentation("Lucas", 20);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
Emma a 16 ans.
Lucas a 20 ans.
\`\`\`

Les arguments sont donnés dans le même ordre que les paramètres.

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

Un pointeur (**pointer** en anglais, « ce qui pointe vers ») est une variable qui contient une adresse. Il ne contient pas la valeur : il indique où elle se trouve, comme une adresse postale ne contient pas la maison.

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

Avec une autre valeur :

\`\`\`c
int age = 18;
int *pointeur = &age;

*pointeur = 30;

printf("%d\\n", age);
\`\`\`

Résultat :

\`\`\`txt
30
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

Avec une autre valeur :

\`\`\`c
#include <stdio.h>

void doubler(int *n)
{
    *n = *n * 2;
}

int main(void)
{
    int valeur = 7;

    doubler(&valeur);

    printf("%d\\n", valeur);
    return 0;
}
\`\`\`

Résultat :

\`\`\`txt
14
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

Son nom est la contraction de **scan formatted** : « lis en suivant un format ». C'est le miroir de \`printf\`, qui écrit en suivant un format.

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

S'il tape \`42\` :

\`\`\`txt
Quel est ton age ? 42
Tu as 42 ans
\`\`\`

Le programme est le même : seule la valeur tapée change.

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

S'il tape \`7 3\` :

\`\`\`txt
10
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
