import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MySonnerApp } from './04.sonner/MySonnerApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MySonnerApp />
  </StrictMode>,
)
