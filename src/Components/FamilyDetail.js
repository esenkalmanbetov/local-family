import React from "react";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router";
import { Carousel } from "react-bootstrap";

import Avatar from "../assets/img/testmonial/avatar.jpg";

import config from "../config/config";

import "./FamilyDetail.scss";
class FamilyDetail extends React.Component {
  get user() {
    return this.props.stores.authStore.user();
  }

  get familyDetail() {
    return this.props.stores.familyStore.familyDetail();
  }

  componentDidMount() {
    this.loadFamilyDetail();
  }

  loadFamilyDetail = () => {
    const { familyId } = this.props.match.params;
    this.props.stores.familyStore.loadFamilyDetail(familyId);
  };
  render() {
    const date = new Date();
    const dateFormat =
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();

    const { familyDetail } = this;
    const user = { ...familyDetail.user };

    return (
      <div>
        <Carousel className="carousel">
          {familyDetail.images.map((picture) => {
            return (
              <Carousel.Item key={picture.id}>
                <img
                  src={config.apiUrl + "/" + picture.pathName}
                  alt="Third slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div class="destination_details_info">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-9">
                <h1>{familyDetail.familyName}</h1>
                <div class="destination_info">
                  <h3>Description</h3>
                  <div>{familyDetail.description}</div>
                </div>

                <div className="text-center single_carousel">
                  <h2>host</h2>
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div class="single_testmonial text-center">
                        <div class="author_thumb">
                          <img src={Avatar} alt="" />
                        </div>
                        <p>
                          "Working in conjunction with humanitarian aid
                          agencies, we have supported programmes to help
                          alleviate human suffering.
                        </p>
                        <div class="testmonial_author">
                          <h3>
                            {user.firstName} {user.lastName}
                          </h3>
                          <h5>contact: {user.email}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bordered_1px"></div>
                {this.user.id ? (
                  <div class="contact_join">
                    <h3>Leave a comment</h3>
                    <form action="#">
                      <div class="row">
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
                ) : null}

                <div class="section-top-border">
                  <h2 className="text-center">Comments</h2>
                  <h3>
                    Esen Kalmanbetov <span className="date">{dateFormat}</span>
                  </h3>

                  <div class="row">
                    <div class="view-comment">ek</div>
                    <div class="col-md-9 mt-sm-20">
                      <p>
                        Recently, the US Federal government banned online
                        casinos from operating in America by making it illegal
                        to transfer money to them through any US bank or payment
                        system. As a result of this law, most of the popular
                        online casino networks such as Party Gaming and PlayTech
                        left the United States. Overnight, online casino players
                        found themselves being chased by the Federal government.
                        But, after a fortnight, the online casino industry came
                        up with a solution and new online casinos started taking
                      </p>
                    </div>
                  </div>
                </div>
                <div class="section-top-border">
                  <h3>
                    Esen Kalmanbetov <span className="date">{dateFormat}</span>
                  </h3>
                  <div class="row">
                    <div class="view-comment">ek</div>
                    <div class="col-md-9 mt-sm-20">
                      <p>
                        Recently, the US Federal government banned online
                        casinos from operating in America by making it illegal
                        to transfer money to them through any US bank or payment
                        system. As a result of this law, most of the popular
                        online casino networks such as Party Gaming and PlayTech
                        left the United States. Overnight, online casino players
                        found themselves being chased by the Federal government.
                        But, after a fortnight, the online casino industry came
                        up with a solution and new online casinos started taking
                      </p>
                    </div>
                  </div>
                </div>
                <div class="section-top-border">
                  <h3>
                    Esen Kalmanbetov <span className="date">{dateFormat}</span>
                  </h3>
                  <div class="row">
                    <div class="view-comment">ek</div>
                    <div class="col-md-9 mt-sm-20">
                      <p>
                        Recently, the US Federal government banned online
                        casinos from operating in America by making it illegal
                        to transfer money to them through any US bank or payment
                        system. As a result of this law, most of the popular
                        online casino networks such as Party Gaming and PlayTech
                        left the United States. Overnight, online casino players
                        found themselves being chased by the Federal government.
                        But, after a fortnight, the online casino industry came
                        up with a solution and new online casinos started taking
                      </p>
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

export default inject("stores")(withRouter(observer(FamilyDetail)));
