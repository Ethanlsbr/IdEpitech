export const learningCProjects = [
  {
    id: "c-program",
    name: "Le Programme Minimal",
    language: "c",
    description: "La structure de base d'un programme C.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Complète le programme pour afficher exactement : Bonjour !

int main(void)
{
    return 0;
}
`,
    expected: "Bonjour !",
  },
  {
    id: "c-print",
    name: "Afficher du texte",
    language: "c",
    description: "Affiche du texte et des valeurs avec printf.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Affiche exactement : J'ai 18 ans
// Utilise la variable age et le format %d

int main(void)
{
    int age = 18;

    return 0;
}
`,
    expected: "J'ai 18 ans",
  },
  {
    id: "c-comment",
    name: "Les Commentaires",
    language: "c",
    description: "Explique ton code sans le modifier.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Écris un commentaire de ton choix,
// puis affiche exactement : Compris

int main(void)
{
    return 0;
}
`,
    expected: "Compris",
  },
  {
    id: "c-variable",
    name: "Les Variables",
    language: "c",
    description: "Stocke des informations, avec un type obligatoire.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Stocke 18 dans une variable age de type int,
// puis affiche-la

int main(void)
{
    return 0;
}
`,
    expected: "18",
  },
  {
    id: "c-calc",
    name: "Les Calculs",
    language: "c",
    description: "Effectue des calculs.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Affiche le résultat du calcul 7 + 5

int main(void)
{
    return 0;
}
`,
    expected: "12",
  },
  {
    id: "c-condition",
    name: "Les Conditions",
    language: "c",
    description: "Prends des décisions avec if.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// age vaut 20 : crée la variable age,
// et si elle est supérieure ou égale à 18, affiche : Majeur

int main(void)
{
    return 0;
}
`,
    expected: "Majeur",
  },
  {
    id: "c-loop",
    name: "Les Boucles",
    language: "c",
    description: "Répète plusieurs fois une action.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Avec une boucle, affiche les nombres 1, 2 puis 3 (un par ligne)

int main(void)
{
    return 0;
}
`,
    expected: "1\n2\n3",
  },
  {
    id: "c-array",
    name: "Les Tableaux",
    language: "c",
    description: "Stocke plusieurs valeurs.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Crée un tableau contenant 10, 20 et 30,
// puis affiche chaque valeur (une par ligne)

int main(void)
{
    return 0;
}
`,
    expected: "10\n20\n30",
  },
  {
    id: "c-string",
    name: "Les Chaînes de Caractères",
    language: "c",
    description: "Manipule du texte avec des tableaux de char.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Stocke "Alice" dans un tableau de char nommé prenom,
// puis affiche-le avec le format %s

int main(void)
{
    return 0;
}
`,
    expected: "Alice",
  },
  {
    id: "c-function",
    name: "Les Fonctions",
    language: "c",
    description: "Regroupe du code réutilisable.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// Écris une fonction qui affiche "Salut",
// puis appelle-la depuis main

int main(void)
{
    return 0;
}
`,
    expected: "Salut",
  },
  {
    id: "c-pointer",
    name: "Les Pointeurs",
    language: "c",
    description: "Manipule l'adresse d'une variable.",
    subject: null,
    hasEnd: true,
    code: "",
    explanation: `#include <stdio.h>

// valeur vaut 21.
// Sans y toucher directement, passe par un pointeur
// pour la changer en 42.

int main(void)
{
    int valeur = 21;

    printf("%d\\n", valeur);
    return 0;
}
`,
    expected: "42",
  },
];
