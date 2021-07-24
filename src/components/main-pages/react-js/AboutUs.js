import React from 'react';
import Footer from '../../essentials/Footer';
import NavbarFixed from '../../essentials/NavbarFixed';
import Img1 from '../../images/nash.jpg';
import Img2 from '../../images/jez.jpg';
import Img3 from '../../images/merv.png';
import { motion } from 'framer-motion';
import { variants } from '../../../animation-variants.js';
import { transitions } from '../../../page-transitions.js';
import { NavLink } from 'react-router-dom';

function AboutUs() {
    const developers = [
        { className: 'devs', imgs: Img1, text: 'Nash Uriel Tapayan', text1: 'Project Manager and Front-end Developer',
        text2: 'I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.',
        text3: 'nashuriel.tapayan@cit.edu'},
        { className: 'devs', imgs: Img2, text: 'Jezreel Jedidiah Floreta', text1: 'Backend and Database Developer', 
        text2: 'When we have respect for ourselves and others, we gravitate towards connections that encourage that.',
        text3: 'jezreeljedidiah.floreta@cit.edu'},
        { className: 'devs', imgs: Img3, text: 'Mervin John Tampus', text1: 'UX Designer and Co-Developer',
        text2: 'A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful.',
        text3: 'mervinjohn.tampus@cit.edu'}
    ]

    return (
        <div>
            {window.scroll({top:0,left:0})}
            <motion.body 
                className="about"
                initial="fadeOut" 
                animate="fadeIn" 
                variants={variants}
                transition={transitions.tweenEaseOutFaster}
            >
                <NavbarFixed/> 
                <motion.div 
                    class="about-section" 
                    initial="slideOutYOpp" 
                    animate="slideInYOpp" 
                    variants={variants}
                    transition={transitions.tweenEaseOutFaster}
                >
                    <h1 className="about-team-title">About Us</h1>
                    <h2 className="about-h2">Mission</h2>
                    <p className="about-p">The primary goal of our company is to be trusted and reliable in providing
                        its users with a simplified method for finding and connecting people to rentable 
                        opportunities. It primarily is an online, software solution directed towards the needs of students 
                        and workers looking for affordable locations.
                        <br />
                        <p className="about2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora alias sed, laborum nisi saepe at officia illum itaque voluptas perspiciatis aliquid voluptatum tenetur iure eaque ullam sint ipsam quaerat repellat laudantium, qui tempore fuga. Officiis, incidunt nemo id maiores officia ipsa tempora quaerat neque vel autem consequuntur natus sint?</p>
                        </p>
                       
                    <h2 className="about-h2">Vision</h2>
                    <p className="about-p">In this new generation, we envision WhiteListers to have convenient access 
                        to rental amenities in our platform especially in housing or rooms/apartment 
                        that are available for rent. During the first year of operation, we want to 
                        gain a good reputation and establish a consistent cash flow and long-term 
                        corporate relationships.
                        <br />
                        <p className="about2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora alias sed, laborum nisi saepe at officia illum itaque voluptas perspiciatis aliquid voluptatum tenetur iure eaque ullam sint ipsam quaerat repellat laudantium, qui tempore fuga. Officiis, incidunt nemo id maiores officia ipsa tempora quaerat neque vel autem consequuntur natus sint?</p></p> 
                    </motion.div>

                <motion.div 
                    className="about-team-container"
                    initial="slideOutYOpp" 
                    animate="slideInYOpp"   
                    variants={variants}
                    transition={transitions.tweenEaseOutFaster}
                >
                    <h1 className="about-team-title">Our Team</h1>
                    {developers.map((dev) => (
                        <>
                        <div className="about-team-container-img">
                            <img src={dev.imgs} className="about-team-pic" alt={dev.text} />
                        </div>
                        <h2 className='about-team-text'>{dev.text}</h2>
                        <div className="about-team-container-description">
                            <p className="about-team-person-title">{dev.text1}</p>
                            <p className="about-team-person-saying">{dev.text2}</p>
                            <p>{dev.text3}</p>
                        </div>
                        <NavLink to='/' class="about-contact-button">Contact</NavLink>
                    </>
                     ))}
                </motion.div>
            </motion.body>
            <Footer />
        </div>
    )
}

export default AboutUs
