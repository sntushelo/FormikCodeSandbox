import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Dashboard from "./components/dashboards/dashboard";
import Store from './store';

export default function App() {

  return (
    <div>
      <Store>
        <Dashboard/>
      </Store>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
