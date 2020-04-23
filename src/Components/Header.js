import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Dropdown } from "react-bootstrap";

import "./Header.scss";

import Logo from "../assets/img/logo.png";

class Header extends React.Component {
  componentDidMount() {
    this.loadUser();
  }

  componentDidUpdate() {
    this.loadUser();
  }

  get user() {
    return this.props.stores.authStore.user();
  }

  get counter() {
    return this.props.stores.tutorStore.counter;
  }

  loadUser = () => {
    this.props.stores.authStore.loadUser();
  };

  signOut = () => {
    this.props.stores.authStore.signout().then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    const toPersonalAccnt =
      this.user.role === "tourist"
        ? "/personal-account/profile"
        : "/personal-account";

    const userLogo = this.user.firstName[0] + this.user.lastName[0];
    return (
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <Link to="/">
                        <img src={Logo} alt="Local family" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          {/* for footer */}
                          {/* <li>
                            <Link to="/about">About</Link>
                          </li> */}
                          <li>
                            <Link to="/all-families" className="active">
                              Families
                            </Link>
                          </li>
                          <li>
                            <Link to="/join-to-tours">Tours</Link>
                          </li>
                          <li>
                            <Link to="/travel_destination">Guides</Link>
                          </li>
                          {/* for footer
                          <li>
                            <Link to="/blog">blog</Link>
                          </li> */}
                          {/* <li>
                            <Link to="/contact">Contact</Link>
                          </li> */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div class="header-auth">
                    <li class="text-right">
                      {this.user.id ? (
                        <Dropdown>
                          <Dropdown.Toggle className="user-toggle">
                            {userLogo}
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="user-menu">
                            <Dropdown.Item>
                              <Link to={toPersonalAccnt}>profile</Link>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => this.signOut()}>
                              sign-out
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      ) : (
                        <Link
                          to="/signin"
                          class="genric-btn info medium circle login-btn"
                        >
                          login
                        </Link>
                      )}
                    </li>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default inject("stores")(withRouter(observer(Header)));
