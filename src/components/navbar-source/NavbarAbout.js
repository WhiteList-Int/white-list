import Img from '../images/white-list-text.svg';
import Img2 from '../images/white-list-tagline.svg';
import "./NavbarAbout.css";
import "./Button.css";

const NavbarAbout = () => {

    return(
        <nav className = 'navbar-about-active'>
            <div className = 'container-about-active'>
                <img className = 'header-img-about-active' src = {Img} alt="WhiteList"></img>
                <img className = 'tagline-about-active' src = {Img2} alt="WhiteList"></img>
               
            </div> 
        </nav>
    )
}

export default NavbarAbout;