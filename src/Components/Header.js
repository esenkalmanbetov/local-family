import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";

import "./Header.scss";

const logo = "https://as1.ftcdn.net/jpg/01/22/73/10/500_F_122731028_B2QNieM6dm78phwAJKCbgvUcY07lfygh.jpg"


class Header extends React.Component {
  render() {
    return (
      <header>
        <MDBRow>
          <MDBCol size="3">
            <Link to="/">
              <img
                style={{ width: "50px" }}
                class="d-flex rounded-circle avatar mb-3 mx-auto"
                src={logo}
                alt='logo'
              ></img>
            </Link>
          </MDBCol>
          <MDBCol size="5" className="mb-3 text-center">
            <h1>Local Family</h1>
          </MDBCol>
          <MDBCol>
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
            <Link to="/profile">
              <MDBIcon icon="user" size="2x" />
            </Link>
          </MDBCol>
        </MDBRow>
      </header>
    );
  }
}

export default Header;
