import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base:'/MiniBudget/',
  test: { // Section pour Vitest 
    environment:'jsdom',
  globals: true, //Permet d'utiliser des fonctions globales comme 'describe', 'it', 'expect'
  setupFiles:'./src/setupTests.js', //Chemin vers le fichier de setup des tests
  css: false, //Désactive le traitement CSS pour les tests (souvent pas nécessaire)
  },
});
