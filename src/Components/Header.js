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
                  <div className="col-xl-6 col-lg-6">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <Link className="active" to="/">
                              home
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/travel_destination">Destination</Link>
                          </li>
                          <li>
                            <a href="">
                              pages <i className="ti-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="destination_details.html">
                                  Destinations details
                                </a>
                              </li>
                              <li>
                                <a href="elements.html">elements</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              blog <i className="ti-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">blog</a>
                              </li>
                              <li>
                                <a href="single-blog.html">single-blog</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                    <div className="social_wrap d-flex align-items-center justify-content-end">
                      <div className="number">
                        <p>
                          {" "}
                          <i className="fa fa-phone"></i> 10(256)-928 256
                        </p>
                      </div>
                      <div className="social_links d-none d-xl-block">
                        <ul>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fa fa-instagram"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fa fa-linkedin"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fa fa-facebook"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fa fa-google-plus"></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="seach_icon">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      href="#"
                    >
                      <i className="fa fa-search"></i>
                    </a>
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
