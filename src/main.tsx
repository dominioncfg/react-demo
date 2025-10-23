import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { MyReactHookPage } from './08.reactHookForm/MyReactHookPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyReactHookPage />
  </StrictMode>
);
