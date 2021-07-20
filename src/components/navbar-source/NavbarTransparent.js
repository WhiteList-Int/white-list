import "./NavbarFixed.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';

const NavbarFixed = () => {

    return(
        <nav className = 'nav-fixed'>
            <div className = 'nav-trans-container'>
                <NavLink to = '/profile-dashboard' className="profileIcon"><AccountCircleIcon /></NavLink>
                <h3>Nash-Taps</h3>
            </div> 
        </nav>
    )
}

export default NavbarFixed;