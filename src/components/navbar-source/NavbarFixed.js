import Img from '../images/white-list-text.svg';
import "./NavbarFixed.css";
import "./Button.css";

const NavbarFixed = () => {

    return(
        <nav className = 'nav-fixed'>
            <div className = 'nav-fixed-container'>
                <img className = 'nav-fixed-header-img' src = {Img} alt="WhiteList"></img>
            </div> 
        </nav>
    )
}

export default NavbarFixed;