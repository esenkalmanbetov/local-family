import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";

import { Dropdown } from "react-bootstrap";

import "./Header.scss";

import Logo from "../assets/img/logo.png";

class Header extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {}

  get user() {
    return this.props.stores.authStore.user();
  }

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
                            <Link
                              to="/signup"
                              class="genric-btn info medium circle login-btn"
                            >
                              register
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/signin"
                              class="genric-btn info medium circle login-btn"
                            >
                              signin
                            </Link>
                          </li>
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
                      ) : // <div>
                      //   <Link
                      //     to="/signup"
                      //     class="genric-btn info medium circle login-btn mr-3"
                      //   >
                      //     register
                      //   </Link>
                      //   <Link
                      //     to="/signin"
                      //     class="genric-btn info medium circle login-btn"
                      //   >
                      //     signin
                      //   </Link>
                      // </div>
                      null}
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
