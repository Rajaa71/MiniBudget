export default function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p className="text-gray-500">Aucune dépense ajoutée.</p>;
  }

  return (
    <ul className="space-y-2">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="border p-4 rounded-lg flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-semibold mb-4">La liste des dépenses</h2>
            <h3 className="font-semibold">{expense.category}</h3>
            <p className="text-sm text-gray-600">{expense.date}</p>
            {expense.comment && (
              <p className="text-sm italic text-gray-500">{expense.comment}</p>
            )}
          </div>
          <span className="font-bold text-blue-700">{expense.amount} MAD</span>
        </li>
      ))}
    </ul>
  );
}
