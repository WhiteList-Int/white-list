import React from 'react';
import ReactDom  from 'react-dom';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import renterLogo from '../images/renter-clip.svg';
import rentOwner from '../images/rent-owner-clip.svg';
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
                <div className="left-wing">
                    <img src={renterLogo} alt="renter"/>
                    <center><h2> A Renter?</h2></center>
                </div>
                <div className="right-wing">
                    <img src={rentOwner} alt="rent owner"/>
                    <center><h2> A Rent Owner?</h2></center>
                </div>
            </motion.div>
        </>,
        document.getElementById("start-up-pop-up")
    )
}
