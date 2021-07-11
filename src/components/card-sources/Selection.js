import './Card-1.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const bubbles = [
    { className: 'bubble', link: '/link1', text: 'Hourly Rents', id: 'one', key: 1},
    { className: 'bubble', link: '/link2', text: 'Pension House', id: 'two', key: 2},
    { className: 'bubble', link: '/link3', text: 'Boarding House', id: 'three', key: 3},
    { className: 'bubble', link: '/link4', text: 'Appartment', id: 'four', key: 4},
    { className: 'bubble', link: '/link5', text: 'Hotel', id: 'five', key: 5}
];

const Card1 = () => {
    return (
        <div className='card-1'>
            <h1> Rent Options </h1>
            <div className="bubble-container">
                {bubbles.map((bubble) => {
                    return (
                        <NavLink to={bubble.link} className = 'bubble-link' key={bubble.key}>
                            <div className = {bubble.className} id = {bubble.id}>
                                <div className = 'bubble-overlay'>
                                    <h2>{bubble.text}</h2>
                                </div>
                            </div>
                        </NavLink>  
                    )
                })}
            </div>
        </div>
    )
}

export default Card1;