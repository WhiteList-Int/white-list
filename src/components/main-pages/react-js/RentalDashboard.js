import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { variants } from '../../../animation-variants.js';
import { transitions } from '../../../page-transitions.js';
import sampleData from './../comp/sampleData';
import filterOptions from './../comp/filterOptions';
import SearchBar from './../../search-bar/SearchBar';
import Img from '../../images/white-list-text.svg';
import starFilled from '../../images/star-rated.svg';
import starUnfilled from '../../images/star-unrated.svg';
import FilterBar from './../../search-bar/FilterBar';
import NavbarTransparent from "../../essentials/NavbarTransparent";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RoomIcon from '@material-ui/icons/Room';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Select from 'react-select';
import "../css/RentalDashboard.css";

const RentalDashboard = () => {
    const filterRental = useRef("all");
    const currentWindow = useRef("startOfPage");
    const [isChanged,setIsChanged] = useState(false);
    const [windowState, setWindowState] = useState(true);

    const [rentalFilter,setRentalFilter] = useState(()=>{
        const pathName = window.location.pathname;
        var defaultRentalFilter = "all";
        filterOptions.map((data) => {
            if(pathName.includes(data.value)){
                defaultRentalFilter = data.value;
            }
        });
        console.log(defaultRentalFilter);
        return defaultRentalFilter;
    });

    const filteredData = useRef(sampleData.filter((data) => {
        return data.category.toLowerCase().includes(rentalFilter.toLowerCase());
    }));
    
    const handleSearchChange = () => {
        setIsChanged(!isChanged);
    }

    function handleChange(event) {

        if(event===null) event = {value:"all"};
        console.log("Filter: "+ filterRental.current);
        console.log("Selected: "+ event.value);
        setRentalFilter(event.value);
        filterRental.current = event.value;

        const newFilter = sampleData.filter((data) => {
            return data.category.toLowerCase().includes(filterRental.current.toLowerCase());
        });
        if (filterRental.current === "all") {
            filteredData.current = sampleData;
        } else {
            filteredData.current = newFilter;
        }
        console.log("newFilter: "+ filterRental.current);
        console.log("Data: "+ filteredData.current);
    };

    function handleRadioChange(event) {
        console.log("Filter: "+ filterRental.current);
        console.log("Selected: "+ event.target.value);
        setRentalFilter(event.target.value);
        filterRental.current = event.target.value;

        const newFilter = sampleData.filter((data) => {
            return data.category.toLowerCase().includes(filterRental.current.toLowerCase());
        });
        if (filterRental.current === "all") {
            filteredData.current = sampleData;
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
        if(window.innerWidth<600){
            setWindowState(false);
        } else{
            setWindowState(true);
        }
        document.getElementById("startOfPage").scrollIntoView({bottom:0});
        currentWindow.current="startOfPage";
        console.log(currentWindow.current);
    });

    useEffect(() => {
        if(window.innerWidth<600){
            setWindowState(false);
        } else{
            setWindowState(true);
        }
        document.body.setAttribute('style','overflowX:hidden;');
        window.scrollTo({top:0,left:0});
        console.log(currentWindow.current);
        filteredData.current=filteredData.current;
    },[rentalFilter,isChanged]);

    return (
        <motion.div 
            className="rental-dashboard-bg"
            id="scrolling"
            initial="fadeOut" 
            animate="fadeIn" 
            variants={variants}
            transition={transitions.linear}
        >
            <section className="rental-dashboard-head">
                <nav id="startOfPage"></nav>
                <div className="rental-nav-trans"><NavbarTransparent /></div>
                <img className = 'rentel-dashboard-head-img' src = {Img} alt="WhiteList"></img>
                <Select
                    classNamePrefix="filter-select"
                    placeholder="Filter Selection"
                    defaultValue={rentalFilter}
                    isClearable='false'
                    isSearchable='false'
                    className = {windowState?"rental-dashboard-filter-select-hide":"rental-dashboard-filter-select"}
                    name="Filter Selection"
                    value={filterOptions.find(obj => obj.value === filterOptions)}
                    options={filterOptions}
                    onChange={handleChange}
                />
                <form className={windowState?"rental-dashboard-filter-form":"rental-dashboard-filter-form-hide"}>
                    {filterOptions.map((filter, key)=>{
                        return(
                            <div className="rental-dashboard-filter-options">
                                <input
                                    type = "radio"
                                    checked = {rentalFilter===filter.value}
                                    value = {filter.value}
                                    name = "rentalType"
                                    onChange = {handleRadioChange}
                                    key = {key}
                                />
                                <h4>{filter.label}</h4>
                            </div>
                        );
                    })}
                </form>
                <FilterBar
                    placeholder="Enter Location/Name:" 
                    onchange={handleSearchChange}
                    rawData={rentalFilter==="all"?sampleData:sampleData.filter((data) => {
                        return data.category.toLowerCase().includes(rentalFilter.toLowerCase());
                    })} 
                    data={filteredData} 
                    address={currentWindow} 
                />
            </section>
            <section className="rental-dashboard-main-container">
                <nav id="mainPage"/>
                <div className="rental-dashboard-main-navbar">
                    <div className="rental-navbar-section">
                        <ArrowBackIcon className="rental-dashboard-back-icon" onClick={backToHeader}/>
                        <h2>Rental Search</h2>
                    </div>
                    <div className="filter-box">
                        <SearchBar 
                            placeholder="Enter Location/Name:" 
                            onchange={handleSearchChange}
                            rawData={rentalFilter==="all"?sampleData:sampleData.filter((data) => {
                                return data.category.toLowerCase().includes(rentalFilter.toLowerCase());
                            })} 
                            data={filteredData} 
                            address={currentWindow} 
                        />
                    </div>
                </div>
                <div className="main-rental-list-container">
                    {filteredData.current.map((rental,key) => {
                        return (
                            <NavLink to = "/" className = "main-rental-list-options" key = {rental.key}>
                                <div className="main-rental-list-options">
                                    <div
                                        className="main-rental-list-options-imgs"
                                        style={{
                                            width: 300,
                                            height: 200,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center center',
                                            backgroundImage: `url(${rental.imgs})`
                                        }}
                                    >
                                        <h4>{rental.categoryName}</h4>
                                        <h2>{rental.name}</h2>
                                    </div>
                                    <div className="information-box">
                                        <div className="stars-container">
                                            <img src={(rental.stars)>=1?starFilled:starUnfilled} alt="*"/>
                                            <img src={(rental.stars)-1>=1?starFilled:starUnfilled} alt="*"/>
                                            <img src={(rental.stars)-2>=1?starFilled:starUnfilled} alt="*"/>
                                            <img src={(rental.stars)-3>=1?starFilled:starUnfilled} alt="*"/>
                                            <img src={(rental.stars)-4>=1?starFilled:starUnfilled} alt="*"/>
                                            <div className="head-count">
                                                <VpnKeyIcon className="capacity-icon"/>
                                                <h4>{rental.capacity}</h4>
                                            </div>
                                        </div>
                                        <div className="text-box">
                                            <RoomIcon className="location-icon"/>
                                            <h4>{rental.value}</h4>
                                        </div>
                                        <div className="price-box">
                                            <h3>PHP</h3><h2>{rental.minPrice.toFixed(2)}</h2>
                                        </div>
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
