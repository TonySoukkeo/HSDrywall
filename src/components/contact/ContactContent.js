import React, { Component } from "react";

class ContactContent extends Component {
  state = {
    phoneHover: false,
    socialHover: false
  };

  handlePhoneMouseOver = () => {
    this.setState(this.togglePhoneState);
  };

  togglePhoneState = state => {
    return {
      phoneHover: !state.phoneHover
    };
  };

  handleSocialMouseOver = () => {
    this.setState(this.toggleSocialState);
  };

  toggleSocialState = state => {
    return {
      socialHover: !state.socialHover
    };
  };

  render() {
    const { phoneHover, socialHover } = this.state;

    return (
      <div id="contact-content">
        <div className="container-fluid">
          <div className="row text-center">
            <div
              onMouseEnter={this.handlePhoneMouseOver}
              onMouseLeave={this.handlePhoneMouseOver}
              id="contact-phone"
              className="d-none d-lg-block col-lg-6"
            >
              <i className="fas fa-phone fa-7x" />
              {phoneHover && (
                <div className="mt-5">
                  <h3 className="contact-phone">
                    Call or text at (406) 231-4568
                  </h3>
                </div>
              )}
            </div>

            <div
              onMouseEnter={this.handlePhoneMouseOver}
              onMouseLeave={this.handlePhoneMouseOver}
              id="contact-phone"
              className="d-block d-lg-none col-lg-6"
            >
              <a href="tel:406-231-4568">
                <i className="fas fa-phone fa-7x" />
              </a>

              <div className="mt-5">
                <h3
                  style={{
                    fontSize: "3rem"
                  }}
                  className="contact-phone"
                >
                  Call{" "}
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontStyle: "italic",
                      fontWeight: "bold"
                    }}
                    className="lead"
                  >
                    or
                  </span>{" "}
                  text
                </h3>
              </div>
            </div>

            <div
              onMouseEnter={this.handleSocialMouseOver}
              onMouseLeave={this.handleSocialMouseOver}
              id="contact-social"
              className="d-none d-lg-block col-lg-6"
            >
              <a
                id="contact-social-icon"
                href="https://www.facebook.com/hunterschmidtdrywall"
                target="_blank"
              >
                <i className="fab fa-facebook-f fa-7x" />
                {socialHover && (
                  <div className="mt-5">
                    <h3 className="contact-social">Follow and like!</h3>
                  </div>
                )}
              </a>
            </div>

            <div
              onMouseEnter={this.handleSocialMouseOver}
              onMouseLeave={this.handleSocialMouseOver}
              id="contact-social"
              className="d-block d-lg-none col-lg-6"
            >
              <a
                id="contact-social-icon"
                href="https://www.facebook.com/hunterschmidtdrywall"
                target="_blank"
              >
                <i className="fab fa-facebook-f fa-7x" />

                <div className="mt-5">
                  <h3 className="contact-social">Follow and like!</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContent;
