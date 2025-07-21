import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrement des éléments de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  // Grouper les montants par catégorie
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Total des dépenses (DH)',
        data: Object.values(categoryTotals),
        backgroundColor: [
          '#4F46E5', // Indigo
          '#10B981', // Green
          '#F59E0B', // Amber
          '#EF4444', // Red
          '#8B5CF6', // Violet
          '#3B82F6', // Blue
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Dépenses par catégorie</h2>
      {Object.keys(categoryTotals).length === 0 ? (
        <p className="text-gray-500">Aucune donnée à afficher.</p>
      ) : (
        <div className="w-80 h-80 mx-auto">
        <Doughnut data={data} />
        </div>
      )}
    </div>
  );
};

export default ExpenseChart;
