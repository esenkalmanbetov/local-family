import React from "react";
import { withRouter } from "react-router";

import "./TourDetail.scss";

class TourDetail extends React.Component {
  render() {
    const { tourId } = this.props.match.params;

    return (
      <div>
        <h3>This is single tour detail page</h3>
        <h2>welcome to tour {tourId} </h2>
      </div>
    );
  }
}

export default withRouter(TourDetail);
