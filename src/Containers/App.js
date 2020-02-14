import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "./Home";
import Kg from "./Kyrgyzstan/Kg";
import Kz from "./Kz";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import Profile from "./Profile/Profile";

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
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
