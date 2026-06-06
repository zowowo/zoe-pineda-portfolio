import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log(
  "%cHey, you're inspecting my code! %c\nI like your curiosity. Let's connect: zoepineda47@gmail.com",
  "font-size: 14px; font-weight: bold; color: #4A7C59;",
  "font-size: 12px; color: inherit;"
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
