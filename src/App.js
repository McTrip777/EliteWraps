import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import NotFound from './components/NotFound'
import UnderProduction from './components/UnderProduction'
import "./App.css"
import UseRedirectToHttps from './components/UseRedirectToHttps'
// import { FormspreeProvider } from '@formspree/react';


const App = () => {
  
  UseRedirectToHttps();

  return (
    <div className="container">
      <Navbar />
      {/* <UnderProduction/> */}
      <Routes className="routes">
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App