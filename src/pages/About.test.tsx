import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen} from '../../test/test-utils';
import '@testing-library/jest-dom';

import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  
  const { getByText } = render(<About />);
  expect(getByText(/About Page/i)).toBeInTheDocument();
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  const { getByText } = render(<About />);
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement);
  expect(getByText(/Current Count: 1/i)).toBeInTheDocument();
});
