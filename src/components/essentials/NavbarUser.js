import { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Img from '../images/white-list-text-gradient.svg';
import { NavLink } from 'react-router-dom';

const NavbarUser = () => {
    const [openNavbar,setOpenNavbar] = useState(false);
    return(
        <>
        <nav className = 'navbar-user'>
            <div className = 'navbar-user-container'>
                <div>
                    <NavLink to = '
                    '><img className = 'navbar-user-header-img' src = {Img} alt="WhiteList"></img></NavLink>
                </div>
                <div className="navbar-user-container-side">
                    <h3>Nash-Taps</h3>
                    <div className="navbar-user-profileIcon"><AccountCircleIcon onClick={()=>setOpenNavbar(!openNavbar)} /></div>
                </div>
            </div>
            <div className="navbar-user-profile-side">
                <div className={openNavbar?"navbar-user-profile-side-nav":"navbar-user-profile-side-nav-hide"}>
                    <div className='navbar-user-profile-side-nav-options'>
                        <NavLink to="/profile-dashboard" className="navbar-user-profile-side-nav-link">Your Profile</NavLink>
                    </div>
                    <div className='navbar-user-profile-side-nav-options'>
                        <NavLink to="/profile-connects" className="navbar-user-profile-side-nav-link">Your Connects</NavLink>
                    </div>
                    <div className='navbar-user-profile-side-nav-options'>
                        <NavLink to="/homepage" className="navbar-user-profile-side-nav-link">Log-out</NavLink>
                    </div>                    
                </div>
            </div>
        </nav>
        
    </>
    )
}

export default NavbarUser;