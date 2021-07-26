import React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { NavLink, useHistory } from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import { useAuth } from '../FirebaseStuff/AuthContext'


export default function SignIn({open, redirect, onClose, onRedirect}) {
    const pathName = useRef(window.location.pathname);
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState()
    const history = useHistory()

    const { signup, login } = useAuth()

    async function handleSignUp(email, password) {
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/homepage");
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    async function handleLogin(email, password) {
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/homepage");
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
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
                        <div hidden={error!==true} id="toggleSignUpTitle" className="sign-in-title">
                            <h1>Error!</h1>
                        </div>
                        <div className="sign-in-fill-boxes">
                            <input className="" type="text" placeholder="Email" required ref={emailRef}/>
                            <input className="" type="password" placeholder="************" required ref={passwordRef}/>
                        </div>
                        <div hidden={redirect} className="sign-in-buttons"> {/*Login*/}
                            <button to={pathName.current} className='sign-in-link'
                            onClick={() => {
                                handleLogin();
                            }}
                            disabled={loading}>Login</button>
                            <img src={gsign} alt='gsign' className='sign-in-google-link'/>
                        </div>
                        <div hidden={!redirect} className="sign-in-buttons"> {/*Sign Up*/}
                            <button to={pathName.current} className='sign-in-link'
                            onClick={() => {
                                handleSignUp();
                            }}
                            disabled={loading}>Sign-Up</button>
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
