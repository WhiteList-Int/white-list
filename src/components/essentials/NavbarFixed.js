import Img from '../images/white-list-text-black.svg';
import { NavLink } from 'react-router-dom';

const NavbarFixed = () => {
    return(
        <nav className = 'navbar-fixed'>
            <div className = 'navbar-fixed-container'>
                <NavLink to = '/homepage'><img className = 'navbar-fixed-header-img' src = {Img} alt="WhiteList"></img></NavLink>
            </div> 
        </nav>
    )
}

export default NavbarFixed;