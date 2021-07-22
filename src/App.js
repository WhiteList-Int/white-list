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


function App() {
  const location = useLocation();

  return (
    <main className="App">
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path = '/rental-dashboard'  component={RentalDashboard}/>
          <Route path = '/owner-dashboard'  component={OwnerDashboard}/>
          <Route path = '/edit-profile'  component={EditProfile}/>
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
