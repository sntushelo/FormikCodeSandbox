import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import LandingPage from "./components/dashboards/landingPage";

const App = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
