import React from "react";
import { withRouter } from "react-router";
// import { Link } from "react-router-dom";

import './NavKg.scss'

import Families from "../../Components/Families";
import Tours from "../../Components/Tours";

class NavKg extends React.Component {
  render() {
    // const { url } = this.props.match;

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
          <Families />
          <Tours />
          {/* <ul>
            <li>
              <Link to={`${url}/join-to-tours`}>Join to tours</Link>
            </li>
            <li>
              <Link to={`${url}/local-guides`}>Local guides</Link>
            </li>
            <li>
              <Link to={`${url}/local-families`}>Local families</Link>
            </li>
          </ul> */}
        </div>
      </div>
    );
  }
}

export default withRouter(NavKg);
