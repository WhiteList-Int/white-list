import './Card.css';
import React from 'react';
import { Link } from 'react-router-dom';

const bubbles = [
    { className: 'bubble', link: '/link1', text: 'Hourly Rents', id: 'one'},
    { className: 'bubble', link: '/link2', text: 'Pension House', id: 'two'},
    { className: 'bubble', link: '/link3', text: 'Boarding House', id: 'three'},
    { className: 'bubble', link: '/link4', text: 'Appartment', id: 'four'},
    { className: 'bubble', link: '/link5', text: 'Hotel', id: 'five'}
];

export default function Card1() {
    return (
        <div className='card-1'>
            {bubbles.map((bubble) => {
                return (
                    <Link to={bubble.link} className = 'bubble-link'>
                        <div className = {bubble.className} id = {bubble.id}>
                            <h2>{bubble.text}</h2>
                        </div>
                    </Link>  
                )
            })}
        </div>
    )
}
