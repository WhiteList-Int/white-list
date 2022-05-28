import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './Homepage.js';
import RentalDashboard from './components/main-pages/react-js/RentalDashboard';
import OwnerDashboard from './components/owner-dash-sources/OwnerDashboard';
import AboutUs from './components/main-pages/react-js/AboutUs';
import LearnMore from './components/information-page/LearnMore';
import TermsService from './components/information-page/TermsService';
import PrivacyPolicy from './components/information-page/PrivacyPolicy';
import EditProfile from './components/profile-sources/EditProfile.js';
import ProfileConnects from './components/profile-sources/ProfileConnects';
import RentalPreview from './components/information-page/RentalPreview';
// import AuthProvider from './components/FirebaseStuff/AuthContext';
import OwnerProfile from './components/owner-dash-sources/OwnerProfile.js';

function App() {
	const location = useLocation();

	return (
		<main className='App'>
			<AnimatePresence>
				{/* <AuthProvider> */}
				<Routes location={location} key={location.pathname}>
					<Route path='/rental-dashboard' element={<RentalDashboard />} />
					<Route path='/owner-dashboard' element={<OwnerProfile />} />
					<Route path='/rental-preview' element={<RentalPreview />} />
					<Route path='/owner-rental' element={<OwnerDashboard />} />
					<Route exact path='/profile-dashboard' element={<EditProfile />} />
					<Route exact path='/profile-connects' element={<ProfileConnects />} />
					<Route exact path='/learn-more' element={<LearnMore />} />
					<Route exact path='/terms-of-service' element={<TermsService />} />
					<Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
					<Route exact path='/about-us' element={<AboutUs />} />
					<Route exact path='/' element={<Homepage />} />
					<Route exact path='/homepage' element={<Homepage />} />
				</Routes>
				{/* </AuthProvider> */}
			</AnimatePresence>
		</main>
	);
}

export default App;
