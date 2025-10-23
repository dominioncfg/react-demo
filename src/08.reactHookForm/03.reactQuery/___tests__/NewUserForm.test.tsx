import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NewUserForm } from '../NewUserForm';
import userEvent from '@testing-library/user-event';

describe('New User Form Tests', () => {
  it('should render the form', () => {
    renderWithProvider();

    const fullNameInput = screen.getByLabelText('Full Name');
    const ageInput = screen.getByLabelText('Age');
    const submitButton = screen.getByText('Create User');

    expect(fullNameInput).toBeVisible();
    expect(ageInput).toBeVisible();
    expect(submitButton).toBeVisible();
  });

  it('should be able to type on inputs', async () => {
    const { user } = renderWithProvider();

    const fullNameInput = screen.getByLabelText('Full Name');
    const ageInput = screen.getByLabelText('Age');

    await user.type(fullNameInput, 'Hola');
    await user.type(ageInput, '18');
    expect(fullNameInput).toHaveValue('Hola');
    expect(ageInput).toHaveValue(18);
  });

  it('creates the user when the form is submitted', async () => {
    renderWithProvider();

    const fullNameInput = screen.getByLabelText('Full Name');
    const ageInput = screen.getByLabelText('Age');
    const submitButton = screen.getByText('Create User');

    await userEvent.type(fullNameInput, 'Hola');
    await userEvent.type(ageInput, '18');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(fullNameInput).toHaveValue('');
      expect(ageInput).toHaveValue(0);
    });
  });

  it('does nothing when the name is empty', async () => {
    renderWithProvider();

    const fullNameInput = screen.getByLabelText('Full Name');
    const ageInput = screen.getByLabelText('Age');
    const submitButton = screen.getByText('Create User');

    await userEvent.type(ageInput, '1');
    await userEvent.click(submitButton);

    const errorElement = screen.getByText('Name is required');

    expect(errorElement).toBeVisible();
    expect(fullNameInput).toHaveValue('');
    expect(ageInput).toHaveValue(1);
  });

  it('does nothing when the age is negative', async () => {
    renderWithProvider();

    const fullNameInput = screen.getByLabelText('Full Name');
    const ageInput = screen.getByLabelText('Age');
    const submitButton = screen.getByText('Create User');

    await userEvent.type(fullNameInput, 'Hola');
    fireEvent.input(ageInput, { target: { value: '-1' } });
    await userEvent.click(submitButton);

    const errorElement = screen.getByText('Invalid Age');

    expect(errorElement).toBeVisible();
    expect(fullNameInput).toHaveValue('Hola');
    expect(ageInput).toHaveValue(-1);
  });

  it('does nothing when the age is too big', async () => {
    renderWithProvider();

    const fullNameInput = screen.getByLabelText('Full Name');
    const ageInput = screen.getByLabelText('Age');
    const submitButton = screen.getByText('Create User');

    await userEvent.type(fullNameInput, 'Hola');
    await userEvent.type(ageInput, '300');
    await userEvent.click(submitButton);

    const errorElement = screen.getByText('Invalid Age');

    expect(errorElement).toBeVisible();
    expect(fullNameInput).toHaveValue('Hola');
    expect(ageInput).toHaveValue(300);
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
  return {
    user: userEvent.setup(),
    ...render(
      <QueryClientProvider client={queryClient}>
        <NewUserForm />
      </QueryClientProvider>
    ),
  };
};
