import React from 'react';
import Img from '../../images/white-list-text.svg';
import SearchBar from './../../search-bar/SearchBar';
import rentData from './../comp/renData';
import filterOptions from './../comp/filterOptions';
import "../css/RentalDashboard.css";
import { useRef } from 'react';

const RentalDashboard = () => {
    const filterRental = useRef("all");
    const filteredData = useRef(rentData);

    function handleChange(event) {
        console.log("Filter: "+ filterRental.current);
        console.log("Selected: "+ event.target.value);
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

    return (
        <div className="rental-dashboard">
            <div className="rental-dashboard-head">
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
                <SearchBar placeholder="Enter Location/Name: " data={filteredData} />
            </div>
            <div className="rental-dashboard-main-container">

            </div>
        </div>
    )
}
export default RentalDashboard;
