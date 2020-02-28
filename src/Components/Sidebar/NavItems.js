import React from "react";
import {Link } from 'react-router-dom';

export default () => (
  <div className="sidenav">
    <ul className="list-group">
      <li className="list-group-item">
        <Link to="/top/players">Top Player</Link>   
      </li>
      <li className="list-group-item">
      <Link to="/top/clans">Top Clans</Link>   
      </li>
      <li className="list-group-item">
      <Link to="/top/clans/war">Top War Clans</Link>   
      </li>
      <li className="list-group-item">NavItem</li>
      <li className="list-group-item">NavItem</li>
    </ul>
  </div>
);
