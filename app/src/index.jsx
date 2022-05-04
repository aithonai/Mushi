import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './components/Nav'

ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
)
