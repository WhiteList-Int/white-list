import React from 'react'
import '../css/EditProfile.css'
import NavbarFixed from '../../navbar-source/NavbarFixed';
import Img from '../../images/jez.jpg'
import { useRef } from 'react';


function EditProfile() {

    const imageSrc = useRef(Img);
    

    return (
        <div className="edit-profile-page">
            <NavbarFixed />
            <div className="edit-profile-card">
                <div className="renter-profile-title">
                    <h1>Renter's Profile</h1>
                </div>
                <div className="edit-profile-picture">
                       <img src={imageSrc.current} alt="" id="change-image" />
                </div>
                <p><input type="file"  accept="image/*" name="image" id="file"  onchange={(event)=>imageSrc.current=event.value} style={{display: 'none'}} /></p>
                <p className="edit-profile-change" id="change-picture"><label  for="file" style={{cursor: 'pointer'}}>Upload Image</label></p>
                    
                    <div className="edit-profile-info-cont">
                            <div className="edit-profile-row">
                                <p>Full Name</p>
                                <button className="edit-profile-change">Change</button>
                            </div>
                            <input className="edit-profile-input"type="text" placeholder="Jezreel Jedidiah Floreta"/>
                        
                        
                            <div className="edit-profile-row">
                                <p>Birthday</p>
                                <button className="edit-profile-change">Change</button>
                            </div>
                            <input className="edit-profile-input" type="date" placeholder="12/25/2000"/>
                        
                        
                            <div className="edit-profile-row">
                                <p>Email Address</p>
                                <button className="edit-profile-change">Change</button>
                            </div>
                            <input className="edit-profile-input" type="text" placeholder="jezzuh@gmail.com"/>
                        
                       
                            <div className="edit-profile-row">
                                <p>Gender</p>
                                <button className="edit-profile-change">Change</button>
                            </div>
                            <input className="edit-profile-input" type="text" placeholder="Male"/>
                        
                    
                        
                            <div className="edit-profile-row">
                                <p>Contact Number</p>
                                <button className="edit-profile-change">Change</button>
                            </div>
                            <input className="edit-profile-input" type="text" placeholder="8-7000"/>
                        
                        
                            <div className="edit-profile-row">
                                <p>Occupation</p>
                            <button className="edit-profile-change">Change</button>
                            </div>
                            <input className="edit-profile-input" type="text" placeholder="Software Developer"/>

                            <button className="edit-profile-save-change">SAVE CHANGES</button>
                    </div>
                
            </div>
        </div>
    )
}

export default EditProfile
