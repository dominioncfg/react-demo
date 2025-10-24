import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import { server } from '../src/06.testing/03.reactQuery/mocks/node.js';
vi.mock('zustand');

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);
afterEach(() => {
  localStorage.clear();
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());
