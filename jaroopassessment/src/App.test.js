import React from 'react';
import { render } from '@testing-library/react';
import Root from './Components/Root';
import TForm from './Components/TForm'

test('renders a welcome message ', () => {
  const { getByText } = render(<Root />);
  const h3 = getByText('Welcome back');
  expect(h3).toBeInTheDocument();
});

test('it has the correct placeholder values', () => {
  const { getByPlaceholderText } = render(<TForm />);
  const amount = getByPlaceholderText('amount')
  const description = getByPlaceholderText('description')
  expect(amount).toBeInTheDocument();
  expect(description).toBeInTheDocument()
});






