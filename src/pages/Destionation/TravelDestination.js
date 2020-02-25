import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import NewLetterArea from "../../Components/NewLetterArea";
import RecentTripArea from "../../Components/RecentTripArea";

import './TravelDestination.scss'

import Place1 from "../../assets/img/place/1.png";
import Place2 from "../../assets/img/place/2.png";
import Place3 from "../../assets/img/place/3.png";
import Place4 from "../../assets/img/place/4.png";
import Place5 from "../../assets/img/place/5.png";
import Place6 from "../../assets/img/place/6.png";

class TravelDestionation extends React.Component {
  render() {
    return (
      <div>
        <div class="popular_places_area tours">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="section_title text-center mb_70">
                  <h3>Tours</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place1} alt="" />
                    <Link to="/destination_details" class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to="/destination_details">
                      <h3>California</h3>
                    </Link>
                    <p>United State of America</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to="/destination_details">(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to="/destination_details">5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place2} alt="" />
                    <Link to="/destination_details" class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to="/destination_details">
                      <h3>Korola Megna</h3>
                    </Link>
                    <p>United State of America</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to="/destination_details">(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to="/destination_details">5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place3} alt="" />
                    <Link to="/destination_details" class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to="/destination_details">
                      <h3>London</h3>
                    </Link>
                    <p>United State of America</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to="/destination_details">(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to="/destination_details">5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place4} alt="" />
                    <Link to="/destination_details" class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to="/destination_details">
                      <h3>Miami Beach</h3>
                    </Link>
                    <p>United State of America</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to="/destination_details">(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to="/destination_details">5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place5} alt="" />
                    <Link to="/destination_details" class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to="/destination_details">
                      <h3>California</h3>
                    </Link>
                    <p>United State of America</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to="/destination_details">(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to="/destination_details">5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place6} alt="" />
                    <Link to="/destination_details" class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to="/destination_details">
                      <h3>Saintmartine Iceland</h3>
                    </Link>
                    <p>United State of America</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to="/destination_details">(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to="/destination_details">5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="more_place_btn text-center">
                  <Link class="boxed-btn4">More Places</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewLetterArea />
        <RecentTripArea />
      </div>
    );
  }
}

export default withRouter(TravelDestionation);
