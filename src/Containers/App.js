import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from './Home'
import Kg from './Kg'
import Kz from './Kz'
import JoinTours from './JoinTours'
import TourPage from './TourPage'
import LocalGuides from './LocalGuides'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/kg" component={Kg} />
          <Route path="/kz" component={Kz} />
          {/* <Route path="/join-to-tours" component={JoinTours} />
          <Route path="/local-guides" component={LocalGuides} />
          <Route path="/tour-detail" component={TourPage} /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
