import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./Components/Sidebar";
import TopPlayer from "./Pages/Leaderboard/TopPlayer";
import TopClan from './Pages/Leaderboard/TopClan';
import TopWarClans  from './Pages/Leaderboard/TopWarClans';

export default () => (
  <Router>
    <Sidebar>
      <Route path="/top/players"  component={TopPlayer} />
      <Route path="/top/clans" exact component={TopClan} />
      <Route path="/top/clans/war" exact  component={TopWarClans} />
    </Sidebar>
  </Router>
);
