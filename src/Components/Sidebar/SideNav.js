import React from "react";
// import "./sidenav.css";
import { Link } from 'react-router-dom';
import playerLogo from '../../assest/img/A_Char_King_04.png';

export default () => (
  <div className="sidenav">
    <ul className="list-group">
      <li className="list-group-item d-flex">
      <span className="text-monospace">
        <img src={playerLogo} alt="_player_logo" width="45" height="45"  className="mr-3" />
        <Link to="/player" style={{'textDecoration' : 'none'}}>
        Player
        </Link>
        </span>
      </li>
      <li className="list-group-item">
      <span className="text-monospace text-wrap">
        <img src={playerLogo} alt="_player_logo" width="45" height="45"  className="mr-3" />
        <Link to="/player/chest" style={{'textDecoration' : 'none'}}>
         Chest
        </Link>
      </span>
      </li>
      <li className="list-group-item">
      <span className="text-monospace">
        <img src={playerLogo} alt="_player_logo" width="45" height="45"  className="mr-3" />
        <Link to="/clan" style={{'textDecoration' : 'none'}}>
        Clans
        </Link>
      </span>
      </li>
      <li className="list-group-item">
      <span className="text-monospace">
        <img src={playerLogo} alt="_player_logo" width="45" height="45"  className="mr-3" />
        <Link to="/top/players" style={{'textDecoration' : 'none'}}>
        Top Player
        </Link>
      </span>
      </li>
      <li className="list-group-item">
      <span className="text-monospace">
        <img src={playerLogo} alt="_player_logo" width="45" height="45"  className="mr-3" />
        <Link to="/top/clans" style={{'textDecoration' : 'none'}}>
        Top Clans
        </Link>
      </span>
      </li>
      <li className="list-group-item">
      <span className="text-monospace">
        <img src={playerLogo} alt="_player_logo" width="45" height="45"  className="mr-3" />
        <Link to="/top/clans/war" style={{'textDecoration' : 'none'}}>
        Top War Clans
        </Link>
      </span>
      </li>
    </ul>
  </div>
);
