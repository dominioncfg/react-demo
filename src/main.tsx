import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { MyZustandPage } from './09.zustand/MyZustandPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyZustandPage />
  </StrictMode>
);
