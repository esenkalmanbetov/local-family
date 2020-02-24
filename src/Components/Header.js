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
                      <a href="/">
                        <img src={Logo} alt="Local family" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a className="active" href="/">
                              home
                            </a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/travel_destination">Destination</a>
                          </li>
                          <li>
                            <a href="/blog">blog</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                          <li class="text-right">
                            <Link
                              to="/signin"
                              class="genric-btn info medium circle login-btn"
                            >
                              login
                            </Link>
                          </li>
                          <li class="text-right">
                            <Link
                              to="/personal-account"
                              class="genric-btn info medium circle login-btn"
                            >
                              profile
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="seach_icon">
                    <Link data-toggle="modal" data-target="#exampleModalCenter">
                      <i className="fa fa-search"></i>
                    </Link>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal fade custom_search_pop"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="serch_form">
                <input type="text" placeholder="Search" />
                <button type="submit">search</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- link that opens popup --> */}
      </header>
    );
  }
}

export default Header;
