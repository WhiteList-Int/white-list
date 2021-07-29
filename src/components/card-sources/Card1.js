import React from 'react';
import Img1 from '../images/lodginghouse.svg';
import Img2 from '../images/boarding-houses.svg';
import Img3 from '../images/apartments.svg';
import Img4 from '../images/rent-house.svg';
import Img5 from '../images/hotels.svg';
import Img6 from '../images/lease.svg';
import SignIn from './../pop-ups/SignIn';
import { useState, useRef } from 'react';

const Card1 = () => {
    const linkToOpen = useRef("all");
    const [isOpen, setIsOpen] = useState(false);
    const [isRedirect, setIsRedirect] = useState(false);

    const showScroll = () => {
        document.body.setAttribute('style','overflow-y:scroll;');
    }

    const bubbles = [
        { imgs: Img1, text: 'Lodging House', link: '/rental-dashboard/lodginghouse', id: 'b1', key: 1},
        { imgs: Img2, text: 'Boarding House', link: '/rental-dashboard/boardinghouse', id: 'b2', key: 2},
        { imgs: Img3, text: 'Apartment', link: '/rental-dashboard/apartment', id: 'b3', key: 3},
        { imgs: Img4, text: 'Rent House', link: '/rental-dashboard/renthouse', id: 'b4', key: 4},
        { imgs: Img5, text: 'Hotel', link: '/rental-dashboard/hotel', id: 'b5', key: 5},
        { imgs: Img6, text: 'Lease', link: '/rental-dashboard/lease', id: 'b6', key: 6}
    ];
    return (
        <div className = 'card-1'>
            <h1>VARIOUS RENTAL SERVICES</h1>
            <div className="card-1-container">
                {bubbles.map((bub) => (
                    <span className = 'card-1-bubbles' id = {bub.id} key = {bub.key} onClick={()=>{linkToOpen.current=bub.link;setIsOpen(true);}}>
                        <div className="card-1-bubbles-cont-img"><img className="card-1-bubbles-img" src = {bub.imgs} alt = {bub.text}/></div>
                        <div className='card-1-bubbles-text'><center><h2>{bub.text}</h2></center></div>
                    </span>
                ))}
            </div>
            <SignIn open={isOpen} 
                linkToOpen={linkToOpen.current}
                redirect={isRedirect}
                onRedirect={() => {setIsRedirect(!isRedirect)}}
                onClose={() => {setIsOpen(false);showScroll();}}
            />
        </div>
    )
}

export default Card1;
