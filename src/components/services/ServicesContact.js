import React from "react";
import { Link } from "react-router-dom";

const ServicesContact = () => {
  return (
    <div id="services-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center pt-5 pb-5">
            <h1 className="display-2">Get in touch</h1>
            <Link to="/contact">
              <button className="button contact-btn">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContact;
