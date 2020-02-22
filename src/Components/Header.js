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
                      <a href="index.html">
                        <img
                          src={Logo}
                          alt="Local family"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a className="active" href="index.html">
                              home
                            </a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a className="" href="travel_destination.html">
                              Destination
                            </a>
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
      </header>
    );
  }
}

export default Header;
