import React from 'react'
// import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import "../styles/home.css"
import mustang from '../images/mustangWrap.jpeg'
import Carousel from './Carousel'
import logo from '../images/LogoBlack.png'
import {Helmet} from 'react-helmet'

const Home = () => {
    return (
        <div className="homeContainer">
            <Helmet>
                <title>The best vehicle wrap around, with decades of experice - Elite Wraps</title>
                <meta 
                    name='description'
                    content="Wrapping a vehicle takes a certain skill that we have spent many years perfecting to give you the look that you desire."
                />
            </Helmet>
            <img src={mustang} alt="ford mustang wrap" />
            <header className="head">
                <h2 className="headTitle">Best Vehicle Wraps in Boise</h2>
                {/* <img className='headImg' src={logo} alt="Elite Wraps Logo"/> */}
                <Link to="/contact" className="titleButton" >Get a Quote</Link>
            </header>
            <section className="about text">
                <h4 className="aboutEW title">Why Us?</h4>
                <p className="aboutText content">We are a local, family owned and operated business with decades 
                of joint experience. We can assure you that you will receive nothing but 
                the best experience and quality service. We pride ourselves on honesty and integrity 
                with every job.</p>
            </section>
            <Carousel/>
            <section className='wrapInfo text'>
                <h4 className="q1 title">So why get a wrap?</h4>
                <p className="a1 content">A branded wrap is like a salesman that never quits.
                    <br/>A billboard that can't be missed.
                    <br/>"No Doubt, You Stand Out"
                </p>
            </section>

        </div>
    )
}

export default Home

 