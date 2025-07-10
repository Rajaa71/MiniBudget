const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Aucune dépense enregistrée.
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Liste des dépenses</h2>

      <ul className="divide-y divide-gray-200">
        {expenses.map((expense, index) => (
          <li key={index} className="py-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-lg text-gray-800">
                  {expense.amount.toFixed(2)} DH
                </p>
                <p className="text-sm text-gray-600">{expense.category}</p>
                <p className="text-sm text-gray-500">{expense.date}</p>
                {expense.comment && (
                  <p className="text-sm italic text-gray-400">"{expense.comment}"</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
