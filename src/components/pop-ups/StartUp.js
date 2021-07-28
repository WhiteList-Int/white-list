import React from 'react';
import ReactDom  from 'react-dom';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import Img1 from '../images/ssstep1.png';
import Img2 from '../images/ssstep5.png';
import Img5 from '../images/ssstep6.png';
import Img9 from '../images/ssstep10.png';

export default function StartUp({open, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            {document.body.setAttribute('style','overflow:hidden;')}
            <motion.div 
                className="start-now"
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
                            <h2>WhiteList offers you an easy way to find your desired rental.</h2>
                            <h2>Just within 4 steps, you're Done!</h2>
                       </center>
                    </div>
                    <div className="start-now-grid">
                        
                        <div className="start-now-steps">
                            <img src={Img1} alt="renter"/>
                            <div className="start-now-text-cont">
                                <h2>Step 1</h2>
                                <h3> Log In to WhiteList </h3>
                            </div>
                        </div>
                        <div className="start-now-steps">
                            <img src={Img2} alt="rent owner"/>
                            <div className="start-now-text-cont">
                                <h2>Step 2</h2>
                                <h3> Browse available Rentals </h3>
                            </div>
                        </div>

                        <div className="start-now-steps">
                            <img src={Img5} alt="rent owner"/>
                            <div className="start-now-text-cont">
                                <h2>Step 3</h2>
                                <h3> Choose a Rental </h3>
                            </div>
                        </div>


                        <div className="start-now-steps">
                            <img src={Img9} alt="rent owner"/>
                            <div className="start-now-text-cont">
                               <h2>Step 4</h2>
                                <h3> Connect with an Owner </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>,
        document.getElementById("start-up-pop-up")
    )
}
