import React from 'react';
import Img2 from './components/images/white-list-icon-gradient.svg';
import Navbar from './components/navbar-source/Navbar';
import Footer from './components/footer-source/Footer';
import Card1 from  './components/card-sources/Card1';
import Card2 from  './components/card-sources/Card2';
import Card3 from  './components/card-sources/Card3';
import './App.css';

const Homepage = () => {
    return (
        <div className="homepage">
            {document.body.setAttribute('style','overflow:scroll;')}
            <Navbar />
            <img className = "start-up--bg-icon" src = {Img2} alt="WhiteList"></img>
            <div className = "cards">
                <Card1 className ='flex-card'/>            
                <Card2 className ='flex-card'/>
                <Card3 className ='flex-card'/> 
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;
