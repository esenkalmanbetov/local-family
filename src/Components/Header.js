import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>This is Header</h1>
        <Link to="/signup">
          <MDBBtn
            style={{ borderRadius: "20px" }}
            rounded
            color="info"
            size="sm"
          >
            Signup
          </MDBBtn>
        </Link>
        <Link to="/signin">
          <MDBBtn
            style={{ borderRadius: "20px" }}
            rounded
            color="info"
            size="sm"
          >
            Signin
          </MDBBtn>
        </Link>
      </header>
    );
  }
}

export default Header;
