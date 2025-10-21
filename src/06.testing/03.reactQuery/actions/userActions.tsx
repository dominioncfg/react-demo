import { usersApiClient } from '../api/apiClient';
import type { CreateUserInput, User } from '../types';

const getUsersAction = async (): Promise<User[]> => {
  return Promise.resolve<User[]>([
    {
      id: 'c37c1f6a-f259-448d-9546-860535cb6e1f',
      fullName: 'Perico Perez',
      age: 18,
    },
  ]);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const users = await usersApiClient.get<User[]>('Users');
  return users.data;
};

const createUserAction = async (newUser: CreateUserInput): Promise<void> => {
  return Promise.resolve();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await usersApiClient.post('Users', newUser);
};

export { getUsersAction, createUserAction };
