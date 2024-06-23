import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
