import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loader/loading";

import "../css/player.css";
import playerBadge from "../assest/img/legendaryPoints.png";
import arenaImg from "../assest/img/arena.png";
import Trophy from "../assest/img/Trophy.png";
import Clanicon from "../assest/img/clanicon.jpg";
import option1 from "../assest/img/crl.png";
import option2 from "../assest/img/cards.png";
import option3 from "../assest/img/battle.png";
import option4 from "../assest/img/chest-background.png";

import StatsContainer from "../Components/StatsHolder/StatsContainer";
import Cardstats from "../Components/CardStats/Cardstats";

import Axios from "axios";
import League from "../Components/leaguecompt/League";
import ArenaData from "../Components/StatsHolder/ArenaData";
import Toast from "../Components/Toast/Toast";

export default class Playerstats extends Component {
  constructor() {
    super();
    this.state = {
      playerTag: "8L9L9GL",
      activeTab: "playerStats",
      isLoading: true,
      error: false,

      data: [],
      clan: [],
      stat: [],
      leagueStatistics: [],
      cards: [],
      currentDeck: [],
      currentFavouriteCard: []
    };
  }

  componentDidMount() {
    const playerTag = localStorage.getItem("player");
    if (playerTag) {
      const player = playerTag.replace("#", "");
      Axios.get(`/player/${player}`)
        .then(res => {
          this.setState({
            data: res.data,
            clan: res.data.clan,
            leagueStatistics: res.data.leagueStatistics,
            cards: res.data.cards,
            currentDeck: res.data.currentDeck,
            currentFavouriteCard: res.data.currentFavouriteCard,
            isLoading: false
          });
        })

        .catch(err => {
          this.setState({ error: true });
          this.props.history.push("/error");
        });
    } else {
      console.log("there is no player");
    }
  }

  render() {
    const {
      data,
      clan,
      leagueStatistics,
      cards,
      currentDeck,
      currentFavouriteCard
    } = this.state;

    return (
      <div>
        {this.state.isLoading && <Loading />}

        {!this.state.isLoading && (
          <div>
            <div className="container-fluid player-stats">
              <div className="row">
                <div className="col-3 mt-3 arena-info d-md-block d-none text-center">
                  <ArenaData trophies={data.trophies} />
                </div>

                <div className="col-8 player-data-cont">
                  <div className="player-data mt-3">
                    <img
                      src={playerBadge}
                      alt="playerBadge"
                      className="player-data-icon mr-1"
                    />
                    <span className="player-data-name">
                      {data.name}

                      <h6 className="text-muted player-data-tag">{data.tag}</h6>
                    </span>
                  </div>

                  <div className="player-options">
                    <ul className="player-option-header">
                      <li className="player-option-items d-flex">
                        <span className="item-name">Throphies</span>
                        <span className="item-divider">
                          ................................
                        </span>
                        <div className="item-data">
                          <img
                            src={Trophy}
                            alt="Trophy-icon"
                            className="item-icon"
                          />
                          <span className="item-value">{data.trophies}</span>
                        </div>
                      </li>

                      {!(clan === "null") && (
                        <li className="player-option-items">
                          <span className="item-name">Clan</span>
                          <span className="item-divider">
                            ................................
                          </span>
                          <div className="item-data">
                            <img
                              src={Clanicon}
                              alt="hjh"
                              className="item-icon"
                            />

                            <span
                              className="item-value text-wrap"
                              onClick={() =>
                                localStorage.setItem("clan", clan.tag)
                              }
                            >
                              <Link to="/clan">
                                {clan.name ? clan.name : "not in clan"}
                              </Link>
                            </span>
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="player-nav-option">
                    <ul className="nav-options">
                      <li
                        className="nav-option-item mr-1 btn"
                        onClick={() =>
                          this.setState({ activeTab: "playerStats" })
                        }
                      >
                        <img
                          src={option1}
                          alt="option-icon"
                          className="option-icon"
                        />
                        <span className="option-name align-center">
                          PlayerStats
                        </span>
                      </li>

                      <li
                        className="nav-option-item mr-1"
                        onClick={() => this.setState({ activeTab: "cards" })}
                      >
                        <img
                          src={option2}
                          alt="option-icon"
                          className="option-icon"
                        />
                        <span className="option-name align-center btn">
                          Cards
                        </span>
                      </li>

                      <li
                        className="nav-option-item mr-1"
                        onClick={() => this.props.history.push("/player/chest")}
                      >
                        <img
                          src={option4}
                          alt="option-icon"
                          className="option-icon"
                        />
                        <span className="option-name align-center btn">
                          UpcomingChest
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {this.state.activeTab === "playerStats" && (
                <div>
                  <StatsContainer Stats={data} />
                  <League leagueStatistics={leagueStatistics} />
                </div>
              )}

              {this.state.activeTab === "cards" && (
                <Cardstats
                  cards={cards}
                  currentDeck={currentDeck}
                  currentFavouriteCard={currentFavouriteCard}
                />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
