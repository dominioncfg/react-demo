import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyUseSuspensePage } from './02.hooks/10.useSuspense/MyUseSuspensePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyUseSuspensePage/>
    </div>
  </StrictMode>,
)
