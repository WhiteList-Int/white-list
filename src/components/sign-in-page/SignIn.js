import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { NavLink, useHistory } from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import { useAuth } from '../firebase/AuthContext'
import './SignIn.css';
import './SignUp.css';

const SignIn = ({open, onClose, redirect, onRedirectToUp, onRedirectToIn}) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSignUpSubmit() {
        //e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)

    }

    async function handleSignInSubmit() {
        //e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to login')
        }
        setLoading(false)

    }

if(!open) return null;

if(redirect) {
    //Shows SignUp        
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
                    <form className="sign-in-container">
                        <div className="sign-in-title">
                            <h1>Signup</h1>
                        </div>
                        <div className="fill-boxes">
                            <input className="" type="text" placeholder="Username" required/>
                            <input className="" type="text" placeholder="Email Address" required ref={emailRef}/>
                            <input className="" type="password" placeholder="************" required ref={passwordRef}/>
                        </div>
                        <div className="sign-in-buttons">
                            <NavLink to="/" className='sign-in-link' onClick={() => {handleSignUpSubmit()}}>Sign-in</NavLink>
                            <img src={gsign} alt='gsign'/>
                        </div>
                        <div className="sign-in-footer">
                            <NavLink to="/" className='sign-up-link' onClick={onRedirectToIn}>Already have an account?</NavLink>
                        </div>
                    </form>
                </motion.div>
            </>,
            document.getElementById('sign-in-pop-up')
        )

        // return ReactDom.createPortal(
        //     <> 
        //         {document.body.setAttribute('style','overflow:hidden;')}
        //         <motion.div
        //             className="sign-up"
        //             initial="fadeOut" 
        //             animate="fadeIn" 
        //             exit="fadeOut"
        //             variants={variants}
        //             transition={transitions.tweenEaseInFaster}
        //         >
        //             <div className='exit-zone' onClick={onClose}/>
        //             <form className="sign-up-container">
        //                 <div className="sign-up-title">
        //                     <h1 className="sign-up">Login</h1>
        //                 </div>
        //                 <div className="create-fill-box">
        //                 <input type="text" className="sign-up-input" placeholder="First Name"/>
        //                     <input type="text" className="sign-up-input" placeholder="Last Name"/>
        //                     <input type="text" className="sign-up-input" placeholder="Email Address"/>
        //                     <input type="text" className="sign-up-input" placeholder="Password"/>
        //                 </div>
        //                 <div className="create-account">
        //                     <NavLink to="/" className='create-account-button'
        //                         //hidden={isLoadin}
        //                         //onClick={onSubmitUp}>Create Account
        //                         >Create Account
        //                     </NavLink>
        //                     <img src={gsign} alt='gsign'/>
        //                 </div>
        //                 <div className="already-member">
        //                 <p className="sign-up">Already a member? 
        //                     <NavLink to='/' className="login-link" onClick={onRedirectToIn}>Login</NavLink>
        //                 </p>
        //                 </div>
        //             </form>
        //         </motion.div>
        //     </>,
        //     document.getElementById('sign-up-pop-up')
        // )
    }
    
    if(open) {
        //Shows Login
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
                            <input className="" type="text" value="Username" required ref={emailRef}/>
                            <input className="" type="password" value="************" required ref={passwordRef}/>
                        </div>
                        <div className="sign-in-buttons">
                            <NavLink to="/" className='sign-in-link'onClick={() => {handleSignInSubmit()}}>Sign-in</NavLink>
                            {/* <img src={gsign} alt='gsign'/> */}
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
export default SignIn;