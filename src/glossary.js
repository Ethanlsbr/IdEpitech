export const glossary = [
  {
    id: "print",
    name: "print",
    language: "python",
    description: "Affiche du texte dans la console.",
    code: `# print

\`print()\` affiche une ou plusieurs valeurs dans la console.

## Syntaxe

\`\`\`py
print("Bonjour le monde")
\`\`\`

## Plusieurs valeurs

On peut passer plusieurs arguments, séparés par des virgules :

\`\`\`py
print("Age :", 21)
\`\`\`

## Le paramètre \`end\`

Par défaut, \`print\` termine par un retour à la ligne. On peut le changer :

\`\`\`py
print("Sans", end=" ")
print("retour")
\`\`\`
`,
  },
  {
    id: "input",
    name: "input",
    language: "python",
    description: "Lit une saisie de l'utilisateur.",
    code: `# input

\`input()\` met le programme en pause et attend que l'utilisateur tape quelque chose.

## Syntaxe

\`\`\`py
nom = input("Quel est ton nom ? ")
print("Bonjour", nom)
\`\`\`

## Attention au type

\`input()\` renvoie **toujours** une chaîne de caractères. Pour obtenir un nombre :

\`\`\`py
age = int(input("Ton age ? "))
\`\`\`
`,
  },
  {
    id: "for",
    name: "for",
    language: "python",
    description: "Répète une action sur une séquence.",
    code: `# for

La boucle \`for\` parcourt les éléments d'une séquence (liste, chaîne, \`range\`...).

## Parcourir un range

\`\`\`py
for i in range(5):
    print(i)
\`\`\`

## Parcourir une liste

\`\`\`py
fruits = ["pomme", "poire", "cerise"]
for fruit in fruits:
    print(fruit)
\`\`\`
`,
  },
];
