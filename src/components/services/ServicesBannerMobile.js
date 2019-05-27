import React from "react";

const ServicesBannerMobile = ({ serviceHeader, serviceText }) => {
  return (
    <div id="service-banner" style={{ position: "relative" }}>
      <div className="container mt-5 text-center">
        <h1 className="header">{serviceHeader} </h1>
        <p className="service-text">{serviceText}</p>
      </div>
    </div>
  );
};

export default ServicesBannerMobile;
