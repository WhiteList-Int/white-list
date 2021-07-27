import React, { useState } from 'react';
import Img from '../images/white-list-text-black.svg';
import Img2 from '../images/white-list-tagline-black.svg';
import Img3 from '../images/startupPage.svg';
import SignIn from '../pop-ups/SignIn';

const Navbar = () => {

    const [startButton, setStartButton] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isRedirect, setIsRedirect] = useState(false);
    
    const showScroll = () => {
        document.body.setAttribute('style','overflow-y:scroll;');
    }

    const changeNavbar = () => {
        if(window.scrollY >= 50){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    }

    const changeButton = () => {
        if(window.scrollY >= 50){
            setStartButton(true);
        } else{
            setStartButton(false);
        }
    }

    window.addEventListener('scroll', changeNavbar);
    window.addEventListener('scroll', changeButton);

    return(
        <>
        <nav className = {navbar ? 'navbar-active' : 'navbar'}>
            <div className="navbar-wrapper">
                <div className = {navbar ? 'navbar-container-active' : 'navbar-container'}>
                    <img className = {navbar ? 'navbar-header-img-active' : 'navbar-header-img'} src = {Img} alt="WhiteList"></img>
                    <img className = {navbar ? 'navbar-tagline-active' : 'navbar-tagline'} src = {Img2} alt="WhiteList"></img>
                    <div className = {startButton ? 'navbar-btn-top-container' : 'navbar-btn-bot-container'}>
                            <span
                                className = {startButton ? 'navbar-btn-top' : 'navbar-btn-bot'} 
                                onClick={() => {setIsOpen(true); setIsRedirect(false)}}
                            >
                                LOG-IN
                            </span>
                            <SignIn open={isOpen} 
                                redirect={isRedirect}
                                onRedirect={() => {setIsRedirect(!isRedirect)}}
                                onClose={() => {setIsOpen(false);showScroll();}}
                                directTo="/rental-dashboard/all"
                            />
                    </div>
                </div> 
            </div>
            <img className = "navbar-start-up-bg-icon" src = {Img3} alt="WhiteList"/>
        </nav>
        </>
    )
}

export default Navbar;