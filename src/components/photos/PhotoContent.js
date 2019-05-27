import React, { Component } from "react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    image: "/assets/gallery/photo_1.jpg",
    alt: "image 1"
  },
  {
    id: 2,
    image: "/assets/gallery/photo_2.jpg",
    alt: "image 2"
  },
  {
    id: 3,
    image: "/assets/gallery/photo_3.jpg",
    alt: "image 3"
  }
];

class PhotoContent extends Component {
  state = {
    imgDisplay: null,
    fade: false
  };

  onClickPhoto = url => {
    this.setState({
      imgDisplay: url,
      fade: true
    });

    setTimeout(
      function() {
        this.setState({ fade: false });
      }.bind(this),
      1000
    );
  };

  render() {
    const { imgDisplay, fade } = this.state;

    let display;
    if (imgDisplay) {
      display = (
        <div>
          <img
            className={fade ? "image-display display-size" : "display-size"}
            src={imgDisplay}
            alt=""
          />
        </div>
      );
    } else {
      display = (
        <div style={{ color: "white", marginTop: "80px" }}>
          <div className="d-none d-lg-block">
            <h3
              style={{
                marginLeft: "60px"
              }}
            >
              Click on <span style={{ fontWeight: "bold" }}>image</span> to
              enlarge{" "}
              <span>
                <i
                  style={{ color: "#efef0f" }}
                  className="far fa-arrow-alt-circle-right"
                />
              </span>{" "}
            </h3>
          </div>
          <div className="d-block d-lg-none">
            <h3
              style={{
                marginLeft: "60px"
              }}
            >
              Click on{" "}
              <span style={{ fontWeight: "bold", color: "#efef0f" }}>
                image
              </span>{" "}
              to enlarge{" "}
            </h3>

            <i className="far fa-arrow-alt-circle-down fa-3x photo-arrow-down" />
          </div>
        </div>
      );
    }

    return (
      <div id="photo-bottom" className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div id="photo-view" className="d-block d-lg-none">
                {display}
                {imgDisplay && (
                  <div style={{ marginTop: "-20px" }}>
                    <div className="image-text-fade-active">
                      <h2>Photos</h2>
                    </div>
                  </div>
                )}
              </div>
              <div id="photo-view" className="d-none d-lg-block col-lg-8">
                {display}
              </div>

              <div id="photo-list" className="d-none d-lg-block col-lg-4">
                <div className="row text-center m-auto">
                  {images.map(image => (
                    <div key={image.id} className="col-lg-6 pt-4 photo-list">
                      <img
                        className="photo-contact-image-hover"
                        onClick={() => this.onClickPhoto(image.image)}
                        src={image.image}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div id="photo-list" className="d-block d-lg-none">
                <div className="row text-center m-auto">
                  {images.map(image => (
                    <div
                      key={image.id}
                      className="col-lg-6 photo-list photo-list-mobile pt-4"
                    >
                      <img
                        style={{ height: "100%", width: "100%" }}
                        className="photo-contact-image-hover"
                        onClick={() => this.onClickPhoto(image.image)}
                        src={image.image}
                        alt={image.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/contact">
              <div id="photo-contact" className="d-block d-lg-none">
                <div
                  style={{
                    top: "20px",
                    left: "20px",
                    position: "absolute",
                    height: "180px",
                    width: "180px",
                    background: "white",
                    border: ".5px solid black",
                    borderRadius: "50%"
                  }}
                >
                  <h1
                    style={{
                      marginTop: "65px",
                      marginLeft: "30px",
                      color: "#563caa"
                    }}
                  >
                    Contact
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoContent;
