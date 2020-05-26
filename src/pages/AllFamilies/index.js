import React from "react";
import { withRouter } from "react-router";
import { observer, inject } from "mobx-react";
import { Switch, Route } from "react-router-dom";

// import NavAllFamilies from "./AllFamilies";
import FamilyDetail from "../../Components/FamilyDetail";
import Families from "../../Components/Families";

class AllFamilies extends React.Component {
  get families() {
    return this.props.stores.familyStore.families();
  }

  componentDidMount() {
    this.loadAllFamilies();
  }

  loadAllFamilies = () => {
    this.props.stores.familyStore.loadAllFamilies();
  };

  render() {
    const { path } = this.props.match;
    return (
      <Switch>
        <Route exact path={path}>
          <Families families={this.families} />
        </Route>
        I
        <Route exact path={`${path}/:familyId`} component={FamilyDetail} />
      </Switch>
    );
  }
}

export default inject("stores")(withRouter(observer(AllFamilies)));
