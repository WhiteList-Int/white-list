import React, {useState} from 'react'
import { rentals } from "./dataSrc";
import './RentalCard.css'
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

function RentalCard() {
    
    const [pendConnection, setPendConnection] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const [disableDescription, setDisDescription] = useState(false);

    return (
        <div>
                {rentals.map((rental) => (
                    <div className="owner-rental" id={rental.id} key={rental.key}>
                        <img className="owner-rental-img" src={rental.imgs} alt="owned-rental" />
                        <div className="owner-dash-rental-detail-card" id={rental.id} key={rental.key}>
                            <div className="owner-dash-title-container" id={rental.id} key={rental.key}>
                                <h2>{rental.name}</h2>
                            </div>
                            
                            {/* Description */}
                            <div className={disableDescription? 'owner-dash-dis-description' : 'owner-dash-description-container'} id={rental.id} key={rental.key}>
                                <h3 >Description </h3>
                                <p> {rental.desc}</p>
                                <div className={disableDescription ? 'owner-description-icon-disabled':'owner-description-icon-active'} id={rental.id} key={rental.key}>
                                    <IconButton>
                                    <CreateIcon color="action" />
                                    </IconButton>
                                </div>
                            </div>

                            {/* Pending Connections */}
                            <div className={pendConnection ? 'owner-dash-pending-container-active' : 'owner-dash-pending-container'} id={rental.id} key={rental.key}>
                                <h2 >Pending Connections</h2>
                                <div className="owner-dash-pending-container-active">
                                    <button className={buttonActive ? 'owner-dash-add-active': 'owner-dash-minus-disabled'} id={rental.id} key={rental.key}>
                                        <IconButton onClick={() => { setPendConnection(false);setDisDescription(false); setButtonActive(false);}}>
                                            <RemoveIcon fontSize='large'/>
                                        </IconButton>
                                    </button>
                                </div>
                                <div className="owner-dash-pending-container">
                                    <button className= {buttonActive ? 'owner-dash-minus-disabled':'owner-dash-add-active' } id={rental.id} key={rental.key}>
                                        <IconButton onClick={() => { setPendConnection(true); setDisDescription(true);setButtonActive(true);}}>
                                            <AddIcon fontSize='large'/>
                                        </IconButton>
                                    </button>
                                </div>
                            </div>


                            {/* Archived Connections */}
                            <div className="owner-dash-archived-container" id={rental.id} key={rental.key}>
                                <h2 >Archived Connections</h2>
                                <button className="owner-dash-add-active" id={rental.id} key={rental.key}>
                                    <IconButton>
                                        <AddIcon fontSize='large' />
                                    </IconButton>
                                </button>
                            </div>
                            <button className="owner-dash-remove-rental" id={rental.id} key={rental.key}>
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
