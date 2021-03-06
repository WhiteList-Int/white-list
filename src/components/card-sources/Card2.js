import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import StartUp from '../pop-ups/StartUp';

const Card2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = useRef(window.location.pathname);

    const showScroll = () => {
        document.body.setAttribute('style','overflow-y:scroll;');
    }

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
                    <NavLink to={pathName.current} className='card-2-sign-up-btn' onClick={()=>{setIsOpen(true)}}>START NOW!</NavLink>
                    <StartUp open={isOpen} onClose={() => {setIsOpen(false);showScroll();}}/>
                </div>
            </div>
        </div>
    )
}

export default Card2;
