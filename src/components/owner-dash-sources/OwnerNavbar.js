import Img from '../images/white-list-text.svg';
import "./OwnerNavbar.css";
import { NavLink } from 'react-router-dom';

function OwnerNavbar() {
    return (
        <nav className = 'nav-owner'>
            <div className = 'nav-owner-container'>
                <NavLink to = '/homepage'><img className = 'nav-owner-header-img' src = {Img} alt="WhiteList"></img></NavLink>
                <NavLink to="/owner-dashboard" className="owner-links">Owner's Profile</NavLink>
                <NavLink to="/owner-rental" className="owner-links">Your Rental</NavLink>
                {/* <NavLink to="/profile-connects" className="owner-links">Your Connects</NavLink> */}
            </div> 
           
        </nav>
    )
}

export default OwnerNavbar
