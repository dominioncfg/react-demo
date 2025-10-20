import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { MyProductDetailPage } from '../MyProductDetailPage';
import { screen } from '@testing-library/react';

describe('Product Page Tests', () => {
  it('should render product page headers', () => {
    renderWithRouter(<MyProductDetailPage />, ['/products/42']);
    expect(screen.getByText('Product Overview')).toBeVisible();
    expect(
      screen.getByText('Welcome to the product overview page.')
    ).toBeVisible();
  });

  it('should render product id', () => {
    renderWithRouter(<MyProductDetailPage />, ['/products/42']);
    expect(screen.getByText('Product ID: 42')).toBeVisible();
  });

  it('go home button is shown', async () => {
    renderWithRouter(<MyProductDetailPage />, ['/products/42']);
    const button = screen.getByText('Go Home');
    expect(button).toBeVisible();
  });
});

const renderWithRouter = (
  component: React.ReactElement,
  initialEntries?: string[]
) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/products/:productId" element={component} />
      </Routes>
    </MemoryRouter>
  );
};
