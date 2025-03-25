import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Жаңа тапсырма қосу', () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Жаңа тапсырма...");
  const button = screen.getByText("Қосу")

  fireEvent.change(input, {target: {value: " Реакт үйрену"}})
  fireEvent.click(button)

  expect(screen.getByText("Реакт үйрену")).toBeInTheDocument();
});
