import React from 'react';
import {NavLink} from 'react-router-dom'
import { rentalData } from './renData';
import ratedStar from '../../images/star-rated.svg';
import unratedStar from '../../images/star-unrated.svg';
import "../css/RentalDashboard.css";

const RentalDashboard = () => {

    return (
        <div className="rental-dashboard-box">
            <div className="rent-dash-container">
                <div className="rent-dash-left-box">

                </div>
                <div className="rent-box-right-box">
                    <div className="upper-right-box">

                    </div>
                    <div className="lower-right-box">
                    {rentalData.map((rentData) => (
                        <NavLink to = {rentData.link} className = {rentData.className} id = {rentData.id} key = {rentData.key}>
                            <div className="dash-gallery-items"style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + rentData.imgs})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                                <h2>{rentData.text}</h2>
                                <div className="star-containers">
                                    <img className="stars" src={(rentData.stars-1)>=0?ratedStar:unratedStar} alt="*"/>
                                    <img className="stars" src={(rentData.stars-2)>=0?ratedStar:unratedStar} alt="*"/>
                                    <img className="stars" src={(rentData.stars-3)>=0?ratedStar:unratedStar} alt="*"/>
                                    <img className="stars" src={(rentData.stars-4)>=0?ratedStar:unratedStar} alt="*"/>
                                    <img className="stars" src={(rentData.stars-5)>=0?ratedStar:unratedStar} alt="*"/>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalDashboard;
