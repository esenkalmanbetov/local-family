import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import NewLetterArea from "../../../Components/NewLetterArea";
import RecentTripArea from "../../../Components/RecentTripArea";

import Place1 from "../../../assets/img/place/1.png";
import Place2 from "../../../assets/img/place/2.png";
import Place3 from "../../../assets/img/place/3.png";
import Place4 from "../../../assets/img/place/4.png";
import Place5 from "../../../assets/img/place/5.png";
import Place6 from "../../../assets/img/place/6.png";

class NavTours extends React.Component {
  render() {
    const { url } = this.props.match;

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
                    <Link to={`${url}/tourId`} class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to={`${url}/tourId`}>
                      <h3>Zheti Oguz</h3>
                    </Link>
                    <p>Ysyk kol Region, Kyrgyzstan</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to={`${url}/tourId`}>(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to={`${url}/tourId`}>5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place2} alt="" />
                    <Link to={`${url}/tourId`} class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to={`${url}/tourId`}>
                      <h3>Zheti Oguz</h3>
                    </Link>
                    <p>Ysyk kol Region, Kyrgyzstan</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to={`${url}/tourId`}>(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to={`${url}/tourId`}>5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place3} alt="" />
                    <Link to={`${url}/tourId`} class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to={`${url}/tourId`}>
                      <h3>Zheti Oguz</h3>
                    </Link>
                    <p>Ysyk kol Region, Kyrgyzstan</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to={`${url}/tourId`}>(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to={`${url}/tourId`}>5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place4} alt="" />
                    <Link to={`${url}/tourId`} class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to={`${url}/tourId`}>
                      <h3>Zheti Oguz</h3>
                    </Link>
                    <p>Ysyk kol Region, Kyrgyzstan</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to={`${url}/tourId`}>(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to={`${url}/tourId`}>5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place5} alt="" />
                    <Link to={`${url}/tourId`} class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to={`${url}/tourId`}>
                      <h3>Zheti Oguz</h3>
                    </Link>
                    <p>Ysyk kol Region, Kyrgyzstan</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to={`${url}/tourId`}>(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to={`${url}/tourId`}>5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place6} alt="" />
                    <Link to={`${url}/tourId`} class="prise">
                      $500
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to={`${url}/tourId`}>
                      <h3>Zheti Oguz</h3>
                    </Link>
                    <p>Ysyk kol Region, Kyrgyzstan</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to={`${url}/tourId`}>(20 Review)</Link>
                      </span>
                      <div class="days">
                        <i class="fa fa-clock-o"></i>
                        <Link to={`${url}/tourId`}>5 Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="more_place_btn text-center">
                  <Link class="boxed-btn4">More Tours</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NewLetterArea />
        <RecentTripArea />
      </div>

      // <div>
      //   <h2>Join Tours</h2>
      //   <h4>Lists</h4>
      //   <ul>
      //     <li>
      //       <Link to={`${url}/a`}>tour a</Link>
      //     </li>
      //     <li>
      //       <Link to={`${url}/b`}>tour b</Link>
      //     </li>
      //     <li>
      //       <Link to={`${url}/c`}>tour c</Link>
      //     </li>
      //   </ul>
      // </div>
    );
  }
}

export default withRouter(NavTours);
