import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../src/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /next\.js!/i });
    expect(heading).toBeInTheDocument();
  });
});
