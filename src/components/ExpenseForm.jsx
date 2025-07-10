import { useState } from 'react';

const ExpenseForm = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !category || !date) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const newExpense = {
      amount: parseFloat(amount),
      category,
      date,
      comment,
    };

    onAdd(newExpense);
    setAmount('');
    setCategory('');
    setDate('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Ajouter une dépense</h2>

      <div className="mb-3">
        <label htmlFor="amount" className="block font-medium">Montant *</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="block font-medium">Catégorie *</label>
        <select
          id="category"
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Choisir une catégorie</option>
          <option>Alimentation</option>
          <option>Transport</option>
          <option>Loisirs</option>
          <option>Santé</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="block font-medium">Date *</label>
        <input
          id="date"
          type="date"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block font-medium">Commentaire</label>
        <input
          id="comment"
          type="text"
          className="w-full p-2 border rounded"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ajouter
      </button>
    </form>
  );
};

export default ExpenseForm;
