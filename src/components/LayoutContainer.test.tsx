import React from 'react';
import { render, screen } from '../../test/test-utils';
import userEvent from '@testing-library/user-event';
import { Router } from '@reach/router';
import '@testing-library/jest-dom';

import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.

  const { history, container } = render(<LayoutContainer />);
  expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Go to about/i));
  expect(history.location.pathname).toBe("/about");

  

});
