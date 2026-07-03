import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// COOP/COEP enable cross-origin isolation so SharedArrayBuffer + Atomics work,
// which lets us implement a synchronous Python input() from the worker.
// `credentialless` lets the Pyodide CDN assets load without CORP headers.
const isolationHeaders = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Embedder-Policy": "credentialless",
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { headers: isolationHeaders },
  preview: { headers: isolationHeaders },
  worker: {
    // Worker classique : importScripts() pour charger Pyodide depuis le CDN.
    format: "iife",
  },
});
