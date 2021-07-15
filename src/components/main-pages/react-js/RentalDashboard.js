import React from 'react';
import ratedStar from '../../images/star-rated.svg';
import unratedStar from '../../images/star-unrated.svg';
import Img from '../../images/white-list-text.svg';
import SearchBar from '../../search-bar/SearchBar';
import "../css/RentalDashboard.css";
import rentData from '../comp/renData';

const RentalDashboard = () => {
    return (
        <>
            <div className="rental-dashboard">
                <div className="rental-dashboard-head">
                    <img className = 'rentel-dashboard-head-img' src = {Img} alt="WhiteList"></img>
                    <SearchBar placeholder="Enter Location/Type/Name: " data={rentData} />
                </div>
                <div className="rental-dashboard-filter-container">
                </div>
                <div className="rental-dashboard-main-container">

                </div>
            </div>
        </>
    )
}
export default RentalDashboard;
