// __tests__/ExpenseChart.test.jsx
import { render, screen } from '@testing-library/react';
import ExpenseChart from '../components/ExpenseChart';

test('rendu du composant ExpenseChart', () => {
  const expenses = [
    { amount: 100, category: 'Alimentation' },
    { amount: 50, category: 'Transport' },
  ];

  render(<ExpenseChart expenses={expenses} />);

  // Vérifie que le canvas du graphique est présent
  const canvas = screen.getByRole('img');
  expect(canvas).toBeInTheDocument();
});
