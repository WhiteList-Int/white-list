import React from 'react';
import rentData from './../comp/renData';
import starFilled from '../../images/star-rated.svg';
import starUnfilled from '../../images/star-unrated.svg';
import Img from '../../images/white-list-text.svg';
import SearchBar from './../../search-bar/SearchBar';
import filterOptions from './../comp/filterOptions';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { motion } from 'framer-motion';
import { variants } from '../../../animation-variants.js';
import { transitions } from '../../../page-transitions.js';
import { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/RentalDashboard.css";

const RentalDashboard = () => {
    const filterRental = useRef("all");
    const filteredData = useRef(rentData);
    const currentWindow = useRef("startOfPage");
    const [rentalFilter,setRentalFilter] = useState("");

    function handleChange(event) {
        console.log("Filter: "+ filterRental.current);
        console.log("Selected: "+ event.target.value);
        setRentalFilter(event.target.value);
        filterRental.current = event.target.value;

        const newFilter = rentData.filter((data) => {
            return data.category.toLowerCase().includes(filterRental.current.toLowerCase());
        });
        if (filterRental.current === "all") {
            filteredData.current = rentData;
        } else {
            filteredData.current = newFilter;
        }
        console.log("newFilter: "+ filterRental.current);
        console.log("Data: "+ filteredData.current);
    };

    const backToHeader = () => {
        console.log("Executed");
        var element = document.getElementById("startOfPage");
        currentWindow.current = "startOfPage";
        element.scrollIntoView({
          behavior: "smooth"
        });
    };

    window.addEventListener('resize',()=>{
        document.getElementById(currentWindow.current).scrollIntoView({bottom:0});
         console.log(currentWindow.current)
    });

    useEffect(() => {
        filteredData.current=filteredData.current;
    },[rentalFilter]);

    return (
        <motion.div 
            className="rental-dashboard-bg"
            id="scrolling"
            initial="fadeOut" 
            animate="fadeIn" 
            exit="fadeOut"
            variants={variants}
            transition={transitions.linear}
        >
            {document.body.setAttribute('style','overflowX:hidden;')}
            {window.scrollTo({top:0,left:0})}
            <section className="rental-dashboard-head">
                <span id="startOfPage"/>
                <img className = 'rentel-dashboard-head-img' src = {Img} alt="WhiteList"></img>
                <form className="rental-dashboard-filter-form">
                    {filterOptions.map((filter, key)=>{
                        return(
                            <div className="rental-dashboard-filter-options">
                                <input
                                    type = "radio"
                                    value = {filter.value}
                                    name = "rentalType"
                                    onChange = {handleChange}
                                    key = {key}
                                />
                                <h4>{filter.label}</h4>
                            </div>
                        );
                    })}
                </form>
                <SearchBar placeholder="Enter Location/Name: " data={filteredData} address={currentWindow} />
            </section>
            <section className="rental-dashboard-main-container">
                <span id="mainPage"/>
                <div className="rental-dashboard-main-navbar">
                    <ArrowBackIcon className="rental-dashboard-back-icon" onClick={backToHeader}/>
                    <h2>Search Results</h2>
                </div>
                <div className="main-rental-list-container">
                    {filteredData.current.map((rental,key) => {
                        return (
                            <NavLink to = {rental.link} className = "main-rental-list-options" key = {rental.key}>
                                <div
                                    className="main-rental-list-options-imgs"
                                    style={{
                                        width: 200,
                                        height: 200,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        backgroundBlendMode: 'overlay',
                                        backgroundImage: `url(${rental.imgs})`
                                    }}
                                >
                                    <div className="overlay-color"><h5>{rental.name}</h5></div>
                                </div>
                                <div className="information-box">
                                    <div className="text-box">
                                        <h2>{rental.value}</h2>
                                    </div>
                                    <div className="stars-container">
                                        <img src={(rental.stars)>0?starFilled:starUnfilled} alt="*"/>
                                        <img src={(rental.stars)-1>0?starFilled:starUnfilled} alt="*"/>
                                        <img src={(rental.stars)-2>0?starFilled:starUnfilled} alt="*"/>
                                        <img src={(rental.stars)-3>0?starFilled:starUnfilled} alt="*"/>
                                        <img src={(rental.stars)-4>0?starFilled:starUnfilled} alt="*"/>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </section>
        </motion.div>
    )
}
export default RentalDashboard;
