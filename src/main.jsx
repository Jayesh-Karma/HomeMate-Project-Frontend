import { createRoot } from 'react-dom/client'
import React from 'react';

import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
// import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <>

    <BrowserRouter>
    <App />
    {/* <ToastContainer /> */}
    </BrowserRouter>  
    </>
)
 