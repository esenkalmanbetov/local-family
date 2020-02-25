import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

import Trip1 from "../assets/img/trip/1.png";
import Trip2 from "../assets/img/trip/2.png";
import Trip3 from "../assets/img/trip/3.png";

class RecentTripArea extends React.Component {
  render() {
    return (
      <div class="recent_trip_area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center mb_70">
                <h3>Recent Trips</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single_trip">
                <div class="thumb">
                  <img src={Trip1} alt="" />
                </div>
                <div class="info">
                  <div class="date">
                    <span>Oct 12, 2019</span>
                  </div>
                  <Link to="/destination_details">
                    <h3>Journeys Are Best Measured In New Friends</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_trip">
                <div class="thumb">
                  <img src={Trip2} alt="" />
                </div>
                <div class="info">
                  <div class="date">
                    <span>Oct 12, 2019</span>
                  </div>
                  <Link to="/destination_details">
                    <h3>Journeys Are Best Measured In New Friends</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_trip">
                <div class="thumb">
                  <img src={Trip3} alt="" />
                </div>
                <div class="info">
                  <div class="date">
                    <span>Oct 12, 2019</span>
                  </div>
                  <Link to="/destination_details">
                    <h3>Journeys Are Best Measured In New Friends</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RecentTripArea);
