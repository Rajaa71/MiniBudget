#  MiniBudget (petit définition)

MiniBudget est une application web simple pour gérer vos dépenses personnelles.  
Elle permet d'ajouter, visualiser et analyser les dépenses par catégorie via un graphique.

## Fonctionnalités

- Ajouter une dépense (montant, catégorie, date, commentaire facultatif).
- Visualiser la liste chronologique des dépenses.
- Consulter un récapitulatif graphique (dépenses par catégorie).
- Conserver les données localement dans le navigateur (localStorage).
- Tests unitaires sur les composants avec Vitest.

## Démo en ligne 

[ Pour voir la démo en ligne](https://Rajaa71.github.io/MiniBudget/)  

## Technologies utilisées

- React 19 + Vite 
- Hooks React (useState / useEffect)
- LocalStorage 
- Tailwind CSS
- Chart.js (react-chartjs-2)
- Vitest + React Testing Library
- Github Actions pour CI/CD à chaque fois un push sur main.
- Github Pages pour le déploiement avec la branche (gh-pages).


## Installation

"bash": 
git clone https://github.com/Rajaa71/MiniBudget.git
cd MiniBudget (entrer dans le dossier MiniBudget depuis votre terminal)
npm install (pour installer les dépendences)
npm run dev ( lancer le serveur de développement)

"Pour lancer les tests":
npm run test

## Structure de mon projet:
MiniBudget/
├── src/
│   ├── components/         # Composants de React
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   └── ExpenseChart.jsx
│   ├── App.jsx             #le fichier principal
│   ├── main.jsx            # Entrée React
│   └── index.css           # Styles (Tailwind)
├── tests/                  # Test des fichiers
├── vite.config.js
├── package.json
└── README.md

## Licence:
Ce projet est open source et disponible sous la licence MIT(Massachusetts Institute of Technology, en français Institut de technologie du Massachusetts).

## Réalisée par:
Nom : Rajaa Fahim
Métier: Étudiante en Génie Informatique dans EST Casa( Ecole Supérieure de Technologie
Casablanca).
Email : rajaafahim89@gmail.com