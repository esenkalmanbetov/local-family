import React from "react";
import { withRouter } from "react-router";

import "./NavKg.scss";

import Families from "../../Components/Families";
import Tours from "../../Components/Tours";

class NavKg extends React.Component {
  render() {
    return (
      <div>
        <div class="bradcam_area wc_kg">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="bradcam_text text-center">
                  <h3>Welcome to Kyrgyzstan</h3>
                  <p>Kyrgyzstan is very beautiful</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Families nextUrl="/all-families" />
          <Tours nextUrl="/join-to-tours" />
        </div>
      </div>
    );
  }
}

export default withRouter(NavKg);
