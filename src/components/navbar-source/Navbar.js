import React, { useState } from 'react';
import Img from '../images/white-list-text.svg';
import Img2 from '../images/white-list-tagline.svg';
import Button from '../Button';
import "./Navbar.css";

function Navbar() {

    const [navbar, setNavbar] = useState(false);
    const changeNavbar = () => {
        if(window.scrollY >= 100){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbar);

    return(
        <nav className = {navbar ? 'navbar-active' : 'navbar'}>
            <div className="container">
                <img className = "header-img" src = {Img} alt="WhiteList"></img>
                <img className = "tagline" src = {Img2} alt="WhiteList"></img>
                <Button />
            </div>
        </nav>
    )
}

export default Navbar;