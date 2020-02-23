import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

import FooterLogo from "../assets/img/footer_logo.png";

import Instagram1 from "../assets/img/instagram/1.png";
import Instagram2 from "../assets/img/instagram/2.png";
import Instagram3 from "../assets/img/instagram/3.png";
import Instagram4 from "../assets/img/instagram/4.png";
import Instagram5 from "../assets/img/instagram/5.png";
import Instagram6 from "../assets/img/instagram/6.png";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="footer_top">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-md-6 col-lg-4 ">
                <div class="footer_widget">
                  <div class="footer_logo">
                    <a href="/">
                      <img src={FooterLogo} alt="" />
                    </a>
                  </div>
                  <p>
                    5th flora, 700/D kings road, green <br /> lane New York-1782{" "}
                    <br />
                    <Link>+10 367 826 2567</Link> <br />
                    <Link>contact@carpenter.com</Link>
                  </p>
                  <div class="socail_links">
                    <ul>
                      <li>
                        <Link>
                          <i class="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <i class="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <i class="fa fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <i class="fa fa-pinterest"></i>
                          </Link>
                      </li>
                      <li>
                        <Link>
                          <i class="fa fa-youtube-play"></i>
                          </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-md-6 col-lg-2">
                <div class="footer_widget">
                  <h3 class="footer_title">Company</h3>
                  <ul class="links">
                    <li>
                      <Link>Pricing</Link>
                    </li>
                    <li>
                      <a href="about">About</a>
                    </li>
                    <li>
                      <Link> Gallery</Link>
                    </li>
                    <li>
                      <a href="contact"> Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-lg-3">
                <div class="footer_widget">
                  <h3 class="footer_title">Popular destination</h3>
                  <ul class="links double_links">
                    <li>
                      <a href="travel_destination">Indonesia</a>
                    </li>
                    <li>
                      <a href="travel_destination">America</a>
                    </li>
                    <li>
                      <a href="travel_destination">India</a>
                    </li>
                    <li>
                      <a href="travel_destination">Switzerland</a>
                    </li>
                    <li>
                      <a href="travel_destination">Italy</a>
                    </li>
                    <li>
                      <a href="travel_destination">Canada</a>
                    </li>
                    <li>
                      <a href="travel_destination">Franch</a>
                    </li>
                    <li>
                      <a href="travel_destination">England</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-lg-3">
                <div class="footer_widget">
                  <h3 class="footer_title">Popular Places</h3>
                  <div class="instagram_feed">
                    <div class="single_insta">
                      <a href="destination_details">
                        <img src={Instagram1} alt="" />
                      </a>
                    </div>
                    <div class="single_insta">
                      <a href="destination_details">
                        <img src={Instagram2} alt="" />
                      </a>
                    </div>
                    <div class="single_insta">
                      <a href="destination_details">
                        <img src={Instagram3} alt="" />
                      </a>
                    </div>
                    <div class="single_insta">
                      <a href="destination_details">
                        <img src={Instagram4} alt="" />
                      </a>
                    </div>
                    <div class="single_insta">
                      <a href="destination_details">
                        <img src={Instagram5} alt="" />
                      </a>
                    </div>
                    <div class="single_insta">
                      <a href="destination_details">
                        <img src={Instagram6} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copy-right_text">
          <div class="container">
            <div class="footer_border"></div>
            <div class="row">
              <div class="col-xl-12">
                <p class="copy_right text-center">
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                    Colorlib
                  </a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
