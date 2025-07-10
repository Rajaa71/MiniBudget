// __tests__/ExpenseList.test.jsx
import { render, screen } from '@testing-library/react';
import ExpenseList from '../components/ExpenseList';

test('affiche une liste de dépenses', () => {
  const expenses = [
    { amount: 50, category: 'Transport', date: '2024-06-01' },
    { amount: 30, category: 'Loisirs', date: '2024-06-02' },
  ];

  render(<ExpenseList expenses={expenses} />);

  expect(screen.getByText(/50.00 DH/i)).toBeInTheDocument();
  expect(screen.getByText(/30.00 DH/i)).toBeInTheDocument();
  expect(screen.getByText(/Transport/i)).toBeInTheDocument();
  expect(screen.getByText(/Loisirs/i)).toBeInTheDocument();
});
