import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js', // assuming the test folder is in the root of our project
  },
} as UserConfig);
