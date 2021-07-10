import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../images/white-list-text.svg';
import Img2 from '../images/white-list-tagline.svg';
import "./Navbar.css";
import "./Button.css";

function Navbar() {

    const [startButton, setStartButton] = useState(false);
    const [navbar, setNavbar] = useState(false);
    
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
                    <Link className = {startButton ? 'btn-top' : 'btn-bot'} to='/sign-in'>SIGN-IN</Link>
                </div>
            </div> 
        </nav>
    )
}

export default Navbar;