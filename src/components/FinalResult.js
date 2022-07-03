import React, { Component } from "react";
import Table from "./Table";
import "../styles/Result.css";

class FinalResult extends Component {
  state = {
    heading: ["", "", "", "", "", ""],
    results: [
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ],
  };

  componentDidMount() {
    const results = [];
    const heading = [];
    const { algo } = this.props.match.params;
    if (algo === "regression") {
      this.setState({
        heading: ["Algorithm", "MAE", "MSE", "RMSE", "RMSLE", "R2 Score"],
        results: [
          [
            <a
              target="_blank"
              href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html"
            >
              Linear
            </a>,
            "1.52034",
            "3.957923",
            "1.989453",
            "0.68786",
            "0.985669",
          ],
          ["Ridge", "1.42034", "3.857923", "1.889453", "0.58786", "0.885669"],
          ["RidgeCV", "1.32034", "3.757923", "1.789453", "0.48786", "0.785669"],
          ["Lasso", "1.22034", "3.657923", "1.689453", "0.38786", "0.65669"],
          ["LassoCV", "1.12034", "3.647923", "1.589453", "0.28786", "0.585669"],
          [
            "ElasticNet",
            "1.10034",
            "3.957923",
            "1.989453",
            "0.68786",
            "0.985669",
          ],
          ["Lars", "1.52034", "3.957923", "1.989453", "0.68786", "0.985669"],
          ["LarsCV", "1.52034", "3.957923", "1.989453", "0.68786", "0.985669"],
        ],
      });
    } else {
      this.setState({
        heading: [
          "Algorithm",
          <a
            target="_blank"
            href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.accuracy_score.html#sklearn.metrics.accuracy_score"
          >
            Accuracy
          </a>,
          <a
            target="_blank"
            href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.precision_recall_curve.html#sklearn.metrics.precision_recall_curve"
          >
            Precision
          </a>,
          <a
            target="_blank"
            href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.recall_score.html#sklearn.metrics.recall_score"
          >
            Recall
          </a>,
          <a
            target="_blank"
            href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.f1_score.html#sklearn.metrics.f1_score"
          >
            F1 Score
          </a>,
          <a
            target="_blank"
            href="https://scikit-learn.org/stable/modules/generated/sklearn.metrics.log_loss.html#sklearn.metrics.log_loss"
          >
            Log Loss
          </a>,
        ],
        results: [
          [
            <a
              target="_blank"
              href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html"
            >
              Logistic
            </a>,
            "0.886792453",
            "0.857142857",
            "0.967741935",
            "0.909090909",
            "3.910125592",
            "0.870234604",
          ],
          [
            "Ridge",
            "0.849056604",
            "0.802631579",
            "0.983870968",
            "0.884057971",
            "5.213513361",
            "0.821480938",
          ],
          [
            "RidgeCV",
            "0.858490566",
            "0.813333333",
            "0.983870968",
            "0.890510949",
            "4.887668305",
            "0.832844575",
          ],
          [
            "LogisticCV",
            "0.896226415",
            "0.869565217",
            "0.967741935",
            "0.916030534",
            "3.584280535",
            "0.88159824",
          ],
        ],
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h4 style={{ color: "white", marginTop: "30px", marginLeft: "50px" }}>
          {this.props.match.params.algo}
        </h4>
        <Table results={this.state.results} heading={this.state.heading} />
      </React.Fragment>
    );
  }
}
export default FinalResult;
