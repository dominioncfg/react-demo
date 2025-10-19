import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { MyReactQueryApp } from './05.reactQuery/MyReactQueryApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyReactQueryApp />
  </StrictMode>
);
