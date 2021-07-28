import React, { useState } from 'react';
import { accounts } from '../profile-sources/account';
import ConfirmWindow from './ConfirmWindow';
import OwnerNavbar from './OwnerNavbar';
import ppImg from '../images/no_user.png';
import Footer from './../essentials/Footer';
import { motion } from 'framer-motion';
import { variants } from './../../animation-variants';
import { transitions } from './../../page-transitions';

function OwnerProfile() {

    const [enableFields, setEnableFields] = useState(true);
    const [saveAppear, setSaveAppear] = useState(false);
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
        <div className="edit-profile-background">
            <OwnerNavbar /> 
            <div className="edit-profile"
                initial="slideOutYOpp" 
                animate="slideInYOpp" 
                variants={variants}
                transition={transitions.tweenEaseOutFaster}
            >
                <motion.div className="edit-profile-container">
                    <div className="edit-profile-container-img">
                        <img src={ppImg} alt="" id="change-image"/>
                    </div>
                    <p>
                        <input 
                            type="file"  
                            accept="image/*" 
                            name="image" 
                            id="file"  
                            onChange={loadFile} 
                            style={{display: 'none'}} 
                        />
                    </p>
                    <p 
                        className={saveAppear?"edit-profile-container-change":"edit-profile-wrapper-change-disabled"} 
                        id="change-picture"
                    >
                        <label for="file" style={{cursor: 'pointer'}}>Edit Profile Picture</label>
                    </p>   
                </motion.div>
                <motion.div className="edit-profile-wrapper"
                    initial="slideOutYOpp" 
                    animate="slideInYOpp" 
                    variants={variants}
                    transition={transitions.tweenEaseOutFaster}
                >
                    <div className="edit-profile-wrapper-row-header">
                        <p>Your Profile</p>
                    </div>
                    <div className="edit-profile-wrapper-row">
                        <p>Full Name</p>
                        <input 
                            className="edit-profile-wrapper-input" 
                            type="text" placeholder={accounts[0].name} 
                            disabled={enableFields}
                        />
                    </div>
                    <div className="edit-profile-wrapper-row">
                        <p>Birthday</p>
                        <input 
                            className="edit-profile-wrapper-input" 
                            type="text" 
                            onFocus={(e)=>e.target.type = 'date' }  
                            placeholder={accounts[0].bday} 
                            disabled={enableFields}
                        />
                    </div>
                    <div className="edit-profile-wrapper-row">
                        <p>Email Address</p>
                        <input 
                            className="edit-profile-wrapper-input" 
                            type="text" 
                            placeholder={accounts[0].email} 
                            disabled={enableFields}
                        />
                    </div>
                    <div className="edit-profile-wrapper-row">
                        <p>Gender</p>
                        <input className="edit-profile-wrapper-input" 
                            type="text" 
                            placeholder={accounts[0].gender} 
                            disabled={enableFields}
                        />
                    </div>
                    <div className="edit-profile-wrapper-row">
                        <p>Contact Number</p>
                        <input 
                            className="edit-profile-wrapper-input" 
                            type="text" 
                            placeholder={accounts[0].contact} 
                            disabled={enableFields}
                        />
                    </div>
                    <div className="edit-profile-wrapper-row">
                        <p>Occupation</p>
                        <input className="edit-profile-wrapper-input"  
                            type="text" 
                            placeholder={accounts[0].occupation} 
                            disabled={enableFields}
                        />
                    </div>
                    <span
                        className={saveAppear?"edit-profile-wrapper-change-disabled":"edit-profile-wrapper-change"} 
                        onClick={()=>{
                            setSaveAppear(true);
                            setEnableFields(false);
                        }}
                    >EDIT PROFILE
                    </span>
                    <span
                        className={saveAppear?"edit-profile-wrapper-change-save":"edit-profile-wrapper-change-disabled"} 
                        onClick={()=>{setIsOpen(true);}} 
                    >SAVE CHANGES
                    </span>
                    
                    <ConfirmWindow open={isOpen} onClose={(saveValue)=> {
                        if(saveValue){
                            setEnableFields(true);
                            setSaveAppear(false);
                        } else{
                            setEnableFields(false);
                        }
                        setIsOpen(false);
                        showScroll();}
                    }/>
                </motion.div>
            </div>
        </div>
        
        <Footer/>
        </>
    )
}

export default OwnerProfile
