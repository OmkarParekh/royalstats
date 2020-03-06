import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./Components/Sidebar";
import Playerstats from "./Pages/Playerstats";
import Home from "./Pages/Home"
import ClanStats from "./Pages/ClanStats";
import Footer from "./Components/Footer/Footer";
import Upcomimg from "./Pages/Upcomimg";

export default () => (
  <Router>
    <Sidebar>
      <Route path="/" exact component={Home} />
      <Route path="/player" exact component={Playerstats} />
      <Route path="/player/upcoming" component={Upcomimg} />
      <Route path="/clan" component={ClanStats} />
      <Footer />
    </Sidebar>
  </Router>
);