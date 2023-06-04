import { render, screen } from '@testing-library/react';
import App from './App';

test('отображается компонент Header', () => {
  render(<Header />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});