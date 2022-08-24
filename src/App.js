import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Canvas from './components/Canvas'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
// import { FormspreeProvider } from '@formspree/react';
import "./App.css"
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes className="routes">
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App