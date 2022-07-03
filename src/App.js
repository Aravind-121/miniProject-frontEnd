import React, { Component } from "react";
import { Route } from "react-router-dom";
import FinalResult from "./components/FinalResult";
//Components
import Header from "./components/Header";
import Landing from "./components/Landing";
import Product from "./components/Product";
import Result from "./components/Result";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/finalresult/:algo" component={FinalResult} />
      </React.Fragment>
    );
  }
}
export default App;
