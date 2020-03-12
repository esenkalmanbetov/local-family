import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import NavPersAcnt from "./NavPersAcnt";
import Profile from "./Profile";
import MyTours from "./MyTours/MyTours";
import MyFamilies from "./MyFamily/index";

class PersonalAccount extends React.Component {
  render() {
    const { path } = this.props.match;

    return (
      <div>
        <Switch>
          <Route exact path={path} component={NavPersAcnt} />
          <Route exact path={`${path}/profile`} component={Profile} />
          <Route exact path={`${path}/my-tours`} component={MyTours} />
          <Route exact path={`${path}/my-families`} component={MyFamilies} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(PersonalAccount);
