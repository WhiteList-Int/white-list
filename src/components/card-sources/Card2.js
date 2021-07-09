import React from 'react';
import './Card-2.css';
import { Link } from 'react-router-dom';

function Card2() {
    return (
        <div className='card-2'>
            <div className="card-2-container">
                <div className="card-2-header">
                    <h1>Easy and Convenient,</h1>
                    <h2>Find what you need.</h2>
                </div>
                <div className="card-2-contents">
                    <h3>
                        Save your time travelling and looking for 
                        available spaces in Cebu.
                    </h3>
                    <h3>You can browse it all here!</h3>
                    <Link to="/Sign-up" className='sign-up-btn'>START NOW!</Link>
                </div>
            </div>
        </div>
    )
}

export default Card2;
