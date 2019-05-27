import React, { Component } from "react";

class ContactBanner extends Component {
  state = {
    total: null,
    sqrFt: "",
    estimateShowDisplay: false,
    error: null
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onEstimateSubmit = e => {
    e.preventDefault();

    const { sqrFt } = this.state,
      estimate = sqrFt * 0.6,
      total = estimate.toFixed(2);

    if (sqrFt !== "") {
      this.setState({ error: null });
      this.setState({ estimateShowDisplay: true, total: null });

      setTimeout(
        function() {
          this.setState({ total, sqrFt: "" });
        }.bind(this),
        3000
      );
    } else {
      this.setState({ error: "Please enter SqrFt" });
    }
  };

  render() {
    const { sqrFt, total, estimateShowDisplay, error } = this.state;

    let result;
    if (total) {
      result = (
        <div className="w-50 m-auto">
          <div className="card-body">
            <em>
              <b> Estimated Cost:</b>
            </em>{" "}
            <span
              style={{
                color: "green",
                fontWeight: "bold"
              }}
            >
              ${total}
            </span>
            <br />
            <span style={{ color: "red" }}>
              * This is an estimate, and not the final price.
            </span>
          </div>
        </div>
      );
    } else {
      result = (
        <div>
          <img
            style={{ height: "200px", width: "200px", marginTop: "-50px" }}
            src="/assets/loading.gif"
            alt="spinning"
          />
        </div>
      );
    }

    return (
      <div id="contact" className="text-center">
        <div className="container">
          <h3 className="display-4">
            Get in touch for any questions or estimate
          </h3>

          <h4 className="mt-4 mb-4">
            Get a{" "}
            <em>
              <b>rough</b>
            </em>{" "}
            estimate{" "}
          </h4>

          <p className="estimate">Enter in approximate Square ft. of area.</p>

          <div className="d-block d-lg-none">
            <form onSubmit={this.onEstimateSubmit}>
              <div
                style={{
                  width: "70%"
                }}
                className="input-group input-group-lg form-rounded m-auto"
              >
                <input
                  name="sqrFt"
                  value={sqrFt}
                  onChange={this.onChange}
                  className="form-control form-control-lg  m-auto form-rounded"
                  placeholder="Sqrt ft"
                  type="number"
                />
                <div className="input-group-append form-rounded">
                  <button type="submit" className="btn btn-outline-primary">
                    Calculate
                  </button>
                </div>
              </div>
              {error !== null && <div>error erros</div>}
            </form>
          </div>

          <div className="d-none d-lg-block">
            <form onSubmit={this.onEstimateSubmit}>
              <div
                style={{
                  width: "35%"
                }}
                className="input-group input-group-lg form-rounded m-auto"
              >
                <input
                  name="sqrFt"
                  value={sqrFt}
                  onChange={this.onChange}
                  className="form-control form-control-lg  m-auto form-rounded"
                  placeholder="Sqrt ft"
                  type="number"
                />
                <div className="input-group-prepend form-rounded">
                  <button type="submit" className="btn btn-outline-primary">
                    Calculate
                  </button>
                </div>
              </div>
              {error !== null && <div>error erros</div>}
            </form>
          </div>
          {estimateShowDisplay && result}
        </div>
      </div>
    );
  }
}

export default ContactBanner;
