import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import RightSidebar from "./RightSidebar";

import SingleBlog1 from "../../assets/img/blog/single_blog_1.png";
import SingleBlog2 from "../../assets/img/blog/single_blog_2.png";
import SingleBlog3 from "../../assets/img/blog/single_blog_3.png";
import SingleBlog4 from "../../assets/img/blog/single_blog_4.png";
import SingleBlog5 from "../../assets/img/blog/single_blog_5.png";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <div class="bradcam_area bradcam_bg_4">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="bradcam_text text-center">
                  <h3>blog</h3>
                  <p>Pixel perfect design with awesome contents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="blog_area section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mb-5 mb-lg-0">
                <div class="blog_left_sidebar">
                  <article class="blog_item">
                    <div class="blog_item_img">
                      <img
                        class="card-img rounded-0"
                        src={SingleBlog1}
                        alt=""
                      />
                      <a href="single-blog" class="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>

                    <div class="blog_details">
                      <a class="d-inline-block" href="single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul class="blog-info-link">
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-user"></i> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-comments"></i> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>

                  <article class="blog_item">
                    <div class="blog_item_img">
                      <img
                        class="card-img rounded-0"
                        src={SingleBlog2}
                        alt=""
                      />
                      <a href="single-blog" class="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>

                    <div class="blog_details">
                      <a class="d-inline-block" href="single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul class="blog-info-link">
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-user"></i> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-comments"></i> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>

                  <article class="blog_item">
                    <div class="blog_item_img">
                      <img
                        class="card-img rounded-0"
                        src={SingleBlog3}
                        alt=""
                      />
                      <a href="single-blog" class="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>

                    <div class="blog_details">
                      <a class="d-inline-block" href="single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul class="blog-info-link">
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-user"></i> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-comments"></i> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>

                  <article class="blog_item">
                    <div class="blog_item_img">
                      <img
                        class="card-img rounded-0"
                        src={SingleBlog4}
                        alt=""
                      />
                      <a href="single-blog" class="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>

                    <div class="blog_details">
                      <a class="d-inline-block" href="single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul class="blog-info-link">
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-user"></i> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-comments"></i> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>

                  <article class="blog_item">
                    <div class="blog_item_img">
                      <img
                        class="card-img rounded-0"
                        src={SingleBlog5}
                        alt=""
                      />
                      <a href="single-blog" class="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>

                    <div class="blog_details">
                      <a class="d-inline-block" href="single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul class="blog-info-link">
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-user"></i> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="single-blog">
                            <i class="fa fa-comments"></i> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>

                  <nav class="blog-pagination justify-content-center d-flex">
                    <ul class="pagination">
                      <li class="page-item">
                        <Link class="page-link" aria-label="Previous">
                          <i class="ti-angle-left"></i>
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link">
                          1
                        </Link>
                      </li>
                      <li class="page-item active">
                        <Link class="page-link">
                          2
                        </Link>
                      </li>
                      <li class="page-item">
                        <Link class="page-link" aria-label="Next">
                          <i class="ti-angle-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-lg-4">
                <RightSidebar />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Blog);
