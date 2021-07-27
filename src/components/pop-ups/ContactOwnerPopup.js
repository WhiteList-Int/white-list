import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import FacebookIcon from '@material-ui/icons/Facebook';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ReactDom  from 'react-dom';

export default function ContactOwnerPopup({open, onClose, data}) {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            {document.body.setAttribute('style','overflow:hidden;')}
            <motion.div 
                className="contact-owner"
                initial="fadeOut" 
                animate="fadeIn" 
                exit="fadeOut"
                variants={variants}
                transition={transitions.tweenEaseOutFast}
            >
            <div className="exit-zone" onClick={onClose}></div>
            <div className="contact-owner-container">
                <div className="contact-owner-container-profile">
                    <img src={data.profile} alt="Profile Pic"/>
                    <h3>{data.ownerName}</h3>
                </div>
                <div className="contact-owner-container-information">
                    <h2>Contact Information</h2>
                    <div className="contact-owner-container-information-details">
                        <a href={data.fblink}>
                            <div className="contact-owner-container-information-details-cards">
                                <FacebookIcon id="fb-icon"/>
                                <p>Facebook Account</p>
                            </div>
                        </a>
                        <div className="contact-owner-container-information-details-cards">
                            <PermPhoneMsgIcon id="phone-icon"/>
                            <p>{data.phone}</p>
                        </div>
                        <div className="contact-owner-container-information-details-cards">
                            <RingVolumeIcon id="tele-icon"/>
                            <p>{data.telephone}</p>
                        </div>
                        <div className="contact-owner-container-information-details-cards">
                            <AlternateEmailIcon id="email-icon"/>
                            <p>{data.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </>,
        document.getElementById('contact-us-pop-up')
    )
}

