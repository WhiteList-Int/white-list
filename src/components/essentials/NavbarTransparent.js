import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState }  from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../FirebaseStuff/AuthContext'

const NavbarFixed = () => {
    
    const [openNavbar,setOpenNavbar] = useState(false);
    const { currentUser } = useAuth();

    return(
        <nav className = 'navbar-trans'>
            <div className = 'navbar-trans-container'>
                <div className="navbar-trans-profileIcon">
                    <img onClick={()=>setOpenNavbar(!openNavbar)}
                    src = {currentUser.photoURL || AccountCircleIcon} alt='Profile_Picture'/></div>
                <h3>{currentUser.displayName || 'User Name'}</h3>
            </div>
            <div className="navbar-trans-profile-side">
                <div className={openNavbar?"navbar-trans-profile-side-nav":"navbar-trans-profile-side-nav-hide"}>
                    <div className='navbar-trans-profile-side-nav-options'>
                        <NavLink to="/profile-dashboard" className="navbar-trans-profile-side-nav-link">Your Profile</NavLink>
                    </div>
                    <div className='navbar-trans-profile-side-nav-options'>
                        <NavLink to="/homepage" className="navbar-trans-profile-side-nav-link">Log-out</NavLink>
                    </div>                    
                </div>
            </div>
        </nav>
    )
}

export default NavbarFixed;