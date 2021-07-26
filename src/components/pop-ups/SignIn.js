import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';


export default function SignIn({open, redirect, onClose, onRedirect}) {

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
                    <div className="sign-in-container-inner">
                        <div hidden={redirect} id="toggleLoginTitle" className="sign-in-title">
                            <h1>LOG IN</h1>
                        </div>
                        <div hidden={!redirect} id="toggleSignUpTitle" className="sign-in-title">
                            <h1>SIGN UP</h1>
                        </div>
                        <div className="sign-in-fill-boxes">
                            <input hidden={!redirect} id="toggleUserNameField" className="" type="text" placeholder="Username" required/>
                            <input className="" type="text" placeholder="Email" required/>
                            <input className="" type="password" placeholder="************" required/>
                        </div>
                        <div className="sign-in-buttons">
                            <span className='sign-in-link'>Sign-in</span>
                            <img src={gsign} alt='gsign' className='sign-in-google-link'/>
                        </div>
                        <div hidden={redirect} id="toggleSignInFooter" className="sign-in-footer">
                            <span className='sign-up-link'
                            onClick={onRedirect}>
                                Not yet registered?
                            </span>
                        </div>
                        <div hidden={!redirect} id="toggleSignUpFooter" className="sign-in-footer">
                            <span className='sign-up-link'
                            onClick={onRedirect}>
                                Already have an account?
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>,
        document.getElementById('sign-in-pop-up')
    )
}
