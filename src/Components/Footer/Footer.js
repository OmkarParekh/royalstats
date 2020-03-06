import React, { Component } from "react";
import "./foot.css";

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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Player</a>
              </li>
              <li>
                <a href="#">Clan</a>
              </li>
              <li>
                <a href="#">Battle</a>
              </li>
              <li>
                <a href="#">Tournament</a>
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
                <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="github" href="#">
                <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
