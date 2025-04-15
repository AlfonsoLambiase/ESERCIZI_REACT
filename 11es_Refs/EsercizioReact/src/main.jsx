import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FocusableInput from './FocusableInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FocusableInput/>
  </StrictMode>
)
