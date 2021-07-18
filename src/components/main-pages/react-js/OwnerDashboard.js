import React from 'react'
import '../css/OwnerDashboard.css'
import NavbarAbout from '../../navbar-source/NavbarAbout';
import Img2 from '../../images/house4.jpg';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Footer from '../../footer-source/Footer'
import RentalCard from '../../owner-dash-sources/RentalCard';


function OwnerDashboard() {
    return (
        <>
        <body className="owner-dashboard">
            <div className="owner-dashboard-title-container">
                <h1 className="your-rental">Your Rental</h1>
                </div>
                <div className="owner-dashboard-card">

                <RentalCard />

                <div className="owner-rental">
                <img className="owner-rental-img" src={Img2} alt="owned-rental" />
                    <div className="owner-dash-rental-detail-card">
                        <div className="owner-dash-title-container">
                            <h2>Juan Place</h2>
                        </div>
                            <div className="owner-dash-pending-container-active">
                                <div className="owner-dash-pending-cont-row">
                                    <h3 >Pending Connections</h3>
                                    <div className="owner-dash-icon-minus">
                                    <IconButton>
                                        <RemoveIcon />
                                    </IconButton>
                                    </div>
                                </div>
                            <div className="owner-dash-pending-request">
                                <div className="owner-dash-pending-name-cont">
                                    <h3>Jolly Bhie</h3>
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
                                    <p>09123456789</p>
                                    <p>jobee@yahoo.com</p>
                                </div>
                            </div>
                            <div className="owner-dash-pending-request">
                                <div className="owner-dash-pending-name-cont">
                                    <h3>Mac Dunald</h3>
                                    <div className="owner-dash-button-cont">
                                        <div className="owner-dash-disapprove-cont">
                                            <IconButton>
                                                <CloseIcon fontSize='large'/>
                                            </IconButton>
                                        </div>
                                        <div className="owner-dash-approve-cont">
                                            <IconButton>
                                                <CheckIcon color= 'action' fontSize='large' />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="owner-dash-pending-cont-row">
                                    <p>09123456789</p>
                                    <p>mcdnald@yahoo.com</p>
                                </div>
                            </div>
                            </div>
                        <div className="owner-dash-archived-container">
                            <h2 >Archived Connections</h2>
                            <div className="owner-dash-icon-add">
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                            </div>
                        </div>
                        <button className="owner-dash-remove-rental">
                            <h2>Remove Rental Property</h2>
                        </button>
                    </div>
                </div>

                <NavbarAbout />
            </div>
        </body>
        <Footer />
        </>
    )
}

export default OwnerDashboard
