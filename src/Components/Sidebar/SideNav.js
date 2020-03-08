import React from "react";
import "./sidenav.css";
import { Link } from 'react-router-dom';

export default () => (
  <div className="sidenav">
    <ul className="list-group">
      <li className="list-group-item">
      <Link to="/player">Player</Link>
      </li>
      <li className="list-group-item">
      <Link to="/clan">Clan</Link>
      </li>
      <li className="list-group-item">
        <Link to="/top/players">Top Player</Link>   
      </li>
      <li className="list-group-item">
      <Link to="/top/clans">Top Clans</Link>   
      </li>
      <li className="list-group-item">
      <Link to="/top/clans/war">Top War Clans</Link>   
      </li>
      
    </ul>
  </div>
);
