/*
id: string, id of the project
name: string, name of the project
language: enum string, language of the project (python, html, css, js...)
description: string, description of the project
hasEnd: boolean, if true the project can be considered as finishable, else not
beforeCode: string, code concat before the code written by the user
afterCode: string, code concat after the code written by the user
explanation: string, code already written in the editor at the first opening of the project
expected: string, result expected to complete the project
*/

export const learningPythonProjects = [
  {
    id: "print",
    name: "Print",
    language: "python",
    description: "Écris ton premier message dans la console.",
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
    language: "python",
    description: "Ajoute une note qui ne s'exécute pas.",
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
    language: "python",
    description: "Stocke une information pour la réutiliser ensuite.",
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
    language: "python",
    description: "Fais calculer Python à ta place.",
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
    language: "python",
    description: "Enchaîne les quatre opérations sur des variables données.",
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
    language: "python",
    description: "N'agis que dans un seul cas.",
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
    language: "python",
    description: "Traite aussi le cas contraire.",
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
    language: "python",
    description: "Répète une action sans réécrire la même ligne.",
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
    language: "python",
    description: "Répète tant qu'une condition reste vraie.",
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
    language: "python",
    description: "Stocke plusieurs valeurs dans une seule variable.",
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
    language: "python",
    description: "Ajoute un élément à une liste existante.",
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
    language: "python",
    description: "Retire un élément d'une liste.",
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
    language: "python",
    description: "Regroupe du code sous un nom pour le réutiliser.",
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
    language: "python",
    description:
      "Fais une fonction qui reçoit une valeur et renvoie un résultat.",
    hasEnd: true,
    beforeCode: "",
    afterCode: "print(f'Verification interne ==>{le_double(69)}<==')",
    explanation:
      "# Écris une fonction nommée 'le_double' qui prend un nombre entier en paramètre\n# et renvoie son double, puis affiche le résultat obtenu avec 7.\n# Elle ne doit rien afficher elle-même : elle renvoie, et c'est toi qui affiches.\n# Elle doit marcher avec n'importe quel entier, pas seulement 7.\n",
    expected: "14\nVerification interne ==>138<==",
  },
];
