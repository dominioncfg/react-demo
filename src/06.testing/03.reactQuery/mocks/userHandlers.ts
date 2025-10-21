import { http, HttpResponse } from 'msw';
import type { User } from '../types';

export const User1: User = {
  id: 'c37c1f6a-f259-448d-9546-860535cb6e1f',
  fullName: 'Perico Perez2',
  age: 18,
};

export const userHandlers = [
  http.get<never, never, User[]>('https://localhost:7227/api/Users', () => {
    const json: User[] = [User1];
    return HttpResponse.json(json);
  }),
  http.post('https://localhost:7227/api/Users', async ({ request }) => {
    const data = await request.formData();
    const fullName = data.get('fullName');
    const age = data.get('age');

    if (!fullName) {
      return new HttpResponse('Missing Full Name', { status: 400 });
    }

    if (!age) {
      return new HttpResponse('Missing age', { status: 400 });
    }
  }),
];
