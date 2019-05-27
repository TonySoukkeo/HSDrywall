import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div
            style={{ marginTop: "20px" }}
            className="d-none d-lg-block col-6"
          >
            <h5>Hunter Schmidt Drywall &copy; 2019</h5>
          </div>

          <div
            style={{ marginTop: "20px" }}
            className="d-block d-lg-none col-6"
          >
            <h5 style={{ fontSize: "1rem" }}>
              Hunter Schmidt Drywall <p style={{ margin: "0" }}>&copy; 2019</p>
            </h5>
          </div>

          <div style={{ marginTop: "20px" }} className="col-6 text-right">
            <a
              href="https://www.facebook.com/hunterschmidtdrywall"
              target="_blank"
            >
              <i className="fab fa-facebook-square fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
