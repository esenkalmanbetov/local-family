import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "./Home";
import Kg from "./Kyrgyzstan/Kg";
import Kz from "./Kz";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import PersonalAccount from "./PersonalAccount/index";
import About from "../pages/About";
import TravelDestination from "../pages/Destionation/TravelDestination";
import DestinationDetails from "../pages/Destionation/DestinationDetails";
import Blog from "../pages/Blog/Blog";
import SingleBlog from "../pages/Blog/SingleBlog";
import Contact from "../pages/Contact";

import "./App.scss";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="containers">
          <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/travel_destination" component={TravelDestination} />
              <Route
                path="/destination_details"
                component={DestinationDetails}
              />
              <Route path="/blog" component={Blog} />
              <Route path="/single-blog" component={SingleBlog} />
              <Route path="/contact" component={Contact} />
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
