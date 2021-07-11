import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './Homepage.js';
<<<<<<< HEAD
import RentalDashboard from './components/main-pages/react-js/RentalDashboard';
import AboutUs from './components/main-pages/react-js/AboutUs';
=======
import RentalDashboard from './components/main-pages/react-js/RentalDashboard.js';
>>>>>>> 5759106c797f5de001f1ff432644968545a8ce14

function App() {
  const location = useLocation();

  return (
    <main className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch loaction={location} key={location.pathname}>
<<<<<<< HEAD
          <Route path = '/rental-dashboard'  component={RentalDashboard}/>
          <Route path = '/about-us'  component={AboutUs}/>
          <Route path = '/'  component={Homepage}/>
=======
          <Route path = '/rental-dashboard' component={RentalDashboard}/>
          <Route path = '/' component={Homepage} />
>>>>>>> 5759106c797f5de001f1ff432644968545a8ce14
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
