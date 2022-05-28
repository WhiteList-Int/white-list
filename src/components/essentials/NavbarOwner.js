import { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Img from '../images/white-list-text-gradient.svg';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const NavbarUser = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
	const navigate = useNavigate();

	const logout = async () => {
		try {
			await signOut(auth).then(() => {
				console.log('logged out successfully');
				navigate('/');
			});
		} catch (error) {
			console.log('Error Logging out');
		}
	};
	return (
		<>
			<nav className='navbar-user'>
				<div className='navbar-user-container'>
					<div>
						<NavLink to='/rental-dashboard/all'>
							<img
								className='navbar-user-header-img'
								src={Img}
								alt='WhiteList'
							></img>
						</NavLink>
					</div>
					<div className='navbar-user-container-side'>
						<h3>Nash-Taps</h3>
						<div className='navbar-user-profileIcon'>
							<AccountCircleIcon onClick={() => setOpenNavbar(!openNavbar)} />
						</div>
					</div>
				</div>
				<div className='navbar-user-profile-side'>
					<div
						className={
							openNavbar
								? 'navbar-user-profile-side-nav'
								: 'navbar-user-profile-side-nav-hide'
						}
					>
						<div className='navbar-user-profile-side-nav-options'>
							<NavLink
								to='/profile-dashboard'
								className='navbar-user-profile-side-nav-link'
							>
								Your Profile
							</NavLink>
						</div>
						<div className='navbar-user-profile-side-nav-options'>
							<NavLink
								to='/owner-rental'
								className='navbar-user-profile-side-nav-link'
							>
								Your Rentals
							</NavLink>
						</div>
						<div className='navbar-user-profile-side-nav-options'>
							<div
								className='navbar-user-profile-side-nav-link'
								onClick={logout}
							>
								Log-out
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavbarUser;
