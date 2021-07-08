import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Img2 from './components/images/white-list-icon-gradient.svg';
import Navbar from './components/navbar-source/Navbar';
import Card1 from  './components/card-sources/Card1';
import Card2 from  './components/card-sources/Card2';
import Card3 from  './components/card-sources/Card3';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/'>
            <div className="section">
              <Navbar />
              <img className = "start-up--bg-icon" src = {Img2} alt="WhiteList"></img>
              <div className = "cards">
                <Card1 className ='flex-card'/>            
                <Card2 className ='flex-card'/>
                <Card3 className ='flex-card'/> 
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
