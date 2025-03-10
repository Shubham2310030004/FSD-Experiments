import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exp5 from './components/Exp5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exp5 />
  </StrictMode>,
)
