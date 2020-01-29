import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./Components/Sidebar";
import Leaderboard from "./Pages/Leaderboard";

export default () => (
  <Router>
    <Sidebar>
      <Route path="/leaderboard" component={Leaderboard} />
    </Sidebar>
  </Router>
);
