import React from "react";
import { withRouter } from "react-router";

class FamilyDetail extends React.Component {
  render() {
    const { familyId } = this.props.match.params;

    return (
      <div>
        <h3>This is single Family detail page</h3>
        <h2>welcome to Family {familyId} </h2>
      </div>
    );
  }
}

export default withRouter(FamilyDetail);
