import React from 'react';
import { Link } from 'react-router-dom';
import { bubbles } from "./imgSrc";
import "./Card-1.css";

const Card1 = () => {
    return (
        <div className = 'card-1'>
            <h1>VARIOUS RENTAL SERVICES</h1>
            <div className="card-1-container">
                {bubbles.map((bub) => (
                    <Link to = {bub.link} className = {bub.className} id = {bub.id} key = {bub.key}>
                        <div className="img-containers">
                            <img src = {bub.imgs} alt = {bub.text}/>
                        </div>
                        <div className='bubble-text'><center><h2>{bub.text}</h2></center></div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Card1;
