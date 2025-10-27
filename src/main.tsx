import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { MyTailwindPage } from './10.tailwind/MyTailwindPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyTailwindPage />
  </StrictMode>
);
