import React, { StrictMode } from 'react'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contactus/Contact.jsx'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import Services from './pages/services/Services.jsx'
import Admin from './pages/admin/Admin.jsx'

const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='services' element={<Services />}/>
    <Route path='admin' element={<Admin />}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
