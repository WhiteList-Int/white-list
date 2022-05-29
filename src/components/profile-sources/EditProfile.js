import React, { useState, useEffect } from 'react';
import { accounts } from './../profile-sources/account';
import ProfileNavbar from './../profile-sources/ProfileNavbar';
import ConfirmWindow from '../owner-dash-sources/ConfirmWindow';
import ppImg from '../images/no_user.png';
import Footer from './../essentials/Footer';
import { motion } from 'framer-motion';
import { variants } from './../../animation-variants';
import { transitions } from './../../page-transitions';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase-config';
import { updateDoc, getDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebase-config';

function EditProfile() {
	const [enableFields, setEnableFields] = useState(true);
	const [saveAppear, setSaveAppear] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [fullName, setFullName] = useState('');
	const [gender, setGender] = useState('');
	const [email, setEmail] = useState('');
	const [bday, setBday] = useState('');
	const [contactNum, setContactNum] = useState('');
	const [occupation, setOccupation] = useState('');
	const [user, loading] = useAuthState(auth);

	useEffect(() => {
		getCurrentUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	const update = async () => {
		const updatedUser = {
			name: fullName,
			gender: gender,
			email: email,
			contact: contactNum,
			occupation: occupation,
			bday: bday,
		};
		try {
			const userDoc = doc(firestore, 'user', user.uid);
			updateDoc(userDoc, updatedUser);
		} catch (error) {
			console.log(error);
		}
	};
	const getCurrentUser = async () => {
		const userDoc = doc(firestore, 'user', user.uid);
		await getDoc(userDoc).then((docSnap) => {
			console.log(user.uid);
			if (docSnap.exists()) {
				// console.log('Document data:', docSnap.data());
				const myData = docSnap.data();
				setFullName(myData.name);
				setGender(myData.gender);
				setEmail(myData.email);
				setContactNum(myData.contact);
				setOccupation(myData.occupation);
				setBday(myData.bday);
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		});
	};
	const showScroll = () => {
		document.body.setAttribute('style', 'overflow-y:scroll;');
	};

	const loadFile = (event) => {
		var image = document.getElementById('change-image');
		image.src = URL.createObjectURL(event.target.files[0]);
	};

	return (
		<>
			<div className='edit-profile-background'>
				<ProfileNavbar />
				<div
					className='edit-profile'
					initial='slideOutYOpp'
					animate='slideInYOpp'
					variants={variants}
					transition={transitions.tweenEaseOutFaster}
				>
					<motion.div className='edit-profile-container'>
						<div className='edit-profile-container-img'>
							<img src={ppImg} alt='' id='change-image' />
						</div>
						<p>
							<input
								type='file'
								accept='image/*'
								name='image'
								id='file'
								onChange={loadFile}
								style={{ display: 'none' }}
							/>
						</p>
						<p
							className={
								saveAppear
									? 'edit-profile-container-change'
									: 'edit-profile-wrapper-change-disabled'
							}
							id='change-picture'
						>
							<label for='file' style={{ cursor: 'pointer' }}>
								Edit Profile Picture
							</label>
						</p>
					</motion.div>
					<motion.div
						className='edit-profile-wrapper'
						initial='slideOutYOpp'
						animate='slideInYOpp'
						variants={variants}
						transition={transitions.tweenEaseOutFaster}
					>
						<div className='edit-profile-wrapper-row-header'>
							<p>Your Profile</p>
						</div>
						<div className='edit-profile-wrapper-row'>
							<p>Full Name</p>
							<input
								className='edit-profile-wrapper-input'
								type='text'
								placeholder={fullName}
								onChange={(e) => {
									setFullName(e.target.value);
								}}
								disabled={enableFields}
							/>
						</div>
						<div className='edit-profile-wrapper-row'>
							<p>Birthday</p>
							<input
								className='edit-profile-wrapper-input'
								type='text'
								onFocus={(e) => (e.target.type = 'date')}
								placeholder={bday}
								onChange={(e) => {
									setBday(e.target.value);
								}}
								disabled={enableFields}
							/>
						</div>
						<div className='edit-profile-wrapper-row'>
							<p>Email Address</p>
							<input
								className='edit-profile-wrapper-input'
								type='text'
								placeholder={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								disabled={enableFields}
							/>
						</div>
						<div className='edit-profile-wrapper-row'>
							<p>Gender</p>
							<input
								className='edit-profile-wrapper-input'
								type='text'
								placeholder={gender}
								onChange={(e) => {
									setGender(e.target.value);
								}}
								disabled={enableFields}
							/>
						</div>
						<div className='edit-profile-wrapper-row'>
							<p>Contact Number</p>
							<input
								className='edit-profile-wrapper-input'
								type='text'
								placeholder={contactNum}
								onChange={(e) => {
									setContactNum(e.target.value);
								}}
								disabled={enableFields}
							/>
						</div>
						<div className='edit-profile-wrapper-row'>
							<p>Occupation</p>
							<input
								className='edit-profile-wrapper-input'
								type='text'
								placeholder={occupation}
								onChange={(e) => {
									setOccupation(e.target.value);
								}}
								disabled={enableFields}
							/>
						</div>
						<span
							className={
								saveAppear
									? 'edit-profile-wrapper-change-disabled'
									: 'edit-profile-wrapper-change'
							}
							onClick={() => {
								setSaveAppear(true);
								setEnableFields(false);
							}}
						>
							EDIT PROFILE
						</span>
						<span
							className={
								saveAppear
									? 'edit-profile-wrapper-change-save'
									: 'edit-profile-wrapper-change-disabled'
							}
							onClick={() => {
								setIsOpen(true);
							}}
						>
							SAVE CHANGES
						</span>

						<ConfirmWindow
							open={isOpen}
							onClose={(saveValue) => {
								if (saveValue) {
									setEnableFields(true);
									setSaveAppear(false);
									update();
								} else {
									setEnableFields(false);
								}
								setIsOpen(false);
								showScroll();
							}}
						/>
					</motion.div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default EditProfile;
