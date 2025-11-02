import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import './index.css';
import './App.css';
import { MyShadCnPage } from './11.shadcn/MyShadCnPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyShadCnPage />
  </StrictMode>
);
