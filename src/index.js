import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import todos from "./todos";

ReactDOM.render(<App data={todos} />, document.getElementById("root"));
