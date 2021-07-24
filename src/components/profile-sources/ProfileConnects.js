import React from 'react'
import './ProfileConnects.css'
import ProfileNavbar from './ProfileNavbar'
import { rentals } from "../owner-dash-sources/dataSrc";

function ProfileConnects() {
    return (
        <>
        <div className="profile-connects">
            <ProfileNavbar /> 
            
                <div className="profile-connects-title-container">
                    <h1>Connections</h1>
                </div>
                <div className="profile-connects-cont">
                   <h1>Hello World</h1>
                </div>

                
        </div>
        </>
    )
}

export default ProfileConnects

