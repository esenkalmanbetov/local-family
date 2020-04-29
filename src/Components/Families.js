import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import Place5 from "../assets/img/place/5.png";

class Families extends React.Component {
  render() {
    const {
      props: { nextUrl, families },
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
            {families.map((family) => (
              <div class="col-lg-4 col-md-6" key={family.id}>
                <div class="single_place">
                  <div class="thumb">
                    <img src={Place5} alt="" />
                  </div>
                  <div class="place_info">
                    <Link to={`${url}/fanilyId`}>
                      <h3>{family.familyName}</h3>
                    </Link>
                    <p>{family.location}</p>
                    <div class="rating_days d-flex justify-content-between">
                      <span class="d-flex justify-content-center align-items-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <Link to={`${url}/fanilyId`}>(20 Review)</Link>
                      </span>
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
