import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './Homepage.js';
import RentalDashboard from './components/main-pages/react-js/RentalDashboard';
import AboutUs from './components/main-pages/react-js/AboutUs';
import LearnMore from './components/information-page/LearnMore'
import TermsService from './components/information-page/TermsService'
import PrivacyPolicy from './components/information-page/PrivacyPolicy'


function App() {
  const location = useLocation();

  return (
    <main className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch loaction={location} key={location.pathname}>
          <Route path = '/rental-dashboard'  component={RentalDashboard}/>
          <Route path = '/learn-more'  component={LearnMore}/>
          <Route path = '/terms-of-service' component={TermsService}/>
          <Route path = '/privacy-policy' component={PrivacyPolicy}/>
          <Route path = '/about-us'  component={AboutUs}/>
          <Route path = '/'  component={Homepage}/>

        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
