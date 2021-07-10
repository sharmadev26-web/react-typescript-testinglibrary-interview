import React from 'react';
import { render } from '../../test/test-utils';
import '@testing-library/jest-dom';
import { unmountComponentAtNode } from "react-dom";

import Home from './Home';



it('renders <Home /> page', () => {
  // You should be able to show that you can verify Home rendered correctly

  const { getByText } = render(<Home />);
  expect(getByText(/Go to about/i)).toBeInTheDocument();


});
