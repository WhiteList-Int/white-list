import Img from '../images/white-list-text.svg';
import "./NavbarFixed.css";
import "./Button.css";
import { NavLink } from 'react-router-dom';

const NavbarFixed = () => {

    return(
        <nav className = 'nav-fixed'>
            <div className = 'nav-fixed-container'>
                <NavLink to = '/'><img className = 'nav-fixed-header-img' src = {Img} alt="WhiteList"></img></NavLink>
            </div> 
        </nav>
    )
}

export default NavbarFixed;