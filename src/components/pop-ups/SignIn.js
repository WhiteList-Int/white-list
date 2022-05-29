import React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants';
import { transitions } from '../../page-transitions';
import { useNavigate } from 'react-router-dom';
import ReactDom from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
// import { useAuth } from '../FirebaseStuff/AuthContext'
// import accountsData from './../main-pages/comp/accountsData';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firestore } from '../../firebase-config';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function SignIn({
	open,
	linkToOpen,
	redirect,
	onClose,
	onRedirect,
}) {
	const pathName = useRef(window.location.pathname);
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	const login = async () => {
		try {
			await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
			alert('Successfully Logged In!');
			onClose();
			navigateCurrentUser();
		} catch (err) {
			alert('Incorrect Credentials');
			console.log(err.message);
		}
	};

	const register = async () => {
		//sign up back-end
		const newUser = {
			email: registerEmail,
			isOwner: false,
			name: '',
			gender: '',
			contact: '',
			occupation: '',
			bday: '',
		};

		//create user for Authentication
		try {
			await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			).then(async (userCredential) => {
				// User Created for Auth

				setTimeout(alert('Successfully Registered User!'), 300);
				const userID = userCredential.user.uid;
				console.log(userID);
				//create userData for Firestore
				try {
					await setDoc(doc(firestore, 'user', userID), newUser);
				} catch (error) {
					console.log(error);
				}
				setRegisterEmail('');
				setRegisterPassword('');
				onClose();
				navigateCurrentUser();
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	const navigateCurrentUser = async () => {
		const userDoc = doc(firestore, 'user', user.uid);
		await getDoc(userDoc).then((docSnap) => {
			if (docSnap.exists()) {
				// console.log('Document data:', docSnap.data());
				const myData = docSnap.data();
				myData.isOwner
					? navigate('/owner-dashboard')
					: navigate('/rental-dashboard');
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		});
	};

	if (!open) return null;

	return ReactDom.createPortal(
		<>
			{document.body.setAttribute('style', 'overflow:hidden;')}
			<motion.div
				className='sign-in'
				initial='fadeOut'
				animate='fadeIn'
				exit='fadeOut'
				variants={variants}
				transition={transitions.tweenEaseInFaster}
			>
				<div className='exit-zone' onClick={onClose} />
				<div className='sign-in-container'>
					<div className='sign-in-container-inner'>
						<div
							hidden={redirect}
							id='toggleLoginTitle'
							className='sign-in-title'
						>
							<h1>LOG IN</h1>
						</div>
						<div
							hidden={!redirect}
							id='toggleSignUpTitle'
							className='sign-in-title'
						>
							<h1>SIGN UP</h1>
						</div>
						<div hidden={true} id='toggleSignUpTitle' className='sign-in-title'>
							<h1>Error!</h1>
						</div>
						<div className='sign-in-fill-boxes'>
							<input
								className=''
								type='text'
								placeholder='Email'
								required
								value={loginEmail}
								onChange={(e) => {
									setLoginEmail(e.target.value);
									setRegisterEmail(e.target.value);
								}}
							/>
							<input
								className=''
								type='password'
								placeholder='************'
								required
								value={loginPassword}
								onChange={(e) => {
									setLoginPassword(e.target.value);
									setRegisterPassword(e.target.value);
								}}
							/>
						</div>
						<div className='sign-in-buttons'>
							{' '}
							{/*Login*/}
							<button
								to={pathName.current}
								className='sign-in-link'
								hidden={redirect}
								onClick={login}
							>
								Login
							</button>
							<img
								src={gsign}
								alt='gsign'
								className='sign-in-google-link'
								hidden={redirect}
							/>
						</div>
						<div className='sign-in-buttons'>
							{' '}
							{/*Sign Up*/}
							<button
								to={pathName.current}
								className='sign-in-link'
								hidden={!redirect}
								onClick={register}
								// disabled={loading}
							>
								Sign-Up
							</button>
							<img
								src={gsign}
								alt='gsign'
								className='sign-in-google-link'
								hidden={!redirect}
							/>
						</div>
						<div
							hidden={redirect}
							id='toggleSignInFooter'
							className='sign-in-footer'
						>
							<span className='sign-up-link' onClick={onRedirect}>
								Not yet registered?
							</span>
						</div>
						<div
							hidden={!redirect}
							id='toggleSignUpFooter'
							className='sign-in-footer'
						>
							<span className='sign-up-link' onClick={onRedirect}>
								Already have an account?
							</span>
						</div>
					</div>
				</div>
			</motion.div>
		</>,
		document.getElementById('sign-in-pop-up')
	);
}
