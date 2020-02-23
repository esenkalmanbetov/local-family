import React from "react";

import "./Home.scss";

import VideoArea from "../Components/VideoArea";
import TravelVariationArea from "../Components/TravelVariationArea";
import TestimonialArea from "../Components/TestimonialArea";
import RecentTripArea from "../Components/RecentTripArea";
import NewLetterArea from "../Components/NewLetterArea";

import Dest1 from "../assets/img/destination/1.png";
import Dest2 from "../assets/img/destination/2.png";
import Dest3 from "../assets/img/destination/3.png";
import Dest4 from "../assets/img/destination/4.png";
import Dest5 from "../assets/img/destination/5.png";
import Dest6 from "../assets/img/destination/6.png";

import Place1 from "../assets/img/place/1.png";
import Place2 from "../assets/img/place/2.png";
import Place3 from "../assets/img/place/3.png";
import Place4 from "../assets/img/place/4.png";
import Place5 from "../assets/img/place/5.png";
import Place6 from "../assets/img/place/6.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <ul>
          <li>
            <Link to="/kg">Kg</Link>
          </li>
          <li>
            <Link to="/kz">Kz</Link>
          </li>
        </ul> */}

        <div class="popular_destination_area countries">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <a href="/travel_destination">
                  <div class="single_destination">
                    <div class="thumb">
                      <img src={Dest6} alt="" />
                    </div>
                    <div class="content">
                      <p class="d-flex align-items-center">
                        Kyrgyzstan <a href="travel_destination"> 07 Places</a>{" "}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-6">
                <a href="/travel_destination">
                  <div class="single_destination">
                    <div class="thumb">
                      <img src={Dest5} alt="" />
                    </div>
                    <div class="content">
                      <p class="d-flex align-items-center">
                        Kazakstan <a href="travel_destination"> 03 Places</a>{" "}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 col-md-6">
                <a href="/travel_destination">
                  <div class="single_destination">
                    <div class="thumb">
                      <img src={Dest2} alt="" />
                    </div>
                    <div class="content">
                      <p class="d-flex align-items-center">
                        Ozbekstan <a href="travel_destination"> 10 Places</a>{" "}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* popular_destination_area_start */}
        <div class="popular_destination_area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="section_title text-center mb_70">
                  <h3>Popular Destination</h3>
                  <p>
                    Suffered alteration in some form, by injected humour or good
                    day randomised booth anim 8-bit hella wolf moon beard words.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single_destination">
                  <div class="thumb">
                    <img src={Dest1} alt="" />
                  </div>
                  <div class="content">
                    <p class="d-flex align-items-center">
                      Italy <a href="travel_destination"> 07 Places</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_destination">
                  <div class="thumb">
                    <img src={Dest2} alt="" />
                  </div>
                  <div class="content">
                    <p class="d-flex align-items-center">
                      Brazil <a href="travel_destination"> 03 Places</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_destination">
                  <div class="thumb">
                    <img src={Dest3} alt="" />
                  </div>
                  <div class="content">
                    <p class="d-flex align-items-center">
                      America <a href="travel_destination"> 10 Places</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_destination">
                  <div class="thumb">
                    <img src={Dest4} alt="" />
                  </div>
                  <div class="content">
                    <p class="d-flex align-items-center">
                      Nepal <a href="travel_destination"> 02 Places</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_destination">
                  <div class="thumb">
                    <img src={Dest5} alt="" />
                  </div>
                  <div class="content">
                    <p class="d-flex align-items-center">
                      Maldives <a href="travel_destination"> 02 Places</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_destination">
                  <div class="thumb">
                    <img src={Dest6} alt="" />
                  </div>
                  <div class="content">
                    <p class="d-flex align-items-center">
                      Indonesia <a href="travel_destination"> 05 Places</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* popular_destination_area_end */}

        <NewLetterArea />

        <div class="popular_places_area">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="section_title text-center mb_70">
                  <h3>Popular Places</h3>
                  <p>
                    Suffered alteration in some form, by injected humour or good
                    day randomised booth anim 8-bit hella wolf moon beard words.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place1} alt="" />
                    <a href="destination_details" class="prise">
                      $500
                    </a>
                  </div>
                  <div class="place_info">
                    <a href="destination_details">
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
                        <a href="destination_details">(20 Review)</a>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <a href="destination_details">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place2} alt="" />
                    <a href="destination_details" class="prise">
                      $500
                    </a>
                  </div>
                  <div class="place_info">
                    <a href="destination_details">
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
                        <a href="destination_details">(20 Review)</a>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <a href="destination_details">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place3} alt="" />
                    <a href="destination_details" class="prise">
                      $500
                    </a>
                  </div>
                  <div class="place_info">
                    <a href="destination_details">
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
                        <a href="destination_details">(20 Review)</a>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <a href="destination_details">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place4} alt="" />
                    <a href="destination_details" class="prise">
                      $500
                    </a>
                  </div>
                  <div class="place_info">
                    <a href="destination_details">
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
                        <a href="destination_details">(20 Review)</a>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <a href="destination_details">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place5} alt="" />
                    <a href="destination_details" class="prise">
                      $500
                    </a>
                  </div>
                  <div class="place_info">
                    <a href="destination_details">
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
                        <a href="destination_details">(20 Review)</a>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <a href="destination_details">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place6} alt="" />
                    <a href="destination_details" class="prise">
                      $500
                    </a>
                  </div>
                  <div class="place_info">
                    <a href="destination_details">
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
                        <a href="destination_details">(20 Review)</a>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <a href="destination_details">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="more_place_btn text-center">
                  <a class="boxed-btn4" href="travel_destination">
                    More Places
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <VideoArea />

        <TravelVariationArea />

        <TestimonialArea />

        <RecentTripArea />
      </div>
    );
  }
}

export default Home;
