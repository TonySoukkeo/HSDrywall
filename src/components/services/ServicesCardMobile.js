import React from "react";

const services = [
  {
    id: 1,
    name: "New Construction",
    description:
      "New construction entails any newly built home. I offer the highest of quality, when it comes to the taping and texture of a home, down to every detail.",
    activeText: `Includes taping and texturing. Taping is put over the gaping joints between each sheetrock through mudding. It is very important, as it used to create strong joints among the sheetrock to prevent any cracking. Whereas with Texturing, it consists of orange peel texture for walls and a basic stomp brush pattern on ceilings, for a nice modern look.`
  },
  {
    id: 2,
    name: "Re-Modeling",
    description:
      "Have walls with nasty holes through them? Or anything that just needs a little touchup? Click to find more about what I can provide.",
    activeText:
      "I can fix up any dents, holes, or any other imperfections that you may have. With that, I will also match the texture of the applied patch job its surroundings. If you're also looking to revamp your ceiling with a more modern look. I also provide scrape service on popcorn ceilings, along with a re-texture with a basic stomp pattern."
  }
];

const ServicesCardMobile = ({
  OnClickServiceChangeMobile,
  service1,
  service2
}) => {
  return (
    <div id="service-cards-mobile">
      <div className="container">
        <div className="row">
          {services.map(x => (
            <div key={x.id} className="col-lg-6">
              <div
                style={{
                  background: "#EFEFEF",
                  border: "1.6px solid black"
                }}
                className={
                  service1 && x.name === "New Construction"
                    ? "card service-card-active card-mobile"
                    : "card card-mobile"
                    ? service2 && x.name === "Re-Modeling"
                      ? "card service-card-active card-mobile"
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
                    {service1 && x.name === "New Construction"
                      ? x.activeText
                      : x.description
                      ? service2 && x.name === "Re-Modeling"
                        ? x.activeText
                        : x.description
                      : x.description}
                  </div>

                  <div
                    onClick={() =>
                      OnClickServiceChangeMobile({
                        service1: x.name === "New Construction" ? true : false,
                        service2: x.name === "Re-Modeling" ? true : false
                      })
                    }
                    className="text-center"
                  >
                    <div
                      className={
                        service1 && x.name === "New Construction"
                          ? " service-active-mobile"
                          : "service-button-mobile"
                          ? service2 && x.name === "Re-Modeling"
                            ? " service-active-mobile service-button-mobile "
                            : "service-button-mobile"
                          : "service-button-mobile"
                      }
                    >
                      <div
                        className={
                          service1 && x.name === "New Construction"
                            ? "active-link-mobile link-mobile"
                            : "link-mobile"
                            ? service2 && x.name === "Re-Modeling"
                              ? "active-link-mobile link-mobile"
                              : "link-mobile"
                            : "link-mobile"
                        }
                      >
                        {x.name}
                      </div>
                      <div
                        className={
                          service1 && x.name === "New Construction"
                            ? "service-arrow-mobile-active"
                            : "service-arrow-mobile"
                            ? service2 && x.name === "Re-Modeling"
                              ? "service-arrow-mobile-active"
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
