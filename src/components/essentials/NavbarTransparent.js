import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { firestore } from '../../firebase-config';
import { getDoc, doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const NavbarFixed = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
	const [user, loading] = useAuthState(auth);
	var [email, setEmail] = useState('');
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
	useEffect(() => {
		getCurrentUser();
	}, [getCurrentUser, loading]);

	return (
		<nav className='navbar-trans'>
			<div className='navbar-trans-container'>
				<div className='navbar-trans-profileIcon'>
					<AccountCircleIcon onClick={() => setOpenNavbar(!openNavbar)} />
				</div>
				<h3>{email}</h3>
			</div>
			<div className='navbar-trans-profile-side'>
				<div
					className={
						openNavbar
							? 'navbar-trans-profile-side-nav'
							: 'navbar-trans-profile-side-nav-hide'
					}
				>
					<div className='navbar-trans-profile-side-nav-options'>
						<NavLink
							to='/profile-dashboard'
							className='navbar-trans-profile-side-nav-link'
						>
							Your Profile
						</NavLink>
					</div>
					<div className='navbar-trans-profile-side-nav-options'>
						<div
							className='navbar-trans-profile-side-nav-link'
							onClick={logout}
						>
							Log-out
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarFixed;
