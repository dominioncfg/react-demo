import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyUseRefPage } from './06.useRef/MyUseRefPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyUseRefPage/>
    </div>
  </StrictMode>,
)
