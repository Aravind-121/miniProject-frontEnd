import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Table from "./Table";
import "../styles/Result.css";

class Result extends Component {
  state = {
    option: "regression",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.history.push(`/finalresult/${this.state.option}`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="card description-card">
          <h2>Dataset Description:</h2>
          <h5>
            <strong>Rows: </strong>351
          </h5>
          <h5>
            <strong>Columns: </strong>36
          </h5>
        </div>
        <Table
          results={[
            ["Count", "", "", "", "", ""],
            ["Mean", "", "", "", "", ""],
            ["STD", "", "", "", "", ""],
            ["Min", "", "", "", "", ""],
            ["25%", "", "", "", "", ""],
            ["50%", "", "", "", "", ""],
            ["75%", "", "", "", "", ""],
            ["Max", "", "", "", "", ""],
          ]}
          heading={["col1", "col2", "col3", "col4", "col5", "col6..."]}
        />
        <form className="form-container" onSubmit={this.handleSubmit}>
          <select
            class="form-select"
            onChange={(e) => this.setState({ option: e.target.value })}
          >
            <option value="regression">Regression</option>
            <option value="classification">Classification</option>
          </select>
          <button>Get metrics</button>
        </form>
      </React.Fragment>
    );
  }
}
export default withRouter(Result);
