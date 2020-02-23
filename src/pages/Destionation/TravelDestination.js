import React from "react";
import { withRouter } from "react-router";

import NewLetterArea from "../../Components/NewLetterArea";
import RecentTripArea from "../../Components/RecentTripArea";

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
        <div class="bradcam_area bradcam_bg_2">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="bradcam_text text-center">
                  <h3>Destinations</h3>
                  <p>Pixel perfect design with awesome contents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="where_togo_area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3">
                <div class="form_area">
                  <h3>Where you want to go?</h3>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="search_wrap">
                  <form class="search_form" action="#">
                    <div class="input_field">
                      <input type="text" placeholder="Where to go?" />
                    </div>
                    <div class="input_field">
                      <input id="datepicker" placeholder="Date" />
                    </div>
                    <div class="input_field">
                      <select>
                        <option data-display="Travel type">Travel type</option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                      </select>
                    </div>
                    <div class="search_btn">
                      <button class="boxed-btn4 " type="submit">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popular_places_area">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="filter_result_wrap">
                  <h3>Filter Result</h3>
                  <div class="filter_bordered">
                    <div class="filter_inner">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="single_select">
                            <select>
                              <option data-display="Country">Country</option>
                              <option value="1">Africa</option>
                              <option value="2">canada</option>
                              <option value="4">USA</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="single_select">
                            <select>
                              <option data-display="Travel type">
                                Travel type
                              </option>
                              <option value="1">advance</option>
                              <option value="2">advance</option>
                              <option value="4">premium</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="range_slider_wrap">
                            <span class="range">Prise range</span>
                            <div id="slider-range"></div>
                            <p>
                              <input
                                type="text"
                                id="amount"
                                readonly
                                style={{
                                  border: 0,
                                  color: "#7A838B",
                                  fontWeight: 400
                                }}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="reset_btn">
                      <button class="boxed-btn4" type="submit">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single_place">
                      <div class="thumb">
                        <img src={Place1} alt="" />
                        <a href="#" class="prise">
                          $500
                        </a>
                      </div>
                      <div class="place_info">
                        <a href="destination_details.html">
                          <h3>California</h3>
                        </a>
                        <p>United State of America</p>
                        <div class="rating_days d-flex justify-content-between">
                          <span class="d-flex justify-content-center align-items-center">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <a href="#">(20 Review)</a>
                          </span>
                          <div class="days">
                            <i class="fa fa-clock-o"></i>
                            <a href="#">5 Days</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single_place">
                      <div class="thumb">
                        <img src={Place2} alt="" />
                        <a href="#" class="prise">
                          $500
                        </a>
                      </div>
                      <div class="place_info">
                        <a href="destination_details.html">
                          <h3>Korola Megna</h3>
                        </a>
                        <p>United State of America</p>
                        <div class="rating_days d-flex justify-content-between">
                          <span class="d-flex justify-content-center align-items-center">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <a href="#">(20 Review)</a>
                          </span>
                          <div class="days">
                            <i class="fa fa-clock-o"></i>
                            <a href="#">5 Days</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single_place">
                      <div class="thumb">
                        <img src={Place3} alt="" />
                        <a href="#" class="prise">
                          $500
                        </a>
                      </div>
                      <div class="place_info">
                        <a href="destination_details.html">
                          <h3>London</h3>
                        </a>
                        <p>United State of America</p>
                        <div class="rating_days d-flex justify-content-between">
                          <span class="d-flex justify-content-center align-items-center">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <a href="#">(20 Review)</a>
                          </span>
                          <div class="days">
                            <i class="fa fa-clock-o"></i>
                            <a href="#">5 Days</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single_place">
                      <div class="thumb">
                        <img src={Place4} alt="" />
                        <a href="#" class="prise">
                          $500
                        </a>
                      </div>
                      <div class="place_info">
                        <a href="destination_details.html">
                          <h3>Miami Beach</h3>
                        </a>
                        <p>United State of America</p>
                        <div class="rating_days d-flex justify-content-between">
                          <span class="d-flex justify-content-center align-items-center">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <a href="#">(20 Review)</a>
                          </span>
                          <div class="days">
                            <i class="fa fa-clock-o"></i>
                            <a href="#">5 Days</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single_place">
                      <div class="thumb">
                        <img src={Place5} alt="" />
                        <a href="#" class="prise">
                          $500
                        </a>
                      </div>
                      <div class="place_info">
                        <a href="destination_details.html">
                          <h3>California</h3>
                        </a>
                        <p>United State of America</p>
                        <div class="rating_days d-flex justify-content-between">
                          <span class="d-flex justify-content-center align-items-center">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <a href="#">(20 Review)</a>
                          </span>
                          <div class="days">
                            <i class="fa fa-clock-o"></i>
                            <a href="#">5 Days</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single_place">
                      <div class="thumb">
                        <img src={Place6} alt="" />
                        <a href="#" class="prise">
                          $500
                        </a>
                      </div>
                      <div class="place_info">
                        <a href="destination_details.html">
                          <h3>Saintmartine Iceland</h3>
                        </a>
                        <p>United State of America</p>
                        <div class="rating_days d-flex justify-content-between">
                          <span class="d-flex justify-content-center align-items-center">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <a href="#">(20 Review)</a>
                          </span>
                          <div class="days">
                            <i class="fa fa-clock-o"></i>
                            <a href="#">5 Days</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="more_place_btn text-center">
                      <a class="boxed-btn4" href="#">
                        More Places
                      </a>
                    </div>
                  </div>
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
