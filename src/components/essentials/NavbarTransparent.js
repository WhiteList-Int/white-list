import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarFixed = () => {
	const [openNavbar, setOpenNavbar] = useState(false);

	return (
		<nav className='navbar-trans'>
			<div className='navbar-trans-container'>
				<div className='navbar-trans-profileIcon'>
					<AccountCircleIcon onClick={() => setOpenNavbar(!openNavbar)} />
				</div>
				<h3>Taps-Nash</h3>
			</div>
			<div className='navbar-trans-profile-side'>
				<div
					className={
						openNavbar
							? 'navbar-trans-profile-side-nav'
							: 'navbar-trans-profile-side-nav-hide'
					}>
					<div className='navbar-trans-profile-side-nav-options'>
						<NavLink
							to='/profile-dashboard'
							className='navbar-trans-profile-side-nav-link'>
							Your Profile
						</NavLink>
					</div>
					<div className='navbar-trans-profile-side-nav-options'>
						<NavLink
							to='/homepage'
							className='navbar-trans-profile-side-nav-link'>
							Log-out
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarFixed;
