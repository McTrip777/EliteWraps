import React from 'react'
// import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import "../styles/home.css"
import mustang from '../images/mustangWrap.jpeg'

const Home = () => {
    return (
        <div className="homeContainer">
            <header className="head">
                <img src={mustang} alt="ford mustang wrap" />
                <h2 className="headTitle">Elite Wraps</h2>
                <Link to="/contact" className="titleButton" >Get a Quote</Link>
            </header>
            <section className="about">
                <h4 className="aboutEW">About Us</h4>
                <p className="aboutText">Here at Elite Wraps, we provide large 
                format prints for vinyl wraps of all kinds. Wraps can serve multiple 
                purposes. It can be used to advertise and brand your business, attracting 
                more customers, or simply to please the eye of the viewer. Our team can 
                accomplish any task you desire in a wrap as we provide the graphics, 
                fabrication, and installation for wraps of all kinds. We also provide color 
                wraps of your choice for your vehicle. We do everything in-house and bring 
                decades of experience to every job.</p>
            </section>

        </div>
    )
}

export default Home