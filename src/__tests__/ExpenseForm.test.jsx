import { render, screen, fireEvent } from '@testing-library/react';
import ExpenseForm from '../components/ExpenseForm';
import { vi } from 'vitest';

test('remplit et soumet le formulaire', () => {
  const mockAdd = vi.fn(); // دالة وهمية باش نراقبو واش تسدات

  render(<ExpenseForm onAdd={mockAdd} />);

  // 🧪 تعمير الخانات
  fireEvent.change(screen.getByLabelText(/Montant/i), {
    target: { value: '100' },
  });

  fireEvent.change(screen.getByLabelText(/Catégorie/i), {
    target: { value: 'Alimentation' },
  });

  fireEvent.change(screen.getByLabelText(/Date/i), {
    target: { value: '2023-12-01' },
  });

  // ✅ استعمال getByRole باش ناخدو الزر فقط
  fireEvent.click(screen.getByRole('button', { name: /Ajouter/i }));

  // ✅ تحقق واش onAdd تندات بالمعلومات الصحيحة
  expect(mockAdd).toHaveBeenCalledWith({
    amount: 100,
    category: 'Alimentation',
    date: '2023-12-01',
    comment: '', // حيت ما عمرنا خانة التعليق
  });
});
