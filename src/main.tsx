import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyUseStatePage } from './03.useState/MyUseStatePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyUseStatePage/>
    </div>
  </StrictMode>,
)
