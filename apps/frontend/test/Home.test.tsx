import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

it('Should render nextjs', () => {
  render(<Home />);
  expect(screen.getByText('Next.js!')).toBeInTheDocument();
});
