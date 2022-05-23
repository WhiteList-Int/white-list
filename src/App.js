import { Switch, Route, useLocation } from 'react-router-dom';
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
				<Switch location={location} key={location.pathname}>
					<Route path='/rental-dashboard' component={RentalDashboard} />
					<Route path='/owner-dashboard' component={OwnerProfile} />
					<Route path='/rental-preview' component={RentalPreview} />
					<Route path='/owner-rental' component={OwnerDashboard} />
					<Route exact path='/profile-dashboard' component={EditProfile} />
					<Route exact path='/profile-connects' component={ProfileConnects} />
					<Route exact path='/learn-more' component={LearnMore} />
					<Route exact path='/terms-of-service' component={TermsService} />
					<Route exact path='/privacy-policy' component={PrivacyPolicy} />
					<Route exact path='/about-us' component={AboutUs} />
					<Route exact path='/homepage' component={Homepage} />
				</Switch>
				{/* </AuthProvider> */}
			</AnimatePresence>
		</main>
	);
}

export default App;
