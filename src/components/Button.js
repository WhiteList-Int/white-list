import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Button.css";

function Button() {
    const [startButton, setStartButton] = useState(false);
    const changeButton = () => {
        if(window.scrollY >= 300){
            setStartButton(true);
        } else{
            setStartButton(false);
        }
    }

    window.addEventListener('scroll', changeButton);

    return(
        <nav className = {startButton ? 'btn-top' : 'btn'}>
            <div className="btn-container">
                <Link className = 'sign-in-btn' to="/Sign-in">SIGN IN</Link>
            </div>
        </nav>
    )
}

export default Button;