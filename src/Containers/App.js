import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from './Home'
import Kg from './Kyrgyzstan/Kg'
import Kz from './Kz'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="containers">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/kg" component={Kg} />
            <Route path="/kz" component={Kz} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
