import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactDom  from 'react-dom';
import './Contact-us.css'

export default function ContactUs({open, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            {document.body.setAttribute('style','overflow:hidden;')}
        <div className="contact-us">
            <div className="exit-zone" onClick={onClose}></div>
            <form className="contact-us-container">
                <div className="contact-title">
                    <h2>Customer Support</h2>
                </div>
                <div className="fill-box">
                    <input type="text" id="fname" className="input-field" placeholder="Full Name"/>
                    <input type="text" id="email" className="input-field" placeholder="Email Address"/>
                </div>
                <div className="reason-text">
                    <h3>Reason for Contact</h3>
                </div>
                <div className="reason-box">
                    <textarea name="" id="input-box" cols="1" rows="3"></textarea>
                </div>
                <div className="contact-submit">
                    <NavLink to='/' className="contact-submit-button">Contact Us</NavLink>
                </div>
            </form>
         </div>
        </>,
        document.getElementById('contact-us-pop-up')
    )
}

