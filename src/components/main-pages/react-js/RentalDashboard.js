import React from 'react';
import {NavLink} from 'react-router-dom'
import { rentalData } from './renData';
import ratedStar from '../../images/star-rated.svg';
import unratedStar from '../../images/star-unrated.svg';
import "../css/RentalDashboard.css";

const RentalDashboard = () => {
    return (
        <>
            <div className="rental-dashboard">
                <section className="rental-dasboard-side-bar">

                </section>
                <section className="rental-dashboard-body">
                    <div className="rental-dashboard-seach-bar-head">

                    </div>
                    <div className="rental-dashboard-main-container">

                    </div>
                </section>
            </div>
        </>
    )
}
export default RentalDashboard;
