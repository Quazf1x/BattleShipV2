import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import './assets/styles/header.css'
import './assets/styles/gameScreen.css'
import './assets/styles/startEndScreen.css'
import './assets/styles/mapEditScreen.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
