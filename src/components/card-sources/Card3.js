import React from 'react';
import { NavLink } from 'react-router-dom';
import { imgs } from "./imgSrc-2";
import Img10 from "../images/landlord.svg";
import './Card-3.css';

const Card3 = () => {
    return (
        <div className='card-3'>
            <div className="card-3-container">
                {imgs.map((list) => (
                    <div className = {list.className} id = {list.id} key = {list.key}>
                        <div className="imgs">
                            <img src = {list.imgs} alt = {list.text}/>
                        </div>
                        <div className='img-text'>
                            <center>
                                <h2>{list.text}</h2>
                                <h3>{list.text2}</h3>
                            </center>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card-3-overlay">
                <div className="card-3-overlay-container">
                    <div className='card-3-overlay-text'>
                        <div className="card-3-overlay-text-1">
                            <h1>A landord?</h1>
                        </div>
                        <div className="card-3-overlay-text-2">
                            <h2>Earn income by sharing your space</h2>
                        </div>
                    </div>
                    <NavLink className = 'learn-more-btn' to='/learn-more'>LEARN MORE</NavLink>
                </div>
                <div className="card-3-overlay-img">
                    <img src = {Img10} alt='landlord'/>
                </div>
            </div>
        </div>
    )
}

export default Card3;