import React from "react";
import { withRouter } from "react-router";

import Author from "../assets/img/testmonial/author.png";

class TestimonialArea extends React.Component {
  render() {
    return (
      <div class="testimonial_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="testmonial_active owl-carousel">
                <div class="single_carousel">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div class="single_testmonial text-center">
                        <div class="author_thumb">
                          <img src={Author} alt="" />
                        </div>
                        <p>
                          "Working in conjunction with humanitarian aid
                          agencies, we have supported programmes to help
                          alleviate human suffering.
                        </p>
                        <div class="testmonial_author">
                          <h3>- Micky Mouse</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single_carousel">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div class="single_testmonial text-center">
                        <div class="author_thumb">
                          <img src={Author} alt="" />
                        </div>
                        <p>
                          "Working in conjunction with humanitarian aid
                          agencies, we have supported programmes to help
                          alleviate human suffering.
                        </p>
                        <div class="testmonial_author">
                          <h3>- Tom Mouse</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single_carousel">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <div class="single_testmonial text-center">
                        <div class="author_thumb">
                          <img src={Author} alt="" />
                        </div>
                        <p>
                          "Working in conjunction with humanitarian aid
                          agencies, we have supported programmes to help
                          alleviate human suffering.
                        </p>
                        <div class="testmonial_author">
                          <h3>- Jerry Mouse</h3>
                        </div>
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

export default withRouter(TestimonialArea);
