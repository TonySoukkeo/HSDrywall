import React from "react";

const PhotoBanner = () => {
  return (
    <div id="photo-banner">
      <div className="container">
        <div className="d-none d-lg-block">
          <h1
            style={{
              color: "#563caa",
              transform: "rotate(-13deg)",
              marginTop: "-200px"
            }}
            className="far fa-image"
          />
        </div>
        <div className="d-block d-lg-none text-danger">
          <h1
            style={{
              fontSize: "18rem",
              color: "#563caa",
              transform: "rotate(-20deg)",
              marginTop: "-180px"
            }}
            className="far fa-image"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoBanner;
