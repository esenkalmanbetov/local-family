import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class NavPersAcnt extends React.Component {
  render() {
    const { url } = this.props.match;

    return (
      <div>
        <h2>Local Guides</h2>
        <ul>
          <li>
            <Link to={`${url}/profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`${url}/my-tours`}>My tours</Link>
          </li>
          <li>
            <Link to={`${url}/my-families`}>My families</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavPersAcnt);
