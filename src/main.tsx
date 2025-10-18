import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyRoutedApp } from './03.reactRouter/MyRouterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <MyRoutedApp/>
  </StrictMode>,
)
