import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/footer.css"

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footer">
                <div className="foo footerLinks">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="foo footerContact">
                    <h4>Contact Us</h4>
                    <a className="number" href="tel:+12086177722">(208) 617-7722</a>
                    <a className="email" href="mailto:thomascmeyers40@gmail.com">ThomasCMeyers40@gmail.com</a>
                    <div className="socials">
                        {/* <a href="https://www.facebook.com/twrapsofboise" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="https://www.instagram.com/twrapsofboise/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a> */}
                        {/* <a to="/twitter" target="_blank"><i className="fab fa-twitter fa-2x"></i></a> */}
                    </div>
                    {/* <Link className="RequestAQuote" to="/contact">REQUEST A QUOTE</Link> */}
                </div>
                <div className="foo footerAbout">
                    <h4>Elite Wraps</h4>
                    <p>Our goal is to provide you with excellent service and a long lasting and high quality wrap at an affordable price</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2022 Jacob McFaul</p>
            </div>
        </div>
    )
}

export default Footer