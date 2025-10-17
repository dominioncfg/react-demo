import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { MyUseMemoPage } from './08.useMemo/MyUseMemoPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
        <MyUseMemoPage/>
    </div>
  </StrictMode>,
)
