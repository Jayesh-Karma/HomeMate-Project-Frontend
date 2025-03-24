import { createRoot } from 'react-dom/client'
import React from 'react';

import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    <>

    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>  
    </>
)
 