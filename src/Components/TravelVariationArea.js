import React from "react";
import { withRouter } from "react-router";

import Icon1 from "../assets/img/svg_icon/1.svg";
import Icon2 from "../assets/img/svg_icon/2.svg";
import Icon3 from "../assets/img/svg_icon/3.svg";

class TravelVariationArea extends React.Component {
  render() {
    return (
      <div class="travel_variation_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single_travel text-center">
                <div class="icon">
                  <img src={Icon1} alt="" />
                </div>
                <h3>Comfortable Journey</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_travel text-center">
                <div class="icon">
                  <img src={Icon2} alt="" />
                </div>
                <h3>Luxuries Hotel</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_travel text-center">
                <div class="icon">
                  <img src={Icon3} alt="" />
                </div>
                <h3>Travel Guide</h3>
                <p>
                  A wonderful serenity has taken to the possession of my entire
                  soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TravelVariationArea);
