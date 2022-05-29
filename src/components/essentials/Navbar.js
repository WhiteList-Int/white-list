import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../images/white-list-text-black.svg';
import Img2 from '../images/white-list-tagline-black.svg';
import Img3 from '../images/startupPage.svg';
import SignIn from '../pop-ups/SignIn';

import { auth } from '../../firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase-config';

const Navbar = () => {
	// const pathName = useRef(window.location.pathname);
	const [startButton, setStartButton] = useState(false);
	const [navbar, setNavbar] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isRedirect, setIsRedirect] = useState(false);

	const showScroll = () => {
		document.body.setAttribute('style', 'overflow-y:scroll;');
	};

	const changeNavbar = () => {
		if (window.scrollY >= 50) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	const changeButton = () => {
		if (window.scrollY >= 50) {
			setStartButton(true);
		} else {
			setStartButton(false);
		}
	};

	window.addEventListener('scroll', changeNavbar);
	window.addEventListener('scroll', changeButton);

	const [user, loading] = useAuthState(auth);
	const [isOwner, setIsOwner] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			getCurrentUser();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	const getCurrentUser = async () => {
		const userDoc = doc(firestore, 'user', user.uid);
		await getDoc(userDoc).then((docSnap) => {
			if (docSnap.exists()) {
				// console.log('Document data:', docSnap.data());
				const myData = docSnap.data();
				setIsOwner(myData.isOwner);
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		});
	};

	return (
		<>
			<nav className={navbar ? 'navbar-active' : 'navbar'}>
				<div className='navbar-wrapper'>
					<div
						className={navbar ? 'navbar-container-active' : 'navbar-container'}
					>
						<img
							className={
								navbar ? 'navbar-header-img-active' : 'navbar-header-img'
							}
							src={Img}
							alt='WhiteList'
						></img>
						<img
							className={navbar ? 'navbar-tagline-active' : 'navbar-tagline'}
							src={Img2}
							alt='WhiteList'
						></img>
						<div
							className={
								startButton
									? 'navbar-btn-top-container'
									: 'navbar-btn-bot-container'
							}
						>
							<span
								to={window.location.href}
								className={startButton ? 'navbar-btn-top' : 'navbar-btn-bot'}
								onClick={() => {
									setIsOpen(true);
									setIsRedirect(false);
									isOwner
										? navigate('/owner-dashboard')
										: user
										? navigate('/rental-dashboard')
										: navigate('/');
								}}
							>
								{isOwner ? 'DASHBOARD' : user ? 'DASHBOARD' : 'LOG-IN'}
							</span>
							<SignIn
								open={isOpen}
								redirect={isRedirect}
								onRedirect={() => {
									setIsRedirect(!isRedirect);
								}}
								onClose={() => {
									setIsOpen(false);
									showScroll();
								}}
							/>
						</div>
					</div>
				</div>
				<img className='navbar-start-up-bg-icon' src={Img3} alt='WhiteList' />
			</nav>
		</>
	);
};

export default Navbar;
