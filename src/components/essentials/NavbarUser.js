import { useState, useEffect } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Img from '../images/white-list-text-gradient.svg';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { firestore } from '../../firebase-config';
import { getDoc, doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavbarUser = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
	const [user, loading] = useAuthState(auth);
	var [email, setEmail] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		getCurrentUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getCurrentUser = async () => {
		const userDoc = doc(firestore, 'user', user.uid);
		await getDoc(userDoc).then((docSnap) => {
			// console.log(user.uid);
			if (docSnap.exists()) {
				// console.log('Document data:', docSnap.data());
				const myData = docSnap.data();
				setEmail(myData.email);
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		});
	};
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
						<NavLink
							to='/
                    '
						>
							<img
								className='navbar-user-header-img'
								src={Img}
								alt='WhiteList'
							></img>
						</NavLink>
					</div>
					<div className='navbar-user-container-side'>
						<h3>{email}</h3>
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
								to='/profile-connects'
								className='navbar-user-profile-side-nav-link'
							>
								Your Connects
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
