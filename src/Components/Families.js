import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import Dest1 from "../assets/img/destination/1.png";
import Dest2 from "../assets/img/destination/2.png";
import Dest3 from "../assets/img/destination/3.png";
import Dest4 from "../assets/img/destination/4.png";
import Dest5 from "../assets/img/destination/5.png";
import Dest6 from "../assets/img/destination/6.png";

class Families extends React.Component {
  render() {
    return (
      <div class="popular_destination_area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center mb_70">
                <h3>Families</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single_destination">
                <div class="thumb">
                  <img src={Dest1} alt="" />
                </div>
                <div class="content">
                  <p class="d-flex align-items-center">
                    Italy <Link to="/travel_destination"> 07 Places</Link>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_destination">
                <div class="thumb">
                  <img src={Dest2} alt="" />
                </div>
                <div class="content">
                  <p class="d-flex align-items-center">
                    Brazil <Link to="/travel_destination"> 03 Places</Link>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_destination">
                <div class="thumb">
                  <img src={Dest3} alt="" />
                </div>
                <div class="content">
                  <p class="d-flex align-items-center">
                    America <Link to="/travel_destination"> 10 Places</Link>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_destination">
                <div class="thumb">
                  <img src={Dest4} alt="" />
                </div>
                <div class="content">
                  <p class="d-flex align-items-center">
                    Nepal <Link to="/travel_destination"> 02 Places</Link>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_destination">
                <div class="thumb">
                  <img src={Dest5} alt="" />
                </div>
                <div class="content">
                  <p class="d-flex align-items-center">
                    Maldives <Link to="/travel_destination"> 02 Places</Link>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_destination">
                <div class="thumb">
                  <img src={Dest6} alt="" />
                </div>
                <div class="content">
                  <p class="d-flex align-items-center">
                    Indonesia <Link to="/travel_destination"> 05 Places</Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Families);
