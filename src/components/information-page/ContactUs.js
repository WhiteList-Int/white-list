import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { NavLink } from 'react-router-dom';
import ReactDom  from 'react-dom';
import './Contact-us.css'

export default function ContactUs({open, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            {document.body.setAttribute('style','overflow:hidden;')}
            <motion.div 
                className="contact-us"
                initial="fadeOut" 
                animate="fadeIn" 
                exit="fadeOut"
                variants={variants}
                transition={transitions.tweenEaseOutFast}
            >
                <div className="exit-zone" onClick={onClose}></div>
                <div className="contact-us-container">
                    <div className="contact-title">
                        <h1>Customer Support</h1>
                    </div>
                    <div className="name-box">
                        <h3>Name</h3>
                    </div>
                    <div className="email-box">
                        <h3>Email Address</h3>
                    </div>
                    <div className="reason-text">
                        <h3>Reason for Contact</h3>
                    </div>
                    <div className="reason-box">
                        <textarea name="" id="input-1" cols="1" rows="3"></textarea>
                        
                    </div>
                    <div className="contact-submit">
                        <NavLink to='/' className="contact-submit-button">Contact Us</NavLink>
                    </div>
                </div>
            </motion.div>
        </>,
        document.getElementById('contact-us-pop-up')
    )
}

