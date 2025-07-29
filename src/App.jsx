import { useState, useCallback, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import Login from "./components/Login";
import Register from "./components/Register";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = useCallback((expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setExpenses([]);
    localStorage.removeItem("expenses");
  };

  if (!isLoggedIn) {
    return showRegister ? (
      <Register
        onRegister={() => setShowRegister(false)}
        onSwitchToLogin={() => setShowRegister(false)}
      />
    ) : (
      <Login
        onLogin={() => setIsLoggedIn(true)}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="w-full max-w-3xl flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">MiniBudget</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
        >
          Déconnexion
        </button>
      </header>

      <main className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg space-y-6">
        <ExpenseForm onAddExpense={handleAddExpense} />
        {expenses.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            Aucune dépense ajoutée pour le moment.
          </p>
        ) : (
          <>
            <ExpenseList expenses={expenses} />
            <ExpenseChart expenses={expenses} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;