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

const ServicesCardDesktop = ({ OnClickServiceChange, service1, service2 }) => {
  return (
    <div id="service-cards">
      <div className="container">
        <div className="row">
          {services.map(x => (
            <div key={x.id} className="col-lg-6">
              <div
                className={
                  service1 && x.name === "New Construction"
                    ? "card service-card-active"
                    : "card"
                    ? service2 && x.name === "Re-Modeling"
                      ? "card service-card-active"
                      : "card"
                    : null
                }
              >
                <div className="card-body">
                  <h2 className="text-center">{x.name}</h2>
                  <div
                    className={
                      service1 && x.name === "New Construction"
                        ? "hr-line-un-hover"
                        : "hr-line-hover"
                        ? service2 && x.name === "Re-Modeling"
                          ? "hr-line-un-hover"
                          : "hr-line-hover"
                        : null
                    }
                  />
                  <p className="lead">{x.description}</p>

                  <div className="text-center">
                    <button
                      onClick={() =>
                        OnClickServiceChange(x.name, x.activeText, {
                          service1:
                            x.name === "New Construction" ? true : false,
                          service2: x.name === "Re-Modeling" ? true : false
                        })
                      }
                      className={
                        service1 && x.name === "New Construction"
                          ? "button-active mt-3"
                          : "button mt-3"
                          ? service2 && x.name === "Re-Modeling"
                            ? "button-active mt-3"
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
