# 🐍 IdEpitech

Un IDE Python qui tourne **entièrement dans le navigateur** : éditeur
[Monaco](https://microsoft.github.io/monaco-editor/) + exécution
[Pyodide](https://pyodide.org/) (CPython compilé en WebAssembly), en React + Tailwind v4.

## Fonctionnalités

- **Comptes locaux** : connexion / création de compte, stockés dans le navigateur (IndexedDB, mot de passe hashé). Tout l'accès aux données passe par `src/lib/db.js`, remplaçable par un backend (Supabase…) sans toucher au reste.
- **Examen adaptatif** au premier login (et rejouable à volonté) : la difficulté des questions s'ajuste aux réponses et estime un niveau parmi **Jamais fait · Débutant · Intermédiaire · Avancé · Expert**.
- **Parcours d'exercices par niveau** avec **validation automatique** : le code est lancé contre des cas de test dans Pyodide → ✓/✗ par test.
- **Indices à paliers** dévoilés progressivement, dont l'ouverture par défaut dépend du niveau (on prend par la main les débutants, strict minimum pour les experts).
- **Bac à sable** : l'éditeur Python libre d'origine.
- **Éditeur Monaco**, **exécution Python réelle** via Pyodide en **Web Worker**, console `stdout`/`stderr`, **`input()` interactif** (`SharedArrayBuffer` + `Atomics`), imports auto, raccourci **⌘/Ctrl + Entrée**.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production
```

## Comment ça marche

Pyodide est chargé depuis le CDN jsDelivr à l'intérieur de `src/pyodide.worker.js`.
Le worker expose `stdout`/`stderr` et un `stdin` synchrone. Pour que `input()`
bloque le worker en attendant la saisie, le navigateur doit être en
**cross-origin isolation** : `vite.config.js` envoie donc les en-têtes
`Cross-Origin-Opener-Policy: same-origin` et
`Cross-Origin-Embedder-Policy: credentialless`, ce qui active `SharedArrayBuffer`.

> ⚠️ En déploiement, ces deux en-têtes HTTP doivent être servis par ton hébergeur,
> sinon `input()` ne fonctionnera pas (le reste oui).

## Structure

```
src/
  App.jsx               routage entre écrans (auth → examen → dashboard → exercice / bac à sable)
  pyodide.worker.js     worker : charge Pyodide, exécute, valide les tests, gère stdin/stdout
  context/
    AuthContext.jsx     comptes, session, niveau de l'utilisateur
    PyodideProvider.jsx runtime Pyodide partagé : run(), runTests(), sendInput()
  lib/
    db.js               accès IndexedDB (users, session, examens, progression)
    levels.js           niveaux + politique d'aide par niveau
    exam.js             moteur d'examen adaptatif (pur)
  data/
    examQuestions.js    pool de questions taggées par difficulté
    exercises.js        banque d'exercices (énoncé, tests, indices, solution)
  screens/
    AuthScreen.jsx      connexion / inscription
    ExamScreen.jsx      examen adaptatif
    DashboardScreen.jsx niveau, progression, exercices recommandés
    ExerciseScreen.jsx  éditeur + console + validation + indices
    SandboxScreen.jsx   éditeur Python libre
  components/
    Editor.jsx          Monaco
    Console.jsx         sortie + ligne de saisie input()
    Toolbar.jsx         statut, bouton Exécuter
    HintPanel.jsx       indices à paliers
```
