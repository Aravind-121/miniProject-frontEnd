import React, { Component } from "react";
import axios from "axios";

class Product extends Component {
  state = {
    datasetLink: "",
  };

  handleSubmit = async (e) => {
    console.log(this.state);
    e.preventDefault();
    const userData = {
      datasetLink: this.state.datasetLink,
    };
    console.log(userData);
    const res = await axios.post("/api/datasetlink", userData);

    console.log(res.data);
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
      </React.Fragment>
    );
  }
}

export default Product;
