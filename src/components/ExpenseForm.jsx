import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const categories = ["Alimentation", "Transport", "Loisirs", "Santé", "Autres"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Veuillez remplir tous les champs obligatoires (Catégorie, Montant, Date)");
      return;
    }

    const newExpense = {
      id: Date.now(),
      category: title,
      amount: parseFloat(amount),
      date: new Date(date).toLocaleDateString(),
      comment,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="number"
          placeholder="Montant"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full"
          min="0"
          step="0.01"
        />

        <select
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full"
        >
          <option value="">-- Choisir une catégorie --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Commentaire"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Ajouter
      </button>
    </form>
  );
}
