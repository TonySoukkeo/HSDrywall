import React from "react";
import { Link } from "react-router-dom";

const BannerContent = () => {
  return (
    <div id="banner-text">
      <div className="name">
        Hunter <span style={{ color: "#8C8C8C" }}>Schmidt</span>{" "}
      </div>
      <div className="drywall">Drywall</div>
      <div className="taping lead">Taping</div>
      <div className="amp">
        <div className="d-flex flex-row">
          <div className="amp-line" />
          <p className="amp-margin">&</p>
          <div className="amp-line" />
        </div>
      </div>
      <div className="texture lead">Texture</div>

      <div className="d-sm d-flex justify-content-center">
        <div
          style={{
            marginTop: "32px"
          }}
        >
          <Link to="/services">
            <button className="button mr-4 service">Services</button>
          </Link>
          <Link to="/contact">
            <button className="button contact">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
