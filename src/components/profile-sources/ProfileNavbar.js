import Img from '../images/white-list-text-gradient.svg';
import { NavLink } from 'react-router-dom';

const ProfileNavbar = () => {
    return(
        <nav className = 'navbar-profile'>
            <div className = 'navbar-profile-container'>
                <NavLink to = '/homepage'><img className = 'navbar-profile-container-header-img' src = {Img} alt="WhiteList"></img></NavLink>
                <NavLink to="/profile-dashboard" className="navbar-profile-container-links">Renter's Profile</NavLink>
                <NavLink to="/profile-connects" className="navbar-profile-container-links">Your Connects</NavLink>
            </div> 
        </nav>
    )
}

export default ProfileNavbar;