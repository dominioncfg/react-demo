import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
import { server } from '../src/06.testing/03.reactQuery/mocks/node.js';
beforeAll(() => server.listen({
  onUnhandledRequest: 'error',
}));
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());
