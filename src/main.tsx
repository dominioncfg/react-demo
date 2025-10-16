import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyUseReducerPage } from './07.useReducer/MyUseReducerPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyUseReducerPage/>
    </div>
  </StrictMode>,
)
