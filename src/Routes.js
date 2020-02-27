import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./Components/Sidebar";
import Playerstats from "./Pages/Playerstats";
import Home from "./Pages/Home"
import ClanStats from "./Pages/ClanStats";

export default () => (
  <Router>
    <Sidebar>
      {/* <Route path="/"  component={Home} /> */}
      <Route path="/player" component={Playerstats} />
      <Route path="/clan" component={ClanStats} />
    </Sidebar>
  </Router>
);