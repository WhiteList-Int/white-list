import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../images/white-list-text-black.svg';
import Img2 from '../images/white-list-tagline-black.svg';
import Img3 from '../images/startupPage.svg';
import SignIn from '../sign-in-page/SignIn';
import "./Navbar.css";

const Navbar = () => {

    const pathName = useRef(window.location.pathname);
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
                <div className = {navbar ? 'container-active' : 'container'}>
                    <img className = {navbar ? 'header-img-active' : 'header-img'} src = {Img} alt="WhiteList"></img>
                    <img className = {navbar ? 'tagline-active' : 'tagline'} src = {Img2} alt="WhiteList"></img>
                    <div className = {startButton ? 'btn-top-container' : 'btn-bot-container'}>
                            <NavLink 
                                to={pathName.current} 
                                className = {startButton ? 'btn-top' : 'btn-bot'} 
                                onClick={() => {setIsOpen(true); setIsRedirect(false)}}
                            >
                                LOG-IN
                            </NavLink>
                            <SignIn open={isOpen} 
                                redirect={isRedirect}
                                onRedirect={() => {setIsRedirect(!isRedirect)}}
                                onClose={() => {setIsOpen(false);showScroll();}}
                            />
                    </div>
                </div> 
            </div>
            <img className = "start-up-bg-icon" src = {Img3} alt="WhiteList"/>
        </nav>
        </>
    )
}

export default Navbar;