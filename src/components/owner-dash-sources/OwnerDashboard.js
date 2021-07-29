import React from 'react'
import { rentals ,pends, archives } from "./dataSrc";
import ConfirmWindow from './ConfirmWindow'
import OwnerNavbar from './OwnerNavbar';
import Footer from './../essentials/Footer';
import { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

function OwnerDashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [pendIsActive, setPendIsActive] = useState(false);
    const [archIsActive, setArchIsActive] = useState(false);
    const [enableDescriptionEdit,setEnableDescriptionEdit] = useState(false);
    const showScroll = () => {
        document.body.setAttribute('style', 'overflow-y:scroll;');
    }

    return (
        <>
            <OwnerNavbar />
            <body className="owner-dashboard">
                <div className="owner-dashboard-card">
                    <div className="owner-dashboard-title">
                        <h1>Your Rental</h1>
                    </div>
                    <div className="owner-dashboard-card-container">
                        <div className="owner-dashboard-card-container-rental">
                            <img className="owner-dashboard-card-container-rental-img" src={rentals[0].imgs} alt="owned-rental" />
                            <h2>{rentals[0].name}</h2>
                        </div>
                        <div className="owner-dashboard-card-container-left">
                            <div className="owner-dashboard-card-container-left-wrapper" id="desc-button-cont" >
                                <div className={enableDescriptionEdit ? "owner-dashboard-card-container-left-wrapper-edit-disable":'owner-dashboard-card-container-left-wrapper-edit-enable'} >
                                    <IconButton onClick = {()=>{ setEnableDescriptionEdit(true);}}>
                                        <CreateIcon fontSize='medium' />
                                    </IconButton>
                                </div>
                                <textarea 
                                className={enableDescriptionEdit? "owner-dashboard-card-container-left-description":"owner-dashboard-card-container-left-description-disabled"} 
                                cols="1" 
                                rows="5" 
                                placeholder={rentals[0].desc}
                            />
                                <span className={enableDescriptionEdit ?"owner-dashboard-card-container-left-wrapper-save":"owner-dashboard-card-container-left-wrapper-save-hidden"} onClick={()=>{setIsOpen(true);}}>
                                    Save Changes
                                </span>
                            </div>
                        </div>
                        <div className="owner-dashboard-card-container-right">
                            <div className="owner-dashboard-card-container-right-cont">
                                <div className="owner-dashboard-card-container-right-cont-nav">
                                    <h2>Pending List</h2>
                                    <IconButton onClick = {() => { setPendIsActive(true);setArchIsActive(false);}}>
                                        <AddIcon fontSize='medium' />
                                    </IconButton>
                                    <IconButton onClick = {() => { setPendIsActive(false);}}>
                                        <RemoveIcon fontSize='medium' />
                                    </IconButton>
                                </div>
                                {pends.map((pend)=>(
                                    <div className={pendIsActive?"owner-dashboard-card-container-right-cont-wrapper":"owner-dashboard-card-container-right-hidden"}>
                                        <div className="owner-dashboard-card-container-right-cont-wrapper-buttons">
                                            <h3>{pend.name}</h3>
                                            <div className="owner-dashboard-card-container-right-cont-wrapper-buttons-negative">
                                                <IconButton onClick={()=>{setIsOpen(true);}}>
                                                    <CloseIcon fontSize='large'/>
                                                </IconButton>
                                            </div>
                                            <div className="owner-dashboard-card-container-right-cont-wrapper-buttons-positive">
                                                <IconButton onClick={()=>{setIsOpen(true);}}>
                                                    <CheckIcon fontSize='large' />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div className="owner-dashboard-card-container-right-cont-wrapper-details">
                                            <p>{pend.num}</p>
                                            <p>{pend.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="owner-dashboard-card-container-right-cont">
                                <div className="owner-dashboard-card-container-right-cont-nav">
                                    <h2>Archived List</h2>
                                    <IconButton onClick = {() => { setPendIsActive(false);setArchIsActive(true);}}>
                                        <AddIcon fontSize='medium' />
                                    </IconButton>
                                    <IconButton onClick = {() => { setArchIsActive(false);}}>
                                        <RemoveIcon fontSize='medium' />
                                    </IconButton>
                                </div>
                                {archives.map((archive)=>(
                                    <div className={archIsActive?"owner-dashboard-card-container-right-cont-wrapper":"owner-dashboard-card-container-right-hidden"}>
                                        <div className="owner-dashboard-card-container-right-cont-wrapper-buttons">
                                            <h3>{archive.name}</h3>
                                            <div className="owner-dashboard-card-container-right-cont-wrapper-buttons-negative">
                                                <IconButton onClick={()=>{setIsOpen(true);}}>
                                                    <CloseIcon fontSize='large'/>
                                                </IconButton>
                                            </div>
                                            <div className="owner-dashboard-card-container-right-cont-wrapper-buttons-positive">
                                                <IconButton onClick={()=>{setIsOpen(true);}}>
                                                    <CheckIcon fontSize='large' />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div className="owner-dashboard-card-container-right-cont-wrapper-details">
                                            <p>{archive.num}</p>
                                            <p>{archive.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="owner-dashboard-card-container-remove" onClick={()=>{setIsOpen(true);}}>
                                <span className='owner-dashboard-card-container-remove-button'><h5>Remove Rental Property</h5></span>
                            </div>
                        </div>
                    </div>
                </div>
                <ConfirmWindow open={isOpen} onClose={(saveValue)=> {
                    if(saveValue){
                        setEnableDescriptionEdit(false);
                    } else{
                        setEnableDescriptionEdit(true);
                    }
                    setIsOpen(false);
                    showScroll();}
                }/>
            </body>
            <Footer />
        </>
    )
}

export default OwnerDashboard
