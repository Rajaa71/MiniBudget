import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import './index.css'; // Assure-toi que Tailwind est bien importé ici

function App() {
  const [expenses, setExpenses] = useState([]);

  // Charger les données depuis localStorage au démarrage
  useEffect(() => {
    const stored = localStorage.getItem('expenses');
    if (stored) {
      setExpenses(JSON.parse(stored));
    }
  }, []);

  // Sauvegarder les données dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Ajouter une nouvelle dépense
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 text-blue-700">
          MiniBudget
        </h1>

        <ExpenseForm onAdd={addExpense} />
        <ExpenseList expenses={expenses} />
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
