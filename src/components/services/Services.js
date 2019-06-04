import React, { Component } from "react";
import ServicesBannerDesktop from "./ServicesBannerDesktop";
import ServicesBannerMobile from "./ServicesBannerMobile";
import ServicesCardDesktop from "./ServicesCardDesktop";
import ServicesCardMobile from "./ServicesCardMobile";
import ServicesContact from "./ServicesContact";
import Footer from "../footer/Footer";

class Services extends Component {
  state = {
    serviceHeader: "Services",
    serviceText:
      "I offer services for both newly built homes and remodeling. Click on each of the services to find out more!",
    service1: false,
    service2: false
  };

  OnClickServiceChange = (header, text, service) => {
    // Update state
    this.setState({
      serviceHeader: header,
      serviceText: text,
      service1: service.service1,
      service2: service.service2
    });
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  OnClickServiceChangeMobile = service => {
    // Update state
    this.setState({
      service1: service.service1,
      service2: service.service2
    });
  };

  render() {
    const { serviceHeader, serviceText, service1, service2 } = this.state;
    return (
      <div>
        <div className="d-none d-lg-block">
          <ServicesBannerDesktop
            serviceHeader={serviceHeader}
            serviceText={serviceText}
          />
        </div>

        <div className="d-lg-none d-block">
          <ServicesBannerMobile
            serviceHeader={serviceHeader}
            serviceText={serviceText}
            OnClickServiceChange={this.OnClickServiceChange}
          />
        </div>
        <div className="d-lg-none d-block">
          <ServicesCardMobile
            OnClickServiceChangeMobile={this.OnClickServiceChangeMobile}
            service1={service1}
            service2={service2}
          />
        </div>

        <div className="d-none d-lg-block">
          <ServicesCardDesktop
            OnClickServiceChange={this.OnClickServiceChange}
            service1={service1}
            service2={service2}
          />
        </div>

        <ServicesContact />
        <Footer />
      </div>
    );
  }
}

export default Services;
