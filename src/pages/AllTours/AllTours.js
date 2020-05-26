import React from "react";
import { withRouter } from "react-router";
import { observer, inject } from "mobx-react";
import { Switch, Route } from "react-router-dom";

import TourDetail from "../../Components/TourDetail";
import Tours from "../../Components/Tours";

class AllTours extends React.Component {
  get tours() {
    return this.props.stores.tourStore.tours();
  }

  componentDidMount() {
    this.loadAllTours();
  }

  loadAllTours = () => {
    this.props.stores.tourStore.loadAllTours();
  };

  render() {
    const { path } = this.props.match;
    return (
      <Switch>
        <Route exact path={path}>
          <Tours tours={this.tours} />
        </Route>
        <Route exact path={`${path}/:tourId`} component={TourDetail} />
      </Switch>
    );
  }
}

export default inject("stores")(withRouter(observer(AllTours)));
