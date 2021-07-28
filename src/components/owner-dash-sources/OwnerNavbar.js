import Img from '../images/white-list-text-gradient.svg';
import { NavLink } from 'react-router-dom';

function OwnerNavbar() {
    return (
        <nav className = 'navbar-profile'>
            <div className = 'navbar-profile-container'>
                <NavLink to = '/homepage'><img className = 'navbar-profile-container-header-img' src = {Img} alt="WhiteList"></img></NavLink>
                <NavLink to="/owner-dashboard" className="navbar-profile-container-links">Owner's Profile</NavLink>
                <NavLink to="/owner-rental" className="navbar-profile-container-links">Your Rental</NavLink>
                {/* <NavLink to="/profile-connects" className="owner-links">Your Connects</NavLink> */}
            </div> 
           
        </nav>
    )
}

export default OwnerNavbar
