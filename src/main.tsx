import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyUseOptimisticPage } from './02.hooks/09.useOptimistic/MyUseOptimisticPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyUseOptimisticPage/>
    </div>
  </StrictMode>,
)
