import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Elite_Wraps_Logo1.png'
import '../styles/navbar.css'



function Navbar() {
    const [nav, setNav] = useState("navbar")

    const listenScrollEvent = (event) => {
    if (window.scrollY < 140) {
        return setNav("navbar")
    } else if (window.scrollY > 138) {
        return setNav("navbar2")
    } 
    }

    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className={nav}>
            <Link className="homeLogo" to="/">
                <img src={logo} alt="Elite Wraps Logo"/>
            </Link>
            <a className="navNumber" href="tel:+12086267699">(208) 626-7699</a>
            <div className="navbarRoutes">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar