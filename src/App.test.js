import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Жаңа тапсырма қосу', () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Жаңа тапсырма...");
  const button = screen.getByText("Қосу");

  fireEvent.change(input, {target: {value: " Реакт үйрену"}});
  fireEvent.click(button);

  expect(screen.getByText("Реакт үйрену")).toBeInTheDocument();
});

test('Тапсырманы белгілеу', () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Жаңа тапсырма...");
  const button = screen.getByText("Қосу")

  fireEvent.change(input, {target: {value: " Реакт үйрену"}});
  fireEvent.click(button);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked();
});


test("Тапсырманы өшіру", ()=>{
  const input = screen.getByPlaceholderText("Жаңа тапсырма...");
  const button = screen.getByText("Қосу");

  fireEvent.change(input, {target:{value: "JEST тест жазу"}});
  fireEvent.click(button);

  const deleteButton = screen.getByText("Өшіру");
  fireEvent.click(deleteButton);

  expect(screen.queryByText("JEST тест жазу")).not.toBeInTheDocument();
})
