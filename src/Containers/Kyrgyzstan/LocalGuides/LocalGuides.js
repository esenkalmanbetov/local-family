import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import NavLocalGuides from "./NavLocalGuides";
import GuideDetail from "./GuideDetail";

class LocalGuides extends React.Component {
  render() {
    const { path } = this.props.match;

    return (
      <div>
        <Switch>
          <Route exact path={path} component={NavLocalGuides} />
          <Route exact path={`${path}/:guideId`} component={GuideDetail} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(LocalGuides);
