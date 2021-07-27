import React from 'react';
import ReactDom  from 'react-dom';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import Img1 from '../images/ssstep1.png';
import Img2 from '../images/ssstep5.png';
import Img5 from '../images/ssstep6.png';
import Img6 from '../images/ssstep7.png';
import Img7 from '../images/ssstep8.png';
import Img8 from '../images/ssstep9.png';
import Img9 from '../images/ssstep10.png';
import './StartUp.css';

export default function StartUp({open, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            {document.body.setAttribute('style','overflow:hidden;')}
            <motion.div 
                className="start-up"
                initial="fadeOut" 
                animate="fadeIn" 
                exit="fadeOut"
                variants={variants}
                transition={transitions.tweenEaseInFast}
            >
                <div className='exit-zone' onClick={onClose}/>
                <div className="start-now-window">
                    <div className="start-now-renter">
                       <center> <h1>Looking for Rentals?</h1></center>
                       <center>
                            <h2>WhiteList gives you an easier way to find your desired rental!</h2>
                       </center>
                    </div>
                    <div className="start-now-parent-grid">
                        
                    <div className="start-now-steps">
                        <img src={Img1} alt="renter"/>
                        <div className="start-now-text-cont">
                            <h2>Step 1</h2>
                            <p>  </p>
                        </div>
                    </div>
                    <div className="start-now-steps">
                        <img src={Img2} alt="rent owner"/>
                        <h2>Step 2</h2>
                    </div>

                    <div className="start-now-steps">
                        <img src={Img5} alt="rent owner"/>
                        <h2>Step 5</h2>
                    </div>

                    <div className="start-now-steps">
                        <img src={Img6} alt="rent owner"/>
                        <h2>Step 6</h2>
                    </div>

                    <div className="start-now-steps">
                        <img src={Img7} alt="rent owner"/>
                        <h2>Step 7</h2>
                    </div>

                    <div className="start-now-steps">
                        <img src={Img8} alt="rent owner"/>
                        <h2>Step 8</h2>
                    </div>

                    <div className="start-now-steps">
                        <img src={Img9} alt="rent owner"/>
                       <h2>Step 9</h2>
                    </div>
                    </div>
                
                </div>
            </motion.div>
        </>,
        document.getElementById("start-up-pop-up")
    )
}
