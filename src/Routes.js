import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./Components/Sidebar";
import Playerstats from "./Pages/Playerstats";

export default () => (
  <Router>
    <Sidebar>
      <Route path="/player" component={Playerstats} />
    </Sidebar>
  </Router>
);