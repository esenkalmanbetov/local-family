import React from "react";
import { withRouter } from "react-router";
import { Carousel } from "react-bootstrap";

import BannerPng from "../assets/img/banner/banner.png";
import Banner2Png from "../assets/img/banner/banner2.png";
import Banner3Png from "../assets/img/banner/banner3.png";
// import Author from "../assets/img/testmonial/author.png";
// import DefaulAvatar from "../assets/img/testmonial/default-avatar.jpg";
import Avatar from "../assets/img/testmonial/avatar.jpg";

import "./FamilyDetail.scss";
class FamilyDetail extends React.Component {
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
    console.log("type: ", typeof date, date);
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
        <div class="destination_details_info">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-9">
                <h1>Kalmanbetov's family</h1>
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
                          <h3> Kalmanbetov Esen</h3>
                          <h5>contact: esenkalmanbetov@gmail.com</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bordered_1px"></div>
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

export default withRouter(FamilyDetail);
