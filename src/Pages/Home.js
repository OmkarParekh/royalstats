import React, { Component } from 'react'
import "../css/HomePage.css";
import chest_img from '../assest/img/homechest.png';
import tournament_img from '../assest/img/hometournament.png';
import battle_img from '../assest/img/homebattle.png';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loader/loading';
import Toast from '../Components/Toast/Toast';



export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      playerTag: '',
      selectOp: 'player',
      isLoading: true,
    }
  }


  componentWillMount() {
    this.setState({
      isLoading: false,
      
    })
  }


  saveTag = (event) => {
    if (!event.target.value) {
      this.setState({inputEmpty : true})
    }
    else {
      localStorage.setItem(this.state.selectOp, event.target.value)
    }
  }

  render() {

    const { playerTag, selectOp } = this.state;


    return (
      <div className="Homepage">
        {
          this.state.isLoading &&
          <Loading />
        }
        <div className="App">
          <div className="home">
            <label className="home_label1">RoyalStats</label>
            <label className="home_label2">Eat Sleep Clash Repeat...</label>
            <select className="home_select1"
              onChange={(e) => {
                this.setState({ selectOp: e.target.value })}}
            >
              <option value="player">Player</option>
              <option value="clan">Clan</option>
            </select>
            <input
              type="text"
              className="home_text1"
              placeholder="TAG #XXXXXX "
              onChange={this.saveTag}
            />

            <Link to={`/${selectOp}`} className=" home_button1 text-center" style={{ 'text-decoration': 'none' }}>
              <i className="fas fa-search"></i><span className="ml-1">Search</span>
            </Link>

          </div>
        </div>
        <div className="home_info container">
          <label className="home_label3">Features</label>
          <div className="home_features row">
            <div className="home_chest  col-md-4 col-xs-12 col-sm-12">
              <img className="features_img" src={chest_img} alt="" />
              <label className="home_label4">Upcoming Chest</label>
              <p className="feature_info">
                Wondering when that Legendary chest is coming? We got you covered.
            </p>
            </div>
            <div className="home_tournament  col-md-4 col-xs-12 col-sm-12">
              <img className="features_img" src={tournament_img} alt="" />
              <label className="home_label4">Tournament</label>
              <p className="feature_info text-justify">
                Check out our tournaments page to find free open tournaments.
            </p>
            </div>
            <div className="home_battle  col-md-4 col-xs-12 col-sm-12">
              <img className="features_img" src={battle_img} alt="" />
              <label className="home_label4">Battle</label>
              <p className="feature_info">
                Wondering when that Legendary chest is coming? We got you covered.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
