import React from 'react'
import { Link } from 'react-router-dom';
import Img11 from '../images/white-list-text.svg';
import Img12 from '../images/copyright.svg';
import "./Footer.css";

function Footer() {
    return (
        <div className = "footer">
            <div className = "footer-container">
                <div className="footer-head">
                    <div className="footer-head-left">
                        <Link to="/about-us" className='left-links'>About WhiteList </Link>
                        <Link to="/contact-us" className='left-links'>Contact Us</Link>
                    </div>
                    <div className="footer-head-right">
                        <Link to="/terms-of-service" className='right-links'>Terms of Service</Link>
                        <Link to="/privacy-policy" className='right-links'>Privacy Policy</Link>
                    </div>
                </div>
                <div className="footer-tail">
                    <img src = {Img11} className="footer-title-text" alt= "title-black"/>
                    <img src = {Img12} className="footer-copyright-text" alt= "title-black"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
