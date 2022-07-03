import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "rgba(22, 22, 22, 0.7)",
          padding: "15px",
          boxShadow: "10px 10px 23px #1a1a1a,-10px -10px 23px #1a1a1a",
          backdropFilter: "saturate(180%) blur(10px)",
          fontSize: "20px",
        }}
      >
        <div className="container-fluid">
          <Link
            className="nav-link"
            to="/"
            style={{
              fontWeight: "bold",
              color: "#7f6df2",
            }}
          >
            Automated algo selection
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
