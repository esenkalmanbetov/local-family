import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import NavAllFamilies from "./AllFamilies";
import FamilyDetail from "../../Components/FamilyDetail";

class AllFamilies extends React.Component {
  render() {
    const { path } = this.props.match;
    return (
      <Switch>
        <Route exact path={path} component={NavAllFamilies} />
        <Route exact path={`${path}/:familyId`} component={FamilyDetail} />
      </Switch>
    );
  }
}

export default withRouter(AllFamilies);
