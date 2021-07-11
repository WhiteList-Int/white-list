import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './Homepage.js';
import RentalDashboard from './components/main-pages/react-js/RentalDashboard';
import AboutUs from './components/main-pages/react-js/AboutUs';

function App() {
  const location = useLocation();

  return (
    <main className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch loaction={location} key={location.pathname}>
          <Route path = '/rental-dashboard'  component={RentalDashboard}/>
          <Route path = '/about-us'  component={AboutUs}/>
          <Route path = '/'  component={Homepage}/>
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
