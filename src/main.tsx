import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyUseEffectPage } from './04.useEffect/MyUseEffectPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyUseEffectPage/>
    </div>
  </StrictMode>,
)
