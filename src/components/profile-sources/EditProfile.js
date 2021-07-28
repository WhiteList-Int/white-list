import React, { useState } from 'react';
import { accounts } from './../profile-sources/account';
import ProfileNavbar from './../profile-sources/ProfileNavbar';
import ConfirmWindow from '../owner-dash-sources/ConfirmWindow';
import './EditProfile.css';


function EditProfile() {

    const [disabledName, setDisableName] = useState(true);
    const [disabledBday, setDisableBday] = useState(true);
    const [disabledEmail, setDisableEmail] = useState(true);
    const [disabledGender, setDisableGender] = useState(true);
    const [disabledContact, setDisableContact] = useState(true);
    const [disabledOccupation, setDisableOccupation] = useState(true);
    const [saveAppear, setInputActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const showScroll = () => {
        document.body.setAttribute('style', 'overflow-y:scroll;');
    }

    const loadFile = (event) => {
        var image = document.getElementById('change-image');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    
    return (
        <>
            <ProfileNavbar /> 
            <div className="edit-profile">
                <div className="edit-profile-container">
                    
                    <div className="edit-profile-container-img">
                        {/* <img src={accounts[0].imgs} alt="" id="change-image" /> */}
                    </div>
                    <p><input type="file"  accept="image/*" name="image" id="file"  onChange={loadFile} style={{display: 'none'}} /></p>
                    <p className="edit-profile-container-change" id="change-picture"><label  for="file" style={{cursor: 'pointer'}}>Upload Image</label></p>
                        
                    </div>
                    <div className="edit-profile-container-wrappper">
                        <div className="edit-profile-container-wrapper-row">
                            <p>Full Name</p>
                        </div>
                        <input 
                            className="edit-profile-container-wrapper-input" 
                            type="text" placeholder={accounts[0].name} 
                            disabled={disabledName? true: false}
                        />
                        <div className="edit-profile-container-wrapper-row">
                            <p>Birthday</p>
                        </div>
                        <input 
                            className="edit-profile-container-wrapper-input" 
                            type="text" 
                            onFocus={(e)=>e.target.type = 'date' }  
                            placeholder={accounts[0].bday} 
                            disabled={disabledBday? true: false}
                        />
                        <div className="edit-profile-row">
                            <p>Email Address</p>
                        </div>
                        <input 
                            className="edit-profile-input" 
                            type="text" 
                            placeholder={accounts[0].email} 
                            disabled={disabledEmail? true: false}
                        />
                        <div className="edit-profile-row">
                            <p>Gender</p>
                        </div>
                        <input className="edit-profile-input" 
                            type="text" 
                            placeholder={accounts[0].gender} 
                            disabled={disabledGender? true: false}
                        />
                        <div className="edit-profile-row">
                            <p>Contact Number</p>
                        </div>
                        <input 
                            className="edit-profile-input" 
                            type="text" 
                            placeholder={accounts[0].contact} 
                            disabled={disabledContact? true: false}
                        />
                        <div className="edit-profile-row">
                            <p>Occupation</p>
                        </div>
                        <input className="edit-profile-input"  
                            type="text" 
                            placeholder={accounts[0].occupation} 
                            disabled={disabledOccupation? true: false}
                        />
                    
                    <button className={saveAppear?"container-disabled":"edit-profile-change"} onClick={()=>{
                        setInputActive(true); 
                        setDisableName(false);
                        setDisableBday(false);
                        setDisableEmail(false);
                        setDisableGender(false);
                        setDisableContact(false);
                        setDisableOccupation(false);
                        }}>EDIT</button>

                    <button className={saveAppear?"edit-profile-save-change":"container-disabled"} onClick={()=>{setIsOpen(true);}} >SAVE CHANGES</button>
                    
                    <ConfirmWindow open={isOpen} onClose={()=> {
                        if(true/*if yes or no button*/){
                            setInputActive(false); 
                            setDisableName(true);
                            setDisableBday(true);
                            setDisableEmail(true);
                            setDisableGender(true);
                            setDisableContact(true);
                            setDisableOccupation(true);
                        }
                        setIsOpen(false);
                        showScroll();}
                    }/>
                </div>
            </div>
        </>
    )
}

export default EditProfile
