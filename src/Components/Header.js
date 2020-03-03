import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import Logo from "../assets/img/logo.png";

class Header extends React.Component {
  render() {
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
                            <Link to="/travel_destination" className="active">
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
                      {false ? (
                        <Link
                          to="/personal-account"
                          class="genric-btn info medium circle login-btn"
                        >
                          profile
                        </Link>
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

export default Header;
