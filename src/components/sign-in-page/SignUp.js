import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { NavLink } from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import './SignUp.css';

export default function SignUp({openUp,isLoadin, onSignUpClose, onRedirectToIn, onSubmitUp}) {
    if(!openUp) return null;

    return ReactDom.createPortal(
        <> 
            {document.body.setAttribute('style','overflow:hidden;')}
            <motion.div
                className="sign-up"
                initial="fadeOut" 
                animate="fadeIn" 
                exit="fadeOut"
                variants={variants}
                transition={transitions.tweenEaseInFaster}
            >
                <div className='exit-zone' onClick={onSignUpClose}/>
                <form className="sign-up-container">
                    <div className="sign-up-title">
                        <h1 className="sign-up">Login</h1>
                    </div>
                    <div className="create-fill-box">
                    <input type="text" className="sign-up-input" placeholder="First Name"/>
                        <input type="text" className="sign-up-input" placeholder="Last Name"/>
                        <input type="text" className="sign-up-input" placeholder="Email Address"/>
                        <input type="text" className="sign-up-input" placeholder="Password"/>
                    </div>
                    <div className="create-account">
                        <NavLink to="/" className='create-account-button'
                            hidden={isLoadin}
                            onClick={onSubmitUp}>Create Account
                        </NavLink>
                        <img src={gsign} alt='gsign'/>
                    </div>
                    <div className="already-member">
                    <p className="sign-up">Already a member? 
                        <NavLink to='/' className="login-link" onClick={onRedirectToIn}>Login</NavLink>
                    </p>
                    </div>
                </form>
            </motion.div>
        </>,
        document.getElementById('sign-up-pop-up')
    )
}
