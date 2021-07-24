import Img from '../images/white-list-text.svg';
import "./ProfileNavbar.css";
import { NavLink } from 'react-router-dom';

const ProfileNavbar = () => {
    return(
        <nav className = 'nav-profile'>
            <div className = 'nav-profile-container'>
                <NavLink to = '/homepage'><img className = 'nav-profile-header-img' src = {Img} alt="WhiteList"></img></NavLink>
                <NavLink to="/profile-dashboard" className="profile-links">Renter's Profile</NavLink>
                <NavLink to="/profile-connects" className="profile-links">Your Connects</NavLink>
            </div> 
           
        </nav>
    )
}

export default ProfileNavbar;