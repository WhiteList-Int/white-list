import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import FacebookIcon from '@material-ui/icons/Facebook';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import RingVolumeIcon from '@material-ui/icons/RingVolume';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ReactDom  from 'react-dom';
import ProfileConnects from './../profile-sources/ProfileConnects';

export default function ContactOwnerPopup({open, onClose, data}) {
    function copyStringToClipboard (str) {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = str;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
        alert("Copied Contact "+str+" to clipboard! Go and contact the owner now.");
     }
    
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
                        <div className="contact-owner-container-information-details-cards" onClick={()=>window.open(data.fblink, "_blank")}>
                            <FacebookIcon id="fb-icon"/>
                            <p>Facebook Account</p>
                        </div> 
                        <div className="contact-owner-container-information-details-cards" onClick={()=>copyStringToClipboard(data.phone)}>
                            <PermPhoneMsgIcon id="phone-icon"/>
                            <p>{data.phone}</p>
                        </div>
                        <div className="contact-owner-container-information-details-cards" onClick={()=>copyStringToClipboard(data.telephone)}>
                            <RingVolumeIcon id="tele-icon"/>
                            <p>{data.telephone}</p>
                        </div>
                        <div className="contact-owner-container-information-details-cards" onClick={()=>copyStringToClipboard(data.femail)}>
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

