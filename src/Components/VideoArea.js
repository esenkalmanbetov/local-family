import React from "react";
import { withRouter } from "react-router";

class VideoArea extends React.Component {
  render() {
    return (
      <div class="video_area video_bg overlay">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="video_wrap text-center">
                <h3>Enjoy Video</h3>
                <div class="video_icon">
                  <a
                    class="popup-video video_play_button"
                    href="https://www.youtube.com/watch?v=f59dDEk57i0"
                  >
                    <i class="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoArea);
