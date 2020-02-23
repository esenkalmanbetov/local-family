  import React from "react";
  import { withRouter } from "react-router";
  import { Switch, Route } from "react-router-dom";

  import NavTours from "./NavTours";
  import TourDetail from "./TourDetail";
  import "./JoinTours.scss";

  class JoinTours extends React.Component {
    render() {
      const { path } = this.props.match;

      return (
        <div>
          <Switch>
            <Route exact path={path} component={NavTours} />
            <Route exact path={`${path}/:tourId`} component={TourDetail} />
          </Switch>
        </div>
      );
    }
  }

  export default withRouter(JoinTours);
