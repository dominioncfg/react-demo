import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { MySimpleRoutedApp } from './06.testing/02.routerComponent/MySimpleRouted';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MySimpleRoutedApp />
  </StrictMode>
);
