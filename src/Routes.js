import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./Components/Sidebar";
import Playerstats from "./Pages/Playerstats";
import Home from "./Pages/Home";
import ClanStats from "./Pages/ClanStats";
import Footer from "./Components/Footer/Footer";
import Upcomimg from "./Pages/Upcomimg";
import TopPlayer from "./Pages/Leaderboard/TopPlayer";
import TopClan from './Pages/Leaderboard/TopClan';
import TopWarClans  from './Pages/Leaderboard/TopWarClans';
import Error from './Components/ErrorPage/Error'

export default () => (
  <Router>
    <Sidebar>
      <Route path="/" exact component={Home} />
      <Route path="/player" exact component={Playerstats} />
      <Route path="/player/chest" component={Upcomimg} />
      <Route path="/clan" component={ClanStats} />
      <Route path="/error" component={Error} />
      
      
      <Route path="/top/players"  component={TopPlayer} />
      <Route path="/top/clans" exact component={TopClan} />
      <Route path="/top/clans/war" exact  component={TopWarClans} />
    <Footer />
    </Sidebar>
  </Router>
);