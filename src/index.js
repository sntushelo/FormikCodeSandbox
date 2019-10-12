import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import RfqForm from "./components/forms/rfqForm";

const App = () => {
  return <RfqForm />;
};

ReactDOM.render(<App />, document.getElementById("root"));
