import React from "react";
import { withRouter } from "react-router";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

class NavPersAcnt extends React.Component {
  get userRole() {
    return this.props.stores.authStore.user().role;
  }
  render() {
    const { url } = this.props.match;
    return (
      <div>
        <h2>Personal Acount</h2>
        <ul>
          <li>
            <Link to={`${url}/profile`}>My Profile</Link>
          </li>
          {this.userRole === "guide" && (
            <li>
              <Link to={`${url}/my-tours`}>My tours</Link>
            </li>
          )}
          {this.userRole === "host" && (
            <li>
              <Link to={`${url}/my-families`}>My families</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default inject("stores")(withRouter(observer(NavPersAcnt)));
