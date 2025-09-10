import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import ComingSoon from './Components/ComingSoon.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer'
import Table from './Components/Table.jsx'
import App from './App.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/html" element={<Table />} />
          <Route path="/css" element={<ComingSoon />} />
          <Route path="/js" element={<ComingSoon />} />
        </Routes>
      <Footer />
    </BrowserRouter>,
)
