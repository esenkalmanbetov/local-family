import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import NewLetterArea from "./NewLetterArea";

import Place1 from "../assets/img/place/1.png";
import Place2 from "../assets/img/place/2.png";
import Place3 from "../assets/img/place/3.png";

import BannerPng from "../assets/img/banner/banner.png";
import Banner2Png from "../assets/img/banner/banner2.png";
import Banner3Png from "../assets/img/banner/banner3.png";

class FamilyDetail extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={BannerPng} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner2Png} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner3Png} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        User's Family
        <div class="destination_details_info">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-9">
                <div class="destination_info">
                  <h3>Description</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing.
                  </p>
                  <p>
                    Variations of passages of lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything
                    embarrassing.
                  </p>
                  <div class="single_destination">
                    <h4>Day-01</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                  <div class="single_destination">
                    <h4>Day-02</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                  <div class="single_destination">
                    <h4>Day-03</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words.
                    </p>
                  </div>
                </div>
                <div class="bordered_1px"></div>
                <div class="contact_join">
                  <h3>Contact for join</h3>
                  <form action="#">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="single_input">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="single_input">
                          <input type="text" placeholder="Phone no." />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="single_input">
                          <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="submit_btn">
                          <button class="boxed-btn4" type="submit">
                            submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewLetterArea />
        <div class="popular_places_area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="section_title text-center mb_70">
                  <h3>More Places</h3>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FamilyDetail);
