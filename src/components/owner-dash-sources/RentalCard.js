import React, {useState} from 'react'
import { rentals } from "./dataSrc";
import { pends } from "./pendSrc";
import './RentalCard.css'
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ConfirmWindow from './ConfirmWindow'
import { archives } from './archivedSrc';

function RentalCard() {
    
    const [isOpen, setIsOpen] = useState(false);
    const showScroll = () => {
        document.body.setAttribute('style', 'overflow-y:scroll;');
     }
    const [disableDescription, setDisDescription] = useState(false);
    const [editDescription, setEditDesc] = useState(false);
    const [showPending, setPendActive] = useState(false);
    const [showArchive, setArchActive] = useState(false);

    return (
        <div>
                {rentals.map((rental) => (
                    <div className="owner-rental" id={rental.id} key={rental.key}>
                        <img className="owner-rental-img" src={rental.imgs} alt="owned-rental" />
                        <div className="owner-dash-rental-detail-card" >
                            <div className="owner-dash-title-container" >
                                <h2>{rental.name}</h2>
                            </div>
                            
                            {/* Description */}
                            <div className={disableDescription? "container-disabled" : 'owner-dash-description-container'} >
                                <h3 >Description </h3>
                                <p> {rental.desc}</p>
                                <div className={disableDescription ? "container-disabled":'owner-description-icon-active'} >
                                    <IconButton onClick = {()=>{ setEditDesc(true);setDisDescription(true);}}>
                                        <CreateIcon fontSize='medium' />
                                    </IconButton>
                                </div>
                            </div>
                            {/* Description Edit */}
                            <div className={editDescription? "owner-dash-edit-desc":"container-disabled"}>
                                <textarea className="owner-edit-desc-field" cols="1" rows="5" placeholder={rental.desc}></textarea>
                                <div className="owner-dash-cont-row" id="desc-button-cont" >
                                <button className="owner-dash-small-button" id="backspace-icon">
                                <IconButton onClick = {()=>{ setEditDesc(false);setDisDescription(false);}}>
                                    <KeyboardBackspaceIcon fontSize='medium' />
                                </IconButton>
                                </button>
                                <button className="owner-edit-desc-field-button" onClick={()=>{ setIsOpen(true);}}>Save Changes</button>
                                </div>
                            </div>

                            {/* Pending Connections */}
                            <div className={showPending? "container-disabled":"owner-dash-pending-container"} >
                                <h2 >Pending Connections</h2>
                                <button className="owner-dash-small-button" >
                                    <IconButton onClick = {() => { setPendActive(true);setDisDescription(true);setArchActive(false);setEditDesc(false);}}>
                                        <AddIcon fontSize='medium' />
                                    </IconButton>
                                </button>
                            </div>
                            
                            {/* Pending Active */}
                            <div className={showPending? "owner-dash-pending-container-active":"container-disabled"} >
                                <div className="owner-dash-cont-row">
                                    <h2 >Pending Connections</h2>
                                    <button className="owner-dash-small-button-pend" >
                                        <IconButton onClick = {() => { setPendActive(false);setDisDescription(false);}}>
                                            <RemoveIcon fontSize='medium' />
                                        </IconButton>
                                    </button>
                                </div>
                                {pends.map((pend)=>(
                                    <div className="owner-dash-pending-request" >
                                        <div className="owner-dash-pending-name-cont">
                                            <h3>{pend.name}</h3>
                                            <div className="owner-dash-button-cont">
                                                <div className="owner-dash-disapprove-cont">
                                                    <IconButton onClick={()=>{setIsOpen(true);}}>
                                                        <CloseIcon fontSize='large'/>
                                                    </IconButton>
                                                </div>
                                                <div className="owner-dash-approve-cont">
                                                    <IconButton onClick={()=>{setIsOpen(true);}}>
                                                        <CheckIcon fontSize='large' />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owner-dash-pending-cont-row">
                                            <p>{pend.num}</p>
                                            <p>{pend.email}</p>
                                        </div>
                                    </div>  
                                ))}
                            </div>
                            
                            {/* Archived Connections */}
                            <div className={showArchive? "container-disabled":"owner-dash-archived-container"} >
                                <h2 >Archived Connections</h2>
                                <button className="owner-dash-small-button">
                                    <IconButton onClick = {() => { setArchActive(true);setDisDescription(true);setPendActive(false);setEditDesc(false);}}>
                                        <AddIcon fontSize='medium' />
                                    </IconButton>
                                </button>
                            </div>

                            {/* Archived Active */}
                            <div className={showArchive? "owner-dash-pending-container-active":"container-disabled"} >
                                <div className="owner-dash-cont-row">
                                    <h2 >Archived Connections</h2>
                                    <button className="owner-dash-small-button-pend" >
                                        <IconButton onClick = {() => { setArchActive(false);setDisDescription(false);}}>
                                            <RemoveIcon fontSize='medium' />
                                        </IconButton>
                                    </button>
                                </div>
                                {archives.map((archive)=>(
                                    <div className="owner-dash-pending-request" >
                                        <div className="owner-dash-pending-name-cont">
                                            <h3>{archive.name}</h3>
                                            <div className="owner-dash-button-cont">
                                                <div className="owner-dash-disapprove-cont">
                                                    <IconButton onClick={()=>{setIsOpen(true);}}>
                                                        <CloseIcon fontSize='large'/>
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owner-dash-pending-cont-row">
                                            <p>{archive.num}</p>
                                            <p>{archive.email}</p>
                                        </div>
                                    </div>  
                                ))}
                            </div>

                            <button className="owner-dash-remove-rental" onClick={()=>{setIsOpen(true);}}>
                                <h2>Remove Rental Property</h2>
                            </button>
                            <ConfirmWindow open={isOpen} onClose={()=> {
                                if(editDescription){setEditDesc(false); setDisDescription(false);}setIsOpen(false);showScroll();}
                                }/>
                        {/* End Detail Card */}
                        </div>    
                        
                    </div>
                ))}
        </div>
    )
}

export default RentalCard
