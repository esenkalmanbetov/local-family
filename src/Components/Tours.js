import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import Place2 from "../assets/img/place/2.png";

class Tours extends React.Component {
  render() {
    const {
      props: { nextUrl, tours },
    } = this;

    let { url } = this.props.match;
    url = nextUrl ? url + nextUrl : url;
    return (
      <div class="popular_places_area">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center mb_70">
                <h3>Tours</h3>
              </div>
            </div>
          </div>
          <div class="row">
            {tours.map((tour) => (
              <div class="col-lg-4 col-md-6" key={tour.id}>
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place2} alt="" />
                    <Link to={`${url}/tourId`} class="prise">
                      ${tour.price}
                    </Link>
                  </div>
                  <div class="place_info">
                    <Link to={`${url}/tourId`}>
                      <h3>{tour.title}</h3>
                    </Link>
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
                        <Link to={`${url}/tourId`}>{tour.duration} Days</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="more_place_btn text-center">
                <Link class="boxed-btn4" to={`${url}`}>
                  More Tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Tours);
