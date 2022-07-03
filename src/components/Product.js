import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Table from "./Table";

class Product extends Component {
  state = {
    datasetLink: "",
    showTable: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/datasetlink", {
      data: this.state.datasetLink,
    });
    this.props.history.push("/result");
  };

  validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  renderLoader = () => {
    return (
      <div className="text-center loader">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <form
          className="container"
          style={{ marginTop: "150px", color: "#A9A9A9" }}
          onSubmit={this.handleSubmit}
        >
          <h3 style={{ marginBottom: "50px" }}>
            Drop your data set drive link below!
          </h3>
          <div className="input-group mb-3">
            <input
              type="text"
              value={this.state.datasetLink}
              onChange={(e) => this.setState({ datasetLink: e.target.value })}
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              style={{
                backgroundColor: "rgba(22, 22, 22, 0.7)",
                borderColor: "#7f6df2",
                color: "white",
              }}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              style={{ color: "#7f6df2" }}
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        {/* {this.state.showTable && <Table />} */}
      </React.Fragment>
    );
  }
}

export default withRouter(Product);
