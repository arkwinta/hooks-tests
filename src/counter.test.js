import { render, screen } from '@testing-library/react';
import { Counter } from './counter';

test('renders count text', () => {
    render(<Counter />);
    const countElement = screen.getByText(/the count/i);
    expect(countElement).toBeInTheDocument();
});

test('increments counter', () => {
    render(<Counter />);
    const incrementElement = screen.getByText(/Click me/i);
    incrementElement.click();
    const countElement = screen.getByText(/the count/i);
    expect(countElement).toHaveTextContent(/1/i)
});

test('resets counter', () => {
    render(<Counter />);
    const incrementElement = screen.getByText(/Click me/i);
    incrementElement.click();
    const resetButton = screen.getByText(/reset/i);
    resetButton.click();
    const countElement = screen.getByText(/the count/i);
    expect(countElement).toHaveTextContent(/0/i)
});