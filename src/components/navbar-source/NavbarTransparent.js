import "./NavbarFixed.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState }  from 'react';
import { NavLink } from 'react-router-dom';

const NavbarFixed = () => {
    const [openNavbar,setOpenNavbar] = useState(false);

    return(
        <nav className = 'nav-fixed'>
            <div className = 'nav-trans-container'>
                <div className="profileIcon"><AccountCircleIcon onClick={()=>setOpenNavbar(!openNavbar)} /></div>
                <h3>Nash-Taps</h3>
            </div>
            <div className="profile-side-nav-container">
                <div className={openNavbar?"profile-side-nav":"profile-side-nav-hide"}>
                    <div className='profile-side-nav-options'>
                        <NavLink to="/profile-dashboard" className="profile-side-nav-link">Your Profile</NavLink>
                    </div>
                    <div className='profile-side-nav-options'>
                        <NavLink to="/homepage" className="profile-side-nav-link">Log-out</NavLink>
                    </div>                    
                </div>
            </div>
        </nav>
    )
}

export default NavbarFixed;