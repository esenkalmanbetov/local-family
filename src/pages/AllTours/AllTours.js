import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import NavAllTours from "./NavAllTours";
import TourDetail from "../../Components/TourDetail";

class AllTours extends React.Component {
  render() {
    const { path } = this.props.match;
    return (
      <Switch>
        <Route exact path={path} component={NavAllTours} />
        <Route exact path={`${path}/:tourId`} component={TourDetail} />
      </Switch>
    );
  }
}

export default withRouter(AllTours);
