import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './Homepage.js';
import RentalDashboard from './components/main-pages/react-js/RentalDashboard';
import OwnerDashboard from './components/main-pages/react-js/OwnerDashboard';
import AboutUs from './components/main-pages/react-js/AboutUs';
import LearnMore from './components/information-page/LearnMore'
import TermsService from './components/information-page/TermsService'
import PrivacyPolicy from './components/information-page/PrivacyPolicy'
import EditProfile from './components/main-pages/react-js/EditProfile.js';
import ProfileConnects from './components/profile-sources/ProfileConnects';
import OwnerProfile from './components/owner-dash-sources/OwnerProfile.js';
import RentalPreview from './components/information-page/RentalPreview';
import AuthProvider from './components/FirebaseStuff/AuthContext';
// import PrivateRoute from './PrivateRoutes'


function App() {
  const location = useLocation();

  return (
    <main className="App">
      <AnimatePresence>
          {/* <PrivateRoute path = '/rental-dashboard'  component={RentalDashboard}/>
            <PrivateRoute path = '/rental-preview'  component={RentalPreview}/>
            <PrivateRoute exact path = '/owner-dashboard'  component={OwnerDashboard}/>
            <PrivateRoute exact path = '/profile-dashboard'  component={EditProfile}/>
            <PrivateRoute exact path = '/profile-connects'  component={ProfileConnects}/> */}
        <Switch location={location} key={location.pathname}>
          <Route path = '/rental-dashboard'  component={RentalDashboard}/>
          <Route path = '/rental-preview'  component={RentalPreview}/>
          <Route path = '/owner-dashboard'  component={OwnerProfile}/>
          <Route path = '/owner-rental'  component={OwnerDashboard}/>
          <Route path = '/profile-dashboard'  component={EditProfile}/>
          <Route path = '/profile-connects'  component={ProfileConnects}/>
          <Route path = '/learn-more'  component={LearnMore}/>
          <Route path = '/terms-of-service' component={TermsService}/>
          <Route path = '/privacy-policy' component={PrivacyPolicy}/>
          <Route path = '/about-us'  component={AboutUs}/>
          <Route path = '/homepage'  component={Homepage}/>
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
