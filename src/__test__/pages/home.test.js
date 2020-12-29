import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';

jest.mock('react-router-dom');

describe('Homepage', () => {
  it('should render the homepage', () => {
    const { getByText, getAllByText, getAllByPlaceholderText } = render(
      <Home />
    );
  });
});
