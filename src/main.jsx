import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import TeaInfo from './TeaInfo.jsx'
import TeaList from './TeaList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <TeaInfo />  */}
    {/* <TeaList/> */}
  </StrictMode>,
)
