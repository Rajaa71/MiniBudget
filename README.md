#  MiniBudget (petit définition)

MiniBudget est une application web simple pour gérer vos dépenses personnelles.  
Elle permet d'ajouter, visualiser et analyser les dépenses par catégorie via un graphique.

---
## Fonctionnalités

- Ajouter une dépense (montant, catégorie, date, commentaire facultatif).
- Visualiser la liste chronologique des dépenses.
- Consulter un récapitulatif graphique (dépenses par catégorie).
- Conserver les données localement dans le navigateur (localStorage).
- Tests unitaires sur les composants avec Vitest.


## Démo en ligne 

[ Pour voir la démo en ligne](https://Rajaa71.github.io/MiniBudget/)  


---

## Technologies utilisées

- React 19 + Vite 
- Hooks React (useState / useEffect)
- LocalStorage 
- Tailwind CSS
- Chart.js (react-chartjs-2)
- Vitest + React Testing Library
- Github Actions pour CI/CD
- Github Pages pour le déploiement

---

## Aperçu

[Aperçu MiniBudget](./screenshot.png) <!-- Tu peux remplacer par un vrai lien vers une image -->

---

## Installation

"bash": 
git clone https://github.com/Rajaa71/MiniBudget.git
cd MiniBudget
npm install
npm run dev

"Pour lancer les tests":
npm run test