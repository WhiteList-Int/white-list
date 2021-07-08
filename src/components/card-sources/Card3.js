import React from 'react';
import './Card-3.css';
import { Link } from 'react-router-dom';

const bubbles = [
    { className: 'bubble', link: '/link1', text: 'Hourly Rents', id: 'one', key: 11},
    { className: 'bubble', link: '/link2', text: 'Pension House', id: 'two', key: 12},
    { className: 'bubble', link: '/link3', text: 'Boarding House', id: 'three', key: 13},
    { className: 'bubble', link: '/link4', text: 'Appartment', id: 'four', key: 14},
    { className: 'bubble', link: '/link5', text: 'Hotel', id: 'five', key: 15}
];

function Card3() {
    return (
        <div className='card-3'>
            {bubbles.map((bubble) => {
                return (
                    <Link to={bubble.link} className = 'bubble-link' key={bubble.key}>
                        <div className = {bubble.className} id = {bubble.id}>
                            <div className="overlay"><h2>{bubble.text}</h2></div>
                        </div>
                    </Link>  
                )
            })}
        </div>
    )
}

export default Card3;