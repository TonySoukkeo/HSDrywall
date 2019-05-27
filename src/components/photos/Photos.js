import React, { Component } from "react";
import PhotoBanner from "./PhotoBanner";
import PhotoContent from "./PhotoContent";
import Footer from "../footer/Footer";

class Photos extends Component {
  render() {
    return (
      <div>
        <PhotoBanner />
        <PhotoContent />
        <Footer />
      </div>
    );
  }
}

export default Photos;
