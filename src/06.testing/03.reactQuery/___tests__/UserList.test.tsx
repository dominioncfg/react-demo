import { render, screen, waitFor } from '@testing-library/react';
import { UserList } from '../UserList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { User1 } from '../mocks/userHandlers';

describe('User List Tests', () => {
  it('should render loading screen', () => {
    renderWithProvider();

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeVisible();
  });
});

it('should render count and header when users are loaded', async () => {
  const expectedUser = {
    id: 'c37c1f6a-f259-448d-9546-860535cb6e1f',
    fullName: 'Perico Perez',
    age: 18,
  };
  const users = [expectedUser];
  renderWithProvider();

  await waitFor(() => {
    const countText = screen.getByText(`Your Users (${users.length})`);
    expect(countText).toBeVisible();
  });
});

it('should render user table headers', async () => {
  renderWithProvider();

  await waitFor(() => {
    const idLabel = screen.getByText('Id');
    expect(idLabel).toBeVisible();
    const fullNameLabel = screen.getByText('Full Name');
    expect(fullNameLabel).toBeVisible();
    const ageLabel = screen.getByText('Age');
    expect(ageLabel).toBeVisible();
  });
});

it('should render user', async () => {
  const expectedUser = User1;

  renderWithProvider();

  await waitFor(() => {
    const idLabel = screen.getByText(expectedUser.id);
    expect(idLabel).toBeVisible();
    const fullNameLabel = screen.getByText(expectedUser.fullName);
    expect(fullNameLabel).toBeVisible();
    const ageLabel = screen.getByText(expectedUser.age);
    expect(ageLabel).toBeVisible();
  });
});

const renderWithProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return render(
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
};
