import React from 'react';
import { useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Navbar from './components/navbar-source/Navbar';
import Footer from './components/footer-source/Footer';
import Card1 from  './components/card-sources/Card1';
import Card2 from  './components/card-sources/Card2';
import Card3 from  './components/card-sources/Card3';

const Homepage = () => {
    const [scrollerPopup,setScrollerPopup] = useState(true);

    const showScrollUp = () => {
        if(window.scrollY > 100){
            setScrollerPopup(false);
        } else{
            setScrollerPopup(true);
        }
    }

    window.addEventListener('scroll', showScrollUp);

    return (
        <div className="homepage">
            <div className={scrollerPopup?"scroll-up-container-hide":"scroll-up-container-popup"}>
                <ArrowUpwardIcon 
                    onClick={()=>{window.scroll({top:0,left:0,behavior: 'smooth'})}} 
                    className={scrollerPopup?"scroll-up-hide":"scroll-up-popup"}
                    alt="Click to go back!"
                /> <span className="scroll-up-tooltip-text">Click here to go back -></span>
            </div>
            <Navbar />
            <div className = "homepage-cards">
                <Card1 className ='flex-card'/>            
                <Card2 className ='flex-card'/>
                <Card3 className ='flex-card'/> 
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;
