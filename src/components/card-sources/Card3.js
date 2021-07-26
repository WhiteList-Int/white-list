import React from 'react';
import Img4 from '../images/browse.svg';
import Img5 from '../images/book.svg';
import Img6 from '../images/contact.svg';
import Img10 from "../images/landlord.svg";
import { NavLink } from 'react-router-dom';

const Card3 = () => {

    const imgs = [
        { imgs: Img4, text: 'Browse', text2: 'Select through the listings', key: 1},
        { imgs: Img5, text: 'Book', text2: 'Reserve your desired space', key: 2},
        { imgs: Img6, text: 'Contact', text2: 'Communicate with the landlord', key: 3}
    ];

    return (
        <div className='card-3'>
            <div className="card-3-container">
                {imgs.map((list) => (
                    <div className = 'card-3-view' id = {list.id} key = {list.key}>
                        <div className="card-3-imgs">
                            <img src = {list.imgs} alt = {list.text}/>
                        </div>
                        <div className='card-3-img-text'>
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
                            <h1>Have a Place?</h1>
                        </div>
                        <div className="card-3-overlay-text-2">
                            <h2>Earn income by sharing your space</h2>
                        </div>
                    </div>
                    <NavLink className = 'card-3-learn-more-btn' to='/learn-more'>LEARN MORE</NavLink>
                </div>
                <div className="card-3-overlay-img">
                    <img src = {Img10} alt='landlord'/>
                </div>
            </div>
        </div>
    )
}

export default Card3;