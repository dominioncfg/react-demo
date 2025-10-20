import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { screen } from '@testing-library/react';
import { appRouter } from '../../app.router';

describe('Product Page Tests', () => {
  it('should render product with nav headers', () => {
    renderWithRouter();

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeVisible();
    expect(homeLink).toHaveClass('active');

    const dasboardLink = screen.getByText('Dashboard');
    expect(dasboardLink).toBeVisible();
    expect(dasboardLink).not.toHaveClass('active');
    expect(dasboardLink).toHaveAttribute('href', '/dashboard/products/1');
  });
});

const renderWithRouter = (initialEntries?: string[]) => {
  const router = createMemoryRouter(appRouter.routes, {
    initialEntries: initialEntries,
  });

  return render(<RouterProvider router={router} />);
};
