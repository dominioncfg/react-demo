import type { UserDetailsResponse, UserListResponse } from './types';

//Simulated fetch function
export const fetchUsers = (limit: number): Promise<UserListResponse[]> => {
  return new Promise<UserListResponse[]>((resolve) => {
    setTimeout(() => {
      const users: UserListResponse[] = [];
      for (let i = 0; i < limit; i++) {
        users.push({ id: (i + 1).toString(), name: `User ${i + 1}` });
      }
      resolve(users);
    }, 2000);
  });
};

export const fetchUserById = (id: string): Promise<UserDetailsResponse> => {
  return new Promise<UserDetailsResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
        description: `This is the user description for user ${id}`,
      });
    }, 2000);
  });
};
