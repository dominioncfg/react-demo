import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyContextWrapperPage } from './05.ContextApi/MyContextWrapperPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyContextWrapperPage/>
    </div>
  </StrictMode>,
)
