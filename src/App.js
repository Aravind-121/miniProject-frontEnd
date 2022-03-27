import React, { Component } from "react";
import { Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Landing from "./components/Landing";
import Product from "./components/Product";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/product" component={Product} />
      </React.Fragment>
    );
  }
}
export default App;
