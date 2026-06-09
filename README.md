# 🐍 IdEpitech

Un IDE Python qui tourne **entièrement dans le navigateur** : éditeur
[Monaco](https://microsoft.github.io/monaco-editor/) + exécution
[Pyodide](https://pyodide.org/) (CPython compilé en WebAssembly), en React + Tailwind v4.

## Fonctionnalités

- **Éditeur Monaco** (coloration, autocomplétion, multi-curseur) configuré pour Python.
- **Exécution Python réelle** via Pyodide dans un **Web Worker** (l'UI ne gèle jamais).
- **Console** avec sortie streamée `stdout` / `stderr` colorée et valeur de retour.
- **`input()` interactif** — saisie synchrone gérée par `SharedArrayBuffer` + `Atomics`.
- **Imports automatiques** : `import numpy`, `pandas`… déclenchent le chargement du paquet.
- Raccourci **⌘/Ctrl + Entrée** pour lancer le code.

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
  App.jsx               état global, câblage éditeur ↔ console
  usePyodide.js         hook : pilote le worker, run() et sendInput()
  pyodide.worker.js     worker : charge Pyodide, exécute, gère stdin/stdout
  components/
    Editor.jsx          Monaco
    Console.jsx         sortie + ligne de saisie input()
    Toolbar.jsx         statut, bouton Exécuter
```
