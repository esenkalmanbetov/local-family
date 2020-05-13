import React from "react";
import { withRouter } from "react-router";
import { observer, inject } from "mobx-react";

import "./NavKg.scss";

import Families from "../../Components/Families";
import Tours from "../../Components/Tours";

class NavKg extends React.Component {
  get families() {
    return this.props.stores.familyStore.families();
  }

  get tours() {
    return this.props.stores.tourStore.tours();
  }

  componentDidMount() {
    this.loadAllFamilies();
    this.loadAllTours();
  }

  loadAllFamilies = () => {
    this.props.stores.familyStore.loadAllFamilies();
  };

  loadAllTours = () => {
    this.props.stores.tourStore.loadAllTours();
  };

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
          <Families nextUrl="/all-families" families={this.families} />
          <Tours nextUrl="/join-to-tours" tours={this.tours} />
        </div>
      </div>
    );
  }
}

export default inject("stores")(withRouter(observer(NavKg)));
