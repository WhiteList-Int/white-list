import React from 'react'
import './ProfileConnects.css'
import ProfileNavbar from './ProfileNavbar'
import { rentals } from "../owner-dash-sources/dataSrc";
import Footer from '../essentials/Footer';
import { motion } from 'framer-motion';
import { variants } from './../../animation-variants';
import { transitions } from './../../page-transitions';

function ProfileConnects() {
    return (
        <>
        <div className="profile-connects">
            <ProfileNavbar /> 
                <motion.div 
                    className="profile-connects-page"
                    initial="slideOutYOpp" 
                    animate="slideInYOpp" 
                    variants={variants}
                    transition={transitions.tweenEaseOutFaster}
                >
                    <div className="profile-connects-title-container">
                        <div className="profile-connects-label-cont">
                        <p>Date</p>
                        </div>
                        <div className="profile-connects-label-cont">
                        <p>Rental Owner</p>
                        </div>
                        <div className="profile-connects-label-cont">
                            <p>Rental</p>
                        </div>
                        <div className="profile-connects-label-cont">
                        <p>Address</p>
                        </div>
                        <div className="profile-connects-label-cont">
                        <p>Status</p>
                        </div>
                    </div>
                    {rentals.map((rental)=>(
                        <div className="profile-connects-cont">
                        <p className="grid-item">{rental.date}</p>
                        <p className="grid-item">{rental.landlord}</p>
                        <p className="grid-item">{rental.name}</p>
                        <p className="grid-item">{rental.address}</p>
                        <p className="grid-item">{rental.status}</p>
                    </div>
                    ))}
                </motion.div>
        </div>
        
        <Footer />
        </>
    )
}

export default ProfileConnects

