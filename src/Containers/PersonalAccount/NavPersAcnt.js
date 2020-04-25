import React from "react";
import { withRouter } from "react-router";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { ListGroup, Container } from "react-bootstrap";

class NavPersAcnt extends React.Component {
  get userRole() {
    return this.props.stores.authStore.user().role;
  }
  render() {
    const { url } = this.props.match;
    return (
      <Container className="text-center">
        <div style={{ width: "400px", margin: "auto" }}>
          <h2>Personal Acount</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Link to={`${url}/profile`}>My Profile</Link>
            </ListGroup.Item>
            {this.userRole === "guide" && (
              <ListGroup.Item>
                <Link to={`${url}/my-tours`}>My tours</Link>
              </ListGroup.Item>
            )}
            {this.userRole === "host" && (
              <ListGroup.Item>
                <Link to={`${url}/my-families`}>My families</Link>
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
      </Container>
    );
  }
}

export default inject("stores")(withRouter(observer(NavPersAcnt)));
