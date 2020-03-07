import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import Place1 from "../assets/img/place/1.png";
import Place2 from "../assets/img/place/2.png";
import Place3 from "../assets/img/place/3.png";
import Place4 from "../assets/img/place/4.png";
import Place5 from "../assets/img/place/5.png";
import Place6 from "../assets/img/place/6.png";

class Families extends React.Component {
  render() {
    const {
      props: { nextUrl }
    } = this;

    let { url } = this.props.match;
    url = nextUrl ? url + nextUrl : url;
    return (
      <div class="popular_places_area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center mb_70">
                <h3>Families</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single_place">
                <div class="thumb">
                  <img src={Place1} alt="" />
                </div>
                <div class="place_info">
                  <Link to={`${url}/fanilyId`}>
                    <h3>Kalmanbetov's family</h3>
                  </Link>
                  <p>Talas Region, Kyrgyzstan</p>
                  <div class="rating_days d-flex justify-content-between">
                    <span class="d-flex justify-content-center align-items-center">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <Link to={`${url}/fanilyId`}>(20 Review)</Link>
                    </span>
                    <div class="days">
                      <i class="fa fa-clock-o"></i>
                      <Link to={`${url}/fanilyId`}>5 Days</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_place">
                <div class="thumb">
                  <img src={Place2} alt="" />
                </div>
                <div class="place_info">
                  <Link to={`${url}/fanilyId`}>
                    <h3>Kalmanbetov's family</h3>
                  </Link>
                  <p>Talas Region, Kyrgyzstan</p>
                  <div class="rating_days d-flex justify-content-between">
                    <span class="d-flex justify-content-center align-items-center">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <Link to={`${url}/fanilyId`}>(20 Review)</Link>
                    </span>
                    <div class="days">
                      <i class="fa fa-clock-o"></i>
                      <Link to={`${url}/fanilyId`}>5 Days</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_place">
                <div class="thumb">
                  <img src={Place3} alt="" />
                </div>
                <div class="place_info">
                  <Link to={`${url}/fanilyId`}>
                    <h3>Kalmanbetov's family</h3>
                  </Link>
                  <p>Talas Region, Kyrgyzstan</p>
                  <div class="rating_days d-flex justify-content-between">
                    <span class="d-flex justify-content-center align-items-center">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <Link to={`${url}/fanilyId`}>(20 Review)</Link>
                    </span>
                    <div class="days">
                      <i class="fa fa-clock-o"></i>
                      <Link to={`${url}/fanilyId`}>5 Days</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_place">
                <div class="thumb">
                  <img src={Place4} alt="" />
                </div>
                <div class="place_info">
                  <Link to={`${url}/fanilyId`}>
                    <h3>Kalmanbetov's family</h3>
                  </Link>
                  <p>Talas Region, Kyrgyzstan</p>
                  <div class="rating_days d-flex justify-content-between">
                    <span class="d-flex justify-content-center align-items-center">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <Link to={`${url}/fanilyId`}>(20 Review)</Link>
                    </span>
                    <div class="days">
                      <i class="fa fa-clock-o"></i>
                      <Link to={`${url}/fanilyId`}>5 Days</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_place">
                <div class="thumb">
                  <img src={Place5} alt="" />
                </div>
                <div class="place_info">
                  <Link to={`${url}/fanilyId`}>
                    <h3>Kalmanbetov's family</h3>
                  </Link>
                  <p>Talas Region, Kyrgyzstan</p>
                  <div class="rating_days d-flex justify-content-between">
                    <span class="d-flex justify-content-center align-items-center">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <Link to={`${url}/fanilyId`}>(20 Review)</Link>
                    </span>
                    <div class="days">
                      <i class="fa fa-clock-o"></i>
                      <Link to={`${url}/fanilyId`}>5 Days</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_place">
                <div class="thumb">
                  <img src={Place6} alt="" />
                </div>
                <div class="place_info">
                  <Link to={`${url}/fanilyId`}>
                    <h3>Kalmanbetov's family</h3>
                  </Link>
                  <p>Talas Region, Kyrgyzstan</p>
                  <div class="rating_days d-flex justify-content-between">
                    <span class="d-flex justify-content-center align-items-center">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <Link to={`${url}/fanilyId`}>(20 Review)</Link>
                    </span>
                    <div class="days">
                      <i class="fa fa-clock-o"></i>
                      <Link to={`${url}/fanilyId`}>5 Days</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="more_place_btn text-center">
                <Link class="boxed-btn4" to={`${url}`}>
                  More Families
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Families);
