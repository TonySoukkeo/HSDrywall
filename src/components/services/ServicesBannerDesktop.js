import React from "react";

const ServicesBannerDesktop = ({ serviceHeader, serviceText }) => {
  return (
    <div id="service-banner">
      <div className="container mt-5 text-center">
        <h1 className="header display-3">{serviceHeader} Desktop</h1>
        <p className="service-text">{serviceText}</p>
      </div>
    </div>
  );
};

export default ServicesBannerDesktop;
