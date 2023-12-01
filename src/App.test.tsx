import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  test('renders selected user info', async () => {
    render(<App />);

    const userAutocomplete = await screen.findByTestId('user-autocomplete');
    const input = await userAutocomplete.querySelector('input');

    if (!input) {
      throw new Error('input not found');
    }

    expect(input).not.toBeNull();

    userAutocomplete.focus();
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.keyDown(userAutocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(userAutocomplete, { key: 'Enter' });
    
    const userInfo = await screen.findByTestId('user-info');
    expect(userInfo).toBeInTheDocument();
  });

  test('shows error message', async () => {
    const mockError = new Error('mock error');
    jest.clearAllMocks();
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(mockError);

    render(<App />);

    const errorElement = await screen.findByText(/Error: mock error/i);
    expect(errorElement).toBeInTheDocument();
  });

});