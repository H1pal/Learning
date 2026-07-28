// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import MyApp from './02_App'
import MyApp from './03_App'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <MyApp />
  // </StrictMode>,
)
