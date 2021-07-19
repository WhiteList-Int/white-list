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

function RentalCard() {
    
    const [showPending, setPendActive] = useState(false);
    const [disableDescription, setDisDescription] = useState(false);

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
                            <div className={disableDescription? 'owner-dash-dis-description' : 'owner-dash-description-container'} >
                                <h3 >Description </h3>
                                <p> {rental.desc}</p>
                                <div className={disableDescription ? 'owner-description-icon-disabled':'owner-description-icon-active'} >
                                    <IconButton>
                                    <CreateIcon color="action" />
                                    </IconButton>
                                </div>
                            </div>

                            {/* Pending Connections */}
                            <div className={showPending? "owner-dash-pending-container-disabled":"owner-dash-pending-container"} >
                                <h2 >Pending Connections</h2>
                                <button className="owner-dash-small-button" >
                                    <IconButton onClick = {() => { setPendActive(true);setDisDescription(true);}}>
                                        <AddIcon fontSize='medium' />
                                    </IconButton>
                                </button>
                            </div>
                            
                            {/* Pending Active */}
                            <div className={showPending? "owner-dash-pending-container-active":"disable-pending-container-active"} >
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
                                                    <IconButton>
                                                        <CloseIcon fontSize='large'/>
                                                    </IconButton>
                                                </div>
                                                <div className="owner-dash-approve-cont">
                                                    <IconButton>
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
                            <div className="owner-dash-archived-container" >
                                <h2 >Archived Connections</h2>
                                <button className="owner-dash-small-button">
                                    <IconButton>
                                        <AddIcon fontSize='medium' />
                                    </IconButton>
                                </button>
                            </div>
                            <button className="owner-dash-remove-rental" onClick={()=>{}}>
                                <h2>Remove Rental Property</h2>
                            </button>
                        {/* End Detail Card */}
                        </div>    
                    </div>
                ))}
        </div>
    )
}

export default RentalCard
