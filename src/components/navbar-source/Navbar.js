import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../images/white-list-text.svg';
import Img2 from '../images/white-list-tagline.svg';
import SignIn from '../sign-in-page/SignIn';
import "./Navbar.css";
import "./Button.css";

const Navbar = () => {

    const [startButton, setStartButton] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    // const { signup } = useAuth()
    // const { login } = useAuth()
    // const [error, setError] = useState('')
    // const [loading, setLoading] = useState(false)
    // const history = useHistory()
    
    // async function handleSignUpSubmit() {
    //     //e.preventDefault()

    //     if(passwordRef.current.value !== passwordConfirmRef.current.value) {
    //         return setError('Passwords do not match')
    //     }

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await signup(emailRef.current.value, passwordRef.current.value)
    //         history.push("/")
    //     } catch {
    //         setError('Failed to create an account')
    //     }
    //     setLoading(false)

    // }

    // async function handleSignInSubmit() {
    //     //e.preventDefault()

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await login(emailRef.current.value, passwordRef.current.value)
    //         history.push("/")
    //     } catch {
    //         setError('Failed to login')
    //     }
    //     setLoading(false)

    // }

    
    const showScroll = () => {
        document.body.setAttribute('style','overflow-y:scroll;');
    }

    const changeNavbar = () => {
        if(window.scrollY >= 100){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    }

    const changeButton = () => {
        if(window.scrollY >= 100){
            setStartButton(true);
        } else{
            setStartButton(false);
        }
    }

    window.addEventListener('scroll', changeNavbar);
    window.addEventListener('scroll', changeButton);

    return(
        <nav className = {navbar ? 'navbar-active' : 'navbar'}>
            <div className = {navbar ? 'container-active' : 'container'}>
                <img className = {navbar ? 'header-img-active' : 'header-img'} src = {Img} alt="WhiteList"></img>
                <img className = {navbar ? 'tagline-active' : 'tagline'} src = {Img2} alt="WhiteList"></img>
                <div className = {startButton ? 'btn-top-container' : 'btn-bot-container'}>
                    <NavLink to='/' className = {startButton ? 'btn-top' : 'btn-bot'} onClick={() => setIsSignInOpen(true)}>SIGN-IN</NavLink>
                    <SignIn open={isSignInOpen}
                    redirect={isSignUpOpen}
                    onClose={() => {setIsSignInOpen(false);showScroll();}}
                    onRedirectToUp={() => {setIsSignUpOpen(true)}}
                    onRedirectToIn={() => {setIsSignInOpen(true);setIsSignUpOpen(false)}}
                    />
                </div>
            </div> 
        </nav>
    )
}

export default Navbar;