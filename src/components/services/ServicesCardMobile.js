import React from "react";

const services = [
  {
    name: "service1",
    description: "short description",
    activeText: "Active text 1"
  },
  {
    name: "service2",
    description: "short description",
    activeText: "Active text2"
  },
  {
    name: "service3",
    description: "short description",
    activeText: "Active text3"
  }
];

const ServicesCardMobile = ({
  OnClickServiceChangeMobile,
  service1,
  service2,
  service3,
  fade
}) => {
  return (
    <div id="service-cards-mobile">
      <div className="container">
        <div className="row">
          {services.map(x => (
            <div className="col-md-4">
              <div
                style={{
                  background: "#EFEFEF",
                  border: "1.6px solid black"
                }}
                className={
                  service1 && x.name === "service1"
                    ? "card service-card-active card-mobile"
                    : "card card-mobile"
                    ? service2 && x.name === "service2"
                      ? "card service-card-active card-mobile"
                      : "card card-mobile"
                      ? service3 && x.name === "service3"
                        ? "card service-card-active card-mobile"
                        : "card card-mobile"
                      : "card card-mobile"
                    : null
                }
              >
                <div className="card-body">
                  <div
                    style={{
                      marginTop: "150px"
                    }}
                    className="lead"
                  >
                    {service1 && x.name === "service1"
                      ? x.activeText
                      : x.description
                      ? service2 && x.name === "service2"
                        ? x.activeText
                        : x.description
                        ? service3 && x.name === "service3"
                          ? x.activeText
                          : x.description
                        : x.description
                      : x.description}
                  </div>

                  <div
                    onClick={() =>
                      OnClickServiceChangeMobile({
                        service1: x.name === "service1" ? true : false,
                        service2: x.name === "service2" ? true : false,
                        service3: x.name === "service3" ? true : false
                      })
                    }
                    className="text-center"
                  >
                    <div
                      className={
                        service1 && x.name === "service1"
                          ? " service-active-mobile"
                          : "service-button-mobile"
                          ? service2 && x.name === "service2"
                            ? " service-active-mobile service-button-mobile "
                            : "service-button-mobile"
                            ? service3 && x.name === "service3"
                              ? "service-button-mobile service-active-mobile"
                              : "service-button-mobile"
                            : "service-button-mobile"
                          : "service-button-mobile"
                      }
                    >
                      <div
                        className={
                          service1 && x.name === "service1"
                            ? "active-link-mobile link-mobile"
                            : "link-mobile"
                            ? service2 && x.name === "service2"
                              ? "active-link-mobile link-mobile"
                              : "link-mobile"
                              ? service3 && x.name === "service3"
                                ? "active-link-mobile link-mobile"
                                : "link-mobile"
                              : "link-mobile"
                            : "link-mobile"
                        }
                      >
                        {x.name}
                      </div>
                      <div
                        className={
                          service1 && x.name === "service1"
                            ? "service-arrow-mobile-active"
                            : "service-arrow-mobile"
                            ? service2 && x.name === "service2"
                              ? "service-arrow-mobile-active"
                              : "service-arrow-mobile"
                              ? service3 && x.name === "service3"
                                ? "service-arrow-mobile-active"
                                : "service-arrow-mobile"
                              : "service-arrow-mobile"
                            : "service-arrow-mobile"
                        }
                      >
                        <i className="far fa-arrow-alt-circle-down fa-2x" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCardMobile;
