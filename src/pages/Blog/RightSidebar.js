import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Post1 from "../../assets/img/post/post_1.png";
import Post2 from "../../assets/img/post/post_2.png";
import Post3 from "../../assets/img/post/post_3.png";
import Post4 from "../../assets/img/post/post_4.png";
import Post5 from "../../assets/img/post/post_5.png";
import Post6 from "../../assets/img/post/post_6.png";
import Post7 from "../../assets/img/post/post_7.png";
import Post8 from "../../assets/img/post/post_8.png";
import Post9 from "../../assets/img/post/post_9.png";
import Post10 from "../../assets/img/post/post_10.png";

class RightSidebar extends React.Component {
  render() {
    return (
      <div class="blog_right_sidebar">
        <aside class="single_sidebar_widget search_widget">
          <form action="#">
            <div class="form-group">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Keyword"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Search Keyword'"
                />
                <div class="input-group-append">
                  <button class="btn" type="button">
                    <i class="ti-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <button
              class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
              type="submit"
            >
              Search
            </button>
          </form>
        </aside>

        <aside class="single_sidebar_widget post_category_widget">
          <h4 class="widget_title">Category</h4>
          <ul class="list cat-list">
            <li>
              <Link class="d-flex">
                <p>Resaurant food</p>
                <p>(37)</p>
              </Link>
            </li>
            <li>
              <Link class="d-flex">
                <p>Travel news</p>
                <p>(10)</p>
              </Link>
            </li>
            <li>
              <Link class="d-flex">
                <p>Modern technology</p>
                <p>(03)</p>
              </Link>
            </li>
            <li>
              <Link class="d-flex">
                <p>Product</p>
                <p>(11)</p>
              </Link>
            </li>
            <li>
              <Link class="d-flex">
                <p>Inspiration</p>
                <p>21</p>
              </Link>
            </li>
            <li>
              <Link class="d-flex">
                <p>Health Care (21)</p>
                <p>09</p>
              </Link>
            </li>
          </ul>
        </aside>

        <aside class="single_sidebar_widget popular_post_widget">
          <h3 class="widget_title">Recent Post</h3>
          <div class="media post_item">
            <img src={Post1} alt="post" />
            <div class="media-body">
              <Link href="single-blog.html">
                <h3>From life was you fish...</h3>
              </Link>
              <p>January 12, 2019</p>
            </div>
          </div>
          <div class="media post_item">
            <img src={Post2} alt="post" />
            <div class="media-body">
              <Link href="single-blog.html">
                <h3>The Amazing Hubble</h3>
              </Link>
              <p>02 Hours ago</p>
            </div>
          </div>
          <div class="media post_item">
            <img src={Post3} alt="post" />
            <div class="media-body">
              <Link href="single-blog.html">
                <h3>Astronomy Or Astrology</h3>
              </Link>
              <p>03 Hours ago</p>
            </div>
          </div>
          <div class="media post_item">
            <img src={Post4} alt="post" />
            <div class="media-body">
              <Link href="single-blog.html">
                <h3>Asteroids telescope</h3>
              </Link>
              <p>01 Hours ago</p>
            </div>
          </div>
        </aside>
        <aside class="single_sidebar_widget tag_cloud_widget">
          <h4 class="widget_title">Tag Clouds</h4>
          <ul class="list">
            <li>
              <Link>project</Link>
            </li>
            <li>
              <Link>love</Link>
            </li>
            <li>
              <Link>technology</Link>
            </li>
            <li>
              <Link>travel</Link>
            </li>
            <li>
              <Link>restaurant</Link>
            </li>
            <li>
              <Link>life style</Link>
            </li>
            <li>
              <Link>design</Link>
            </li>
            <li>
              <Link>illustration</Link>
            </li>
          </ul>
        </aside>

        <aside class="single_sidebar_widget instagram_feeds">
          <h4 class="widget_title">Instagram Feeds</h4>
          <ul class="instagram_row flex-wrap">
            <li>
              <Link>
                <img class="img-fluid" src={Post5} alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img class="img-fluid" src={Post6} alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img class="img-fluid" src={Post7} alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img class="img-fluid" src={Post8} alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img class="img-fluid" src={Post9} alt="" />
              </Link>
            </li>
            <li>
              <Link>
                <img class="img-fluid" src={Post10} alt="" />
              </Link>
            </li>
          </ul>
        </aside>

        <aside class="single_sidebar_widget newsletter_widget">
          <h4 class="widget_title">Newsletter</h4>

          <form action="#">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter email'"
                placeholder="Enter email"
                required
              />
            </div>
            <button
              class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </aside>
      </div>
    );
  }
}

export default withRouter(RightSidebar);
