import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Sidebar from "./Components/Sidebar";

export default () => (
  <Router>
    <Sidebar />
  </Router>
);
