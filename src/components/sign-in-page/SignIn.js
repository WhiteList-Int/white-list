import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { NavLink } from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import './SignIn.css';


export default function SignIn({open, onClose}) {
    
    if(!open) return null;

    return ReactDom.createPortal(
        <> 
            {document.body.setAttribute('style','overflow:hidden;')}
            <motion.div
                className="sign-in"
                initial="fadeOut" 
                animate="fadeIn" 
                exit="fadeOut"
                variants={variants}
                transition={transitions.tweenEaseInFaster}
            >
                <div className='exit-zone' onClick={onClose}/>
                <div className="sign-in-container">
                    <div className="sign-in-title">
                        <h1>Login</h1>
                    </div>
                    <div className="fill-boxes">
                        <input className="" type="text" value="Username" required/>
                        <input className="" type="password" value="************" required/>
                    </div>
                    <div className="sign-in-buttons">
                        <NavLink to="/" className='sign-in-link'>Sign-in</NavLink>
                        <img src={gsign} alt='gsign'/>
                    </div>
                    <div className="sign-in-footer">
                        <NavLink to="/sign-up" className='sign-up-link' >Not yet registered?</NavLink>
                        
                    </div>
                </div>
            </motion.div>
        </>,
        document.getElementById('sign-in-pop-up')
    )
}
