import React, { Component } from "react";
import "./foot.css";
import { Link } from 'react-router-dom';

export default class extends Component {
  render = () => (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h4>RoyalStats</h4>
          </div>
          <div className="col-xs-6 col-md-3">
            <h4>Menus</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/player">Player</Link>
              </li>
              <li>
                <Link to="/clan">Clan</Link>
              </li>
              <li>
                <Link to="/top/players">Top Player</Link>
              </li>
              <li>
                <Link to="/top/clans">Top Clans</Link>
              </li>
              <li>
                <Link to="/top/clans/war">Top War Clans</Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="about/">About Us</a>
              </li>
              <li>
                <a href="contact/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2020 All Rights Reserved by
              <a href="#"> RoyalStats</a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="github" href="#">
                <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
