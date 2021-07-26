import React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { useHistory } from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import { useAuth } from '../FirebaseStuff/AuthContext'


export default function SignIn({open, redirect, onClose, onRedirect}) {
    const pathName = useRef(window.location.pathname);
    const emailRef = useRef()
    const passwordRef = useRef()
    const error = useRef('')
    const loading = useRef()
    const history = useHistory()

    const { signup, login, gLogin } = useAuth()

    async function handleSignUp(email, password) {
        try {
            error.current = '';
            loading.current = true;
            await signup(emailRef.current.value, passwordRef.current.value);
            // history.push("/");
            loading.current = false;
            return true;
        } catch {
            error.current = 'Failed to create an account';
            loading.current = false;
            return false;
        }
        
    }

    async function handleLogin(email, password) {
        try {
            error.current = '';
            loading.current = true;
            await login(emailRef.current.value, passwordRef.current.value);
            // history.push("/");
            loading.current = false;
            return true;
        } catch {
            error.current = 'Failed to create an account';
            loading.current = false;
            return false;
        }
        
    }

    async function handleGoogleLogin() {
        try {
            error.current = '';
            loading.current = true;
            const res = await gLogin();
            console.log(res);
            // history.push("/");
            loading.current = false;
            return true;
        } catch {
            error.current = 'Failed to create an account';
            loading.current = false;
            return false;
        }
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
                        <div  className="sign-in-buttons"> {/*Login*/}
                            <button to={pathName.current} className='sign-in-link' hidden={redirect}
                            onClick={() => {
                                var doNext = handleLogin()
                                if(doNext){
                                    history.push("/rental-dashboard");
                                }
                            }}
                            disabled={loading}>Login</button>
                            <img src={gsign} alt='gsign' className='sign-in-google-link' hidden={redirect}
                            onClick={() => {handleGoogleLogin();}}/>
                        </div>
                        <div className="sign-in-buttons"> {/*Sign Up*/}
                            <button to={pathName.current} className='sign-in-link' hidden={!redirect}
                            onClick={() => {
                                handleSignUp().then(() => {
                                    history.push("/homepage");
                                });
                            }}
                            disabled={loading}>Sign-Up</button>
                            <img src={gsign} alt='gsign' className='sign-in-google-link' hidden={!redirect}
                            onClick={() => {handleGoogleLogin();}}/>
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
