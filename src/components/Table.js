import React, { Component } from "react";
import "../styles/Table.css";

class Table extends Component {
  renderResults = () => {
    return this.props.results.map((el) => {
      return (
        <tr>
          <td>{el[0]}</td>
          <td>{el[1]}</td>
          <td>{el[2]}</td>
          <td>{el[3]}</td>
          <td>{el[4]}</td>
          <td>{el[5]}</td>
        </tr>
      );
    });
  };

  renderHeading = () => {
    return this.props.heading.map((el) => {
      return <th>{el}</th>;
    });
  };

  render() {
    return (
      <React.Fragment>
        <table className="table" style={{ color: "white" }}>
          <tr>{this.renderHeading()}</tr>
          {this.renderResults()}
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
