import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import ReactDom  from 'react-dom';
import '../information-page/RentalPreview.scss'

export default function ImagePopup({open, onClose, imgSource}) {

    if(!open) return null;

    return ReactDom.createPortal(
        <> 
            <motion.div
                className="image-popup"
                initial="fadeOut" 
                animate="fadeIn" 
                exit="fadeOut"
                variants={variants}
                transition={transitions.tweenEaseInFaster}
            >
                <div className='exit-zone' onClick={onClose}/>
                <div className="image-popup-container">
                    <img src={imgSource} alt="full-screen-img"/>
                </div>
            </motion.div>
        </>,
        document.getElementById('image-pop-up')
    )
}
