import React from 'react';
import {NavLink} from 'react-router-dom'
import { renData } from '../renData.js';
import ratedStar from '../../images/star-rated.svg';
import unratedStar from '../../images/star-unrated.svg';
import '../css/RentalDashboard.css';

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
                        {renData.map((data) => (
                            <NavLink
                                to = {data.link}
                                className = {data.className}
                                id = {data.id}
                                key = {data.key}
                                style = {{
                                    backgroundImage: `url(${process.env.PUBLIC_URL + data.imgs})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgoundSize: 'cover'
                                }}>
                                <center><h2>{data.text}</h2></center>
                                <div className="stars-container">
                                    <img className="stars" src={(data.stars-1)>=0?{ratedStar}:{unratedStar}} alt="*"/>
                                    <img className="stars" src={(data.stars-2)>=0?{ratedStar}:{unratedStar}} alt="*"/>
                                    <img className="stars" src={(data.stars-3)>=0?{ratedStar}:{unratedStar}} alt="*"/>
                                    <img className="stars" src={(data.stars-4)>=0?{ratedStar}:{unratedStar}} alt="*"/>
                                    <img className="stars" src={(data.stars-5)>=0?{ratedStar}:{unratedStar}} alt="*"/>
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
