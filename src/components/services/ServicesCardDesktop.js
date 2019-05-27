import React from "react";

const services = [
  {
    id: 1,
    name: "service1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo voluptas quis quos enim. Non adipisci nulla deserunt dolorum cum.",
    activeText: "Active Text1"
  },
  {
    id: 2,
    name: "service2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo voluptas quis quos enim. Non adipisci nulla deserunt dolorum cum.",
    activeText: "Active Text2"
  },
  {
    id: 3,
    name: "service3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo voluptas quis quos enim. Non adipisci nulla deserunt dolorum cum.",
    activeText: "Active Text3"
  }
];

const ServicesCardDesktop = ({
  OnClickServiceChange,
  service1,
  service2,
  service3
}) => {
  return (
    <div id="service-cards">
      <div className="container">
        <div className="row">
          {services.map(x => (
            <div key={x.id} className="col-md-4">
              <div
                className={
                  service1 && x.name === "service1"
                    ? "card service-card-active"
                    : "card"
                    ? service2 && x.name === "service2"
                      ? "card service-card-active"
                      : "card"
                      ? service3 && x.name === "service3"
                        ? "card service-card-active"
                        : "card"
                      : "card"
                    : null
                }
              >
                <div className="card-body">
                  <h2 className="text-center">{x.name}</h2>
                  <div
                    className={
                      service1 && x.name === "service1"
                        ? "hr-line-un-hover"
                        : "hr-line-hover"
                        ? service2 && x.name === "service2"
                          ? "hr-line-un-hover"
                          : "hr-line-hover"
                          ? service3 && x.name === "service3"
                            ? "hr-line-un-hover"
                            : "hr-line-hover"
                          : "hr-line-hover"
                        : null
                    }
                  />
                  <p className="lead">{x.description}</p>

                  <div className="text-center">
                    <button
                      onClick={() =>
                        OnClickServiceChange(x.name, x.activeText, {
                          service1: x.name === "service1" ? true : false,
                          service2: x.name === "service2" ? true : false,
                          service3: x.name === "service3" ? true : false
                        })
                      }
                      className={
                        service1 && x.name === "service1"
                          ? "button-active mt-3"
                          : "button mt-3"
                          ? service2 && x.name === "service2"
                            ? "button-active mt-3"
                            : "button mt-3"
                            ? service3 && x.name === "service3"
                              ? "button-active mt-3"
                              : "button mt-3"
                            : "button mt-3"
                          : null
                      }
                    >
                      Learn More
                    </button>
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

export default ServicesCardDesktop;
