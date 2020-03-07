import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

import Families from "../Components/Families";
import Tours from "../Components/Tours";

import Dest2 from "../assets/img/destination/2.png";
import Dest5 from "../assets/img/destination/5.png";
// import Dest6 from "../assets/img/destination/6.png";

import Kg from "../assets/img/countries/kg.jpg";
// import Kz from '../assets/img/countries/kz.jpg'
// import Tajikstan from '../assets/img/countries/tajikstan.jpg'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="popular_destination_area countries">
          <div class="container">
            {/* margin 0 all of them */}
            <div class="row">
              <div class="col-lg-4 p-0">
                <Link to="/kg">
                  <div class="single_destination m-0">
                    <div class="thumb">
                      <img src={Kg} alt="" />
                    </div>
                    <div class="content align-center">
                      <p class="d-flex align-items-center">
                        Kyrgyzstan{" "}
                        {/* <Link to="/travel_destination"> 07 Places</Link>{" "} */}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col-lg-4 p-0">
                <Link to="/kz">
                  <div class="single_destination m-0">
                    <div class="thumb">
                      <img src={Dest5} alt="" />
                    </div>
                    <div class="content align-center">
                      <p class="d-flex align-items-center">
                        Kazakstan{" "}
                        {/* <Link to="/travel_destination"> 03 Places</Link>{" "} */}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col-lg-4 p-0">
                <Link to="/travel_destination">
                  <div class="single_destination m-0">
                    <div class="thumb">
                      <img src={Dest2} alt="" />
                    </div>
                    <div class="content align-center">
                      <p class="d-flex align-items-center">
                        Tajikistan{" "}
                        {/* <Link to="/travel_destination"> 10 Places</Link>{" "} */}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Families nextUrl="all-families" />

        <Tours nextUrl="join-to-tours" />
      </div>
    );
  }
}

export default Home;
