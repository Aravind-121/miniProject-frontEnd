import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Landing.css";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1 className="header-title">Easy peasy ML </h1>
          <p className="header-text">
            Easy peasy ml is a{" "}
            <strong className="header-text-highlight">powerful tool</strong> to{" "}
            <strong className="header-text-highlight">automate</strong> the{" "}
            <strong className="header-text-highlight">
              algorithm selection
            </strong>{" "}
            process
          </p>
          <Link className="header-link" to="/product">
            Get started
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
