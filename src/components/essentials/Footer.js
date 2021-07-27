import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Img11 from '../images/white-list-text-black.svg';
import Img12 from '../images/copyright-black.svg';
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
                        <div className="footer-container-left">
                            <NavLink to="/about-us" className='footer-container-left-links'>About WhiteList </NavLink>
                        </div>
                        <div className="footer-container-left">
                            <span className='footer-container-left-links' onClick={() => setIsOpen(true)}>Contact Us</span>
                            <ContactUs open={isOpen} onClose={()=> {setIsOpen(false);showScroll();}}> </ContactUs>
                        </div>
                    </div>
                    <div className="footer-head-right">
                        <div className="footer-container-right">
                            <NavLink to="/terms-of-service" className='footer-container-right-links'>Terms of Service</NavLink>
                        </div>
                        <div className="footer-container-right">
                            <NavLink to="/privacy-policy" className='footer-container-right-links'>Privacy Policy</NavLink>
                        </div>
                    </div>
                </div>
                <div className="footer-tail">
                    <img src = {Img11} className="footer-tail-title" alt= "title-black"/>
                    <img src = {Img12} className="footer-tail-copyright" alt= "title-black"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
