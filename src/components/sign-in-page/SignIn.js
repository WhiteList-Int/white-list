import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { NavLink } from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import { useAuth } from '../firebase/AuthContext'
import './SignIn.css';



const SignIn = ({open, onClose, redirect, onRedirectToUp, onRedirectToIn}) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    // const { signup } = useAuth()
    // const { login } = useAuth()
    const Authent = () => {
        const { signup } = useAuth()
        const { login } = useAuth()
        const { currentUser } = useAuth()
    }

    async function handleSignUpSubmit() {
        //e.preventDefault()

        // if(passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return setError('Passwords do not match')
        // }

        try {
            // setError('')
            // setLoading(true)
            await Authent.signup(emailRef.current.value, passwordRef.current.value)
            //history.push("/")
        } catch {
            //setError('Failed to create an account')
        }
        //setLoading(false)

    }

    async function handleSignInSubmit() {
        //e.preventDefault()

        try {
            //setError('')
            //setLoading(true)
            await Authent.login(emailRef.current.value, passwordRef.current.value)
            //history.push("/")
        } catch {
            //setError('Failed to login')
        }
        //setLoading(false)

    }

    if(!open) return null;

    if(redirect) { //Sign Up
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
                            <h1>Sign Up</h1>
                            {/* <p className="" type="text" value={} required/> */}
                        </div>
                        <div className="fill-boxes">
                            <input className="" type="text" placeholder="Email" required ref={emailRef}/>
                            <input className="" type="password" placeholder="************" required ref={passwordRef}/>
                        </div>
                        <div className="sign-in-buttons">
                            <NavLink to="/" className='sign-in-link' onClick={() => {handleSignUpSubmit()}}>Sign-in</NavLink>
                            <img src={gsign} alt='gsign'/>
                        </div>
                        <div className="sign-in-footer">
                            <NavLink to="/" className='sign-up-link' onClick={onRedirectToIn}>Already have an account?</NavLink>
                        </div>
                    </div>
                </motion.div>
            </>,
            document.getElementById('sign-up-pop-up')
        )
    }

    if(open) { //Login
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
                            <input className="" type="text" placeholder="Email" required ref={emailRef}/>
                            <input className="" type="password" placeholder="************" required ref={passwordRef}/>
                        </div>
                        <div className="sign-in-buttons">
                            <NavLink to="/" className='sign-in-link' onClick={() => {handleSignInSubmit()}}>Sign-in</NavLink>
                            <img src={gsign} alt='gsign'/>
                        </div>
                        <div className="sign-in-footer">
                            <NavLink to="/" className='sign-up-link' onClick={onRedirectToUp}>Not yet registered?</NavLink>
                        </div>
                    </div>
                </motion.div>
            </>,
            document.getElementById('sign-in-pop-up')
        )
    }
}

export default SignIn