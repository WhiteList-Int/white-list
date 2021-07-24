import React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { NavLink } from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import { useAuth } from '../firebase/AuthContext'


export default function SignIn({open, redirect, onClose, onRedirect}) {
    const pathName = useRef(window.location.pathname);

    const { sendSignInLinkToEmail } = useAuth();
    const [loading, setLoading] = useState(false);
    const emailRef = useRef(null);

    async function handleSubmitLink(e) {
        e.preventDefault()

        try{
            setLoading(true)
            await sendSignInLinkToEmail(emailRef.current.value)
        } catch {
            console.log("Error: Failed to create an account!")
        }
        setLoading(false)
    }

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
                            <input ref={emailRef} className="" type="text" placeholder="Email" required/>
                            <input className="" type="password" placeholder="************" required/>
                        </div>
                        <div className="sign-in-buttons" aria-disabled={loading}>
                            <NavLink to={pathName.current} className='sign-in-link'
                            onClick={handleSubmitLink}>
                                Sign-in
                            </NavLink>
                            <img src={gsign} alt='gsign' className='sign-in-google-link'/>
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
