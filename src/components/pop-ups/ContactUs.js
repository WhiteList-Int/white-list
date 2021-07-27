import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import ReactDom  from 'react-dom';

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
            <form className="contact-us-container">
                    <h2 className="contact-us-title">Customer Support</h2>
                
                <div className="contact-us-fill-box">
                    <input type="text" id="fname" className="contact-us-input-field" placeholder="Full Name"/>
                    <input type="text" id="email" className="contact-us-input-field" placeholder="Email Address"/>
                </div>
               
                <h3 className="contact-us-reason-text">Reason for Contact</h3>
                <div className="contact-us-reason-box">
                    
                <textarea name="" id="input-box" cols="1" rows="3"></textarea>
                </div>
                <div className="contact-us-submit">
                    <span className="contact-us-submit-button">Contact Us</span>
                </div>
              </form>
            </motion.div>
        </>,
        document.getElementById('contact-us-pop-up')
    )
}

