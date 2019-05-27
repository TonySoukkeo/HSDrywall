import React, { Component } from "react";
import BannerContent from "./BannerContent";

class Banner extends Component {
  render() {
    return (
      <div id="Banner">
        <div id="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mx-auto">
                <BannerContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
