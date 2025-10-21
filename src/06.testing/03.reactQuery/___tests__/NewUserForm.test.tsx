import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { NewUserForm } from '../NewUserForm';
import userEvent from '@testing-library/user-event';
import { server } from '../mocks/node';
import { http, HttpResponse } from 'msw';
import { error } from 'console';

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
      expect(ageInput).toHaveValue(null);
    });
  });

  it('does nothing when the form has invalid state', async () => {
    renderWithProvider();

    const fullNameInput = screen.getByLabelText('Full Name');
    const ageInput = screen.getByLabelText('Age');
    const submitButton = screen.getByText('Create User');

    await userEvent.type(ageInput, '18');
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(fullNameInput).toHaveValue('');
      expect(ageInput).toHaveValue(18);
    });
  });
});

//Does not work as expected
it('creates the user when the form is submitted with the right values', async () => {
  server.use(
    http.post('https://localhost:7227/api/Users', async ({ request }) => {
      const data = await request.formData();
      const fullName = data.get('fullName');
      const age = data.get('age');
      if (fullName !== 'Full Name') {
        throw error('SAdsads');
        return new HttpResponse('Missing Full Name', { status: 400 });
      }

      if (age !== '18') {
        return new HttpResponse('Missing age', { status: 400 });
      }
    })
  );
  renderWithProvider();

  const fullNameInput = screen.getByLabelText('Full Name');
  const ageInput = screen.getByLabelText('Age');
  const submitButton = screen.getByText('Create User');

  await userEvent.type(fullNameInput, 'Hola');
  await userEvent.type(ageInput, '1');
  await userEvent.click(submitButton);

  await waitFor(() => {
    expect(fullNameInput).toHaveValue('');
    expect(ageInput).toHaveValue(null);
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
