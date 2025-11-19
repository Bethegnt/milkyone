import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SupabaseProvider } from './providers/SupabaseProvider';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SupabaseProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SupabaseProvider>
    </React.StrictMode>,
)
