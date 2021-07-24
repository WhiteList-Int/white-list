import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Img11 from '../images/white-list-text-black.svg';
import Img12 from '../images/copyright-black.svg';
import "./Footer.css";
import ContactUs from '../pop-ups/ContactUs';

const Footer = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const showScroll = () => {
        document.body.setAttribute('style', 'overflow-y:scroll;overflow-x:hidden;');
    }

    return (
        <div className = "footer">
            <div className = "footer-container">
                <div className="footer-head">
                    <div className="footer-head-left">
                        <div className="llink-containers">
                            <NavLink to="/about-us" className='left-links'>About WhiteList </NavLink>
                        </div>
                        <div className="llink-containers">
                            <span className='left-links' onClick={() => setIsOpen(true)}>Contact Us</span>
                            <ContactUs open={isOpen} onClose={()=> {setIsOpen(false);showScroll();}}> </ContactUs>
                        </div>
                    </div>
                    <div className="footer-head-right">
                        <div className="rlink-containers">
                            <NavLink to="/terms-of-service" className='right-links'>Terms of Service</NavLink>
                        </div>
                        <div className="rlink-containers">
                            <NavLink to="/privacy-policy" className='right-links'>Privacy Policy</NavLink>
                        </div>
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
