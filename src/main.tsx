import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyCounterPage } from './02.customHook/MyCounterPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyCounterPage/>
    </div>
  </StrictMode>,
)
