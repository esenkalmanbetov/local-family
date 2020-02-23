import React from "react";
import { withRouter } from "react-router";

import VidoeArea from "../Components/VideoArea";
import TravelVariationArea from "../Components/TravelVariationArea";
import TestimonialArea from "../Components/TestimonialArea";
import RecentTripArea from "../Components/RecentTripArea";

import About1 from "../assets/img/about/1.png";
import About2 from "../assets/img/about/2.png";

class About extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- bradcam_area  --> */}
        <div class="bradcam_area bradcam_bg_3">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="bradcam_text text-center">
                  <h3>About Us</h3>
                  <p>Pixel perfect design with awesome contents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/ bradcam_area  --> */}

        <div class="about_story">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="story_heading">
                  <h3>Our Story</h3>
                </div>
                <div class="row">
                  <div class="col-lg-11 offset-lg-1">
                    <div class="story_info">
                      <div class="row">
                        <div class="col-lg-9">
                          <p>
                            Consulting represents success at realizing the
                            company is going in the wrong direction. The only
                            time the company fails is when it is not possible to
                            do a turnaround anymore. We help companies pivot
                            into more profitable directions where they can
                            expand and grow. It is inevitable that companies
                            will end up making a few mistakes; we help them
                            correct these mistakes.
                          </p>
                          <p>
                            Consulting represents success at realizing the
                            company is going in the wrong direction. The only
                            time the company fails is when it is not possible to
                            do a turnaround anymore. We help companies pivot
                            into more profitable directions where they can
                            expand and grow. It is inevitable that companies
                            will end up making a few mistakes; we help them
                            correct these mistakes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="story_thumb">
                      <div class="row">
                        <div class="col-lg-5 col-md-6">
                          <div class="thumb padd_1">
                            <img src={About1} alt="" />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                          <div class="thumb">
                            <img src={About2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="counter_wrap">
                      <div class="row">
                        <div class="col-lg-4 col-md-4">
                          <div class="single_counter text-center">
                            <h3 class="counter">378</h3>
                            <p>Tour has done successfully</p>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <div class="single_counter text-center">
                            <h3 class="counter">30</h3>
                            <p>Yearly tour arrange</p>
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                          <div class="single_counter text-center">
                            <h3 class="counter">2263</h3>
                            <p>Happy Clients</p>
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

        <VidoeArea />

        <TravelVariationArea />

        <TestimonialArea />

        <RecentTripArea />
      </div>
    );
  }
}

export default withRouter(About);
