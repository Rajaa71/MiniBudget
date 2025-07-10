// __tests__/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('affiche le titre de l\'application', () => {
  render(<App />);
  expect(screen.getByText(/MiniBudget/i)).toBeInTheDocument();
});
