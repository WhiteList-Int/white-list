import React, {useState, useRef} from 'react'
import '../css/EditProfile.css'
import NavbarFixed from '../../navbar-source/NavbarFixed';
import { accounts } from '../../profile-sources/account';
import ConfirmWindow from '../../owner-dash-sources/ConfirmWindow';


const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ] 
}

function EditProfile() {

    const imageSrc = useRef(accounts[0].imgs);

    const [inputName, setInputName] = useFocus();
    const [disabledName, setDisableName] = useState(true);

    const [disabledBday, setDisableBday] = useState(true);

    const [inputEmail, setInputEmail] = useFocus();
    const [disabledEmail, setDisableEmail] = useState(true);

    const [inputGender, setInputGender] = useFocus();
    const [disabledGender, setDisableGender] = useState(true);

    const [inputContact, setInputContact] = useFocus();
    const [disabledContact, setDisableContact] = useState(true);

    const [inputOccupation, setInputOccupation] = useFocus();
    const [disabledOccupation, setDisableOccupation] = useState(true);

    const [saveAppear, setInputActive] = useState(false);


    const [isOpen, setIsOpen] = useState(false);
    const showScroll = () => {
        document.body.setAttribute('style', 'overflow-y:scroll;');
     }
    

    return (
        <>
            <NavbarFixed />
            <div className="edit-profile-page">
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
                                    <button className="edit-profile-change" onClick={()=>{setInputActive(true);  setDisableName(false);setInputName();}}>Change</button>
                                </div>
                                <input className="edit-profile-input" ref={inputName} type="text" placeholder={accounts[0].name} disabled={disabledName? true: false}/>
                            
                            
                                <div className="edit-profile-row">
                                    <p>Birthday</p>
                                    <button className="edit-profile-change" onClick={()=>{setInputActive(true);setDisableBday(false);}}>Change</button>
                                </div>
                                <input className="edit-profile-input" type="text" onFocus={(e)=>e.target.type = 'date' }  placeholder={accounts[0].bday} disabled={disabledBday? true: false}/>
                            
                            
                                <div className="edit-profile-row">
                                    <p>Email Address</p>
                                    <button className="edit-profile-change" onClick={()=>{setInputActive(true); setDisableEmail(false); setInputEmail();}}>Change</button>
                                </div>
                                <input className="edit-profile-input" ref={inputEmail} type="text" placeholder={accounts[0].email} disabled={disabledEmail? true: false}/>
                            
                        
                                <div className="edit-profile-row">
                                    <p>Gender</p>
                                    <button className="edit-profile-change" onClick={()=>{setInputActive(true); setDisableGender(false);setInputGender();}}>Change</button>
                                </div>
                                <input className="edit-profile-input" ref={inputGender} type="text" placeholder={accounts[0].gender} disabled={disabledGender? true: false}/>
                            
                        
                            
                                <div className="edit-profile-row">
                                    <p>Contact Number</p>
                                    <button className="edit-profile-change" onClick={()=>{setInputActive(true); setDisableContact(false);setInputContact()}}>Change</button>
                                </div>
                                <input className="edit-profile-input" ref={inputContact} type="text" placeholder={accounts[0].contact} disabled={disabledContact? true: false}/>
                            
                            
                                <div className="edit-profile-row">
                                    <p>Occupation</p>
                                <button className="edit-profile-change" onClick={()=>{setInputActive(true); setDisableOccupation(false);setInputOccupation()}}>Change</button>
                                </div>
                                <input className="edit-profile-input" ref={inputOccupation} type="text" placeholder={accounts[0].occupation} disabled={disabledOccupation? true: false}/>

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
            </div>
        </>
    )
}

export default EditProfile
