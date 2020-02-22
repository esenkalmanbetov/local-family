import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "./Home";
import Kg from "./Kyrgyzstan/Kg";
import Kz from "./Kz";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import PersonalAccount from "./PersonalAccount/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="containers">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/kg" component={Kg} />
            <Route path="/kz" component={Kz} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/personal-account" component={PersonalAccount} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
