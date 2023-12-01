import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading state', () => {
  render(<App />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

test('fetches users and renders auto complete', async () => {
  render(<App />);
  const userAutocomplete = await screen.findByTestId('user-autocomplete');
  expect(userAutocomplete).toBeInTheDocument();
});
