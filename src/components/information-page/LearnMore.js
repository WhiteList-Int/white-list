import React from 'react';
import Img1 from '../images/stock1.jpg';
import Img2 from '../images/stock2.jpg';
import Img3 from '../images/stock3.jpg';
import Img4 from '../images/stock4.jpg';
import Img5 from '../images/stock5.jpg';
import Img6 from '../images/stock6.jpg';
import Footer from '../essentials/Footer'
import NavbarFixed from '../essentials/NavbarFixed';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants.js';
import { transitions } from '../../page-transitions.js';

function LearnMore() {

    return (
        <>
            <NavbarFixed />
            <body className="learn-more">
                {window.scroll(0,0)}

                <motion.div 
                    className="learn-more-container"
                    initial="slideOutYOpp" 
                    animate="slideInYOpp"
                    exit="fadeOut"
                    variants={variants}
                    transition={transitions.tweenEaseOutFast}
                >
                <div className="learn-more-container-section">
                    <div className="learn-more-container-section-1">
                        <img src={Img1} alt="" />
                        <div className="learn-more-container-section-overlay">
                            <h1>Host your Rental <br/> with <span>WhiteList</span></h1>
                        </div>
                    </div>
                    <div className="learn-more-container-section-2">
                        <h2>We'll help you gain new connections</h2>
                        <div className="learn-more-container-section-2-grid">
                        
                                <img src={Img2} alt="" />
                          
                            
                                <img src={Img3} alt="" />
                            
                           
                                <img src={Img4} alt="" />
                           
                        </div>
                    </div>
                </div>
               
                {/* <img src={Img2} alt="stock photo2" />    
                <img src={Img3} alt="stock photo3" />    
                <img src={Img4} alt="stock photo4" />    
                <img src={Img5} alt="stock photo5" />    
                <img src={Img6} alt="stock photo6" />     */}
                
                    {/* <h1 className="learn-more-h1">General</h1>
                    <h2 className="learn-more-h2" id="type1-h2">What is a Rental Owner?</h2>
                    <p className="learn-more-p" id="type1-p">The primary goal of our company is to be trusted and reliable in providing
                        its users with a simplified method for finding and connecting people to rentable 
                        opportunities. It primarily is an online, software solution directed towards the needs of students 
                        and workers looking for affordable locations.
                        <br />
                        <p className="learn-more-p" id="type2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora alias sed, laborum nisi saepe at officia illum itaque voluptas perspiciatis aliquid voluptatum tenetur iure eaque ullam sint ipsam quaerat repellat laudantium, qui tempore fuga. Officiis, incidunt nemo id maiores officia ipsa tempora quaerat neque vel autem consequuntur natus sint?</p>
                        </p>
                       
                    <h2 className="learn-more-h2" id="type2-h2">How do Rental Owners host their rental?</h2>
                    <p className="learn-more-p" id="type3-p">Once you contact WhiteList, you will receive an email 
                    from us containing the requirements and instructions on how to host your rental. */}
                </motion.div>
            </body>
            <Footer />
        </>
    )
}

export default LearnMore
