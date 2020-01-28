import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";

export default () => (
  <Router>
    <Sidebar />
    <Route exact path="/" component={Home} />
  </Router>
);
