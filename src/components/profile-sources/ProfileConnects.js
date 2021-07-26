import React from 'react'
import './ProfileConnects.css'
import ProfileNavbar from './ProfileNavbar'
import { rentals } from "../owner-dash-sources/dataSrc";
import Footer from '../essentials/Footer';

function ProfileConnects() {
    return (
        <>
        <ProfileNavbar /> 
        <div className="profile-connects">
            <div className="profile-connects-title-container">
                <h1>Your Connects</h1>
                </div>
                <div className="profile-connects-card">
            </div>
        </div>
        </>
    )
}

export default ProfileConnects
