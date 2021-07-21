import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { NavLink } from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import './SignIn.css';


export default function SignIn({open, redirect, onClose, onRedirect}) {
    const pathName = useRef(window.location.pathname);

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
                    <div className="sign-in-inner-container">
                        <div hidden={redirect} id="toggleLoginTitle" className="sign-in-title">
                            <h1>LOG IN</h1>
                        </div>
                        <div hidden={!redirect} id="toggleSignUpTitle" className="sign-in-title">
                            <h1>SIGN UP</h1>
                        </div>
                        <div className="fill-boxes">
                            <input hidden={!redirect} id="toggleUserNameField" className="" type="text" placeholder="Username" required/>
                            <input className="" type="text" placeholder="Email" required/>
                            <input className="" type="password" placeholder="************" required/>
                        </div>
                        <div className="sign-in-buttons">
                            <NavLink to={pathName.current} className='sign-in-link'>Sign-in</NavLink>
                            <img src={gsign} alt='gsign' className='google-link'/>
                        </div>
                        <div hidden={redirect} id="toggleSignInFooter" className="sign-in-footer">
                            <NavLink to={pathName.current} className='sign-up-link'
                            onClick={onRedirect}>
                                Not yet registered?
                            </NavLink>
                        </div>
                        <div hidden={!redirect} id="toggleSignUpFooter" className="sign-in-footer">
                            <NavLink to={pathName.current} className='sign-up-link'
                            onClick={onRedirect}>
                                Already have an account?
                            </NavLink>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>,
        document.getElementById('sign-in-pop-up')
    )
}
