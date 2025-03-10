import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Exp6 from './components/Exp6.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exp6 />
  </StrictMode>,
)
