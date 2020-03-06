import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/player.css';
import playerBadge from '../assest/img/legendaryPoints.png';
import arenaImg from '../assest/img/arena.png'
import Trophy from '../assest/img/Trophy.png';
import Clanicon from '../assest/img/clanicon.jpg';
import option1 from '../assest/img/crl.png';
import option2 from '../assest/img/cards.png';
import option3 from '../assest/img/battle.png';
import option4 from '../assest/img/chest-background.png';

import StatsContainer from '../Components/StatsHolder/StatsContainer';
import Cardstats from '../Components/CardStats/Cardstats'
import Upcomingchest from '../Components/Upcoming Chest/Upcomingchest';

import Axios from 'axios';
import League from '../Components/leaguecompt/League';
import ArenaData from '../Components/StatsHolder/ArenaData';


export default class Playerstats extends Component {

    constructor() {
        super()
        this.state = {
            playerTag : '8L9L9GL',
            activeTab:'playerStats',

            data: [],
            clan: [],
            stat: [],
            leagueStatistics: [],
            cards: [],
            currentDeck : [],
            currentFavouriteCard : []
        }
    }


        


    componentDidMount() {
        Axios.get(`/player/${this.state.playerTag}`)
            .then(res => {
                this.setState({
                    data : res.data,
                    clan : res.data.clan,
                    leagueStatistics : res.data.leagueStatistics,
                    cards : res.data.cards,
                    currentDeck : res.data.currentDeck,
                    currentFavouriteCard : res.data.currentFavouriteCard
                });
            })
               
            .catch(err => console.log(err))
    }

    render() {
        const {data, clan, leagueStatistics, cards, currentDeck, currentFavouriteCard } = this.state;
        
        return (
            <div>

                <div className="container-fluid player-stats">
                    <div className="row">
                        <div className="col-3 arena-info">
                            <ArenaData 
                            trophies = {data.trophies}
                            />
                        </div>



                        <div className="col-8 player-data-cont">


                            <div className="player-data mt-3">
                                <img src={playerBadge} alt="playerBadge" className="player-data-icon mr-1" />
                                <span className="player-data-name">
                                    {data.name}
                                       
                                    <h6 className="text-muted player-data-tag">
                                        {data.tag}
                                      
                                    </h6>
                                </span>
                            </div>








                            <div className="player-options">
                                <ul className="player-option-header">
                                    <li className="player-option-items">
                                        <span className="item-name">
                                            Throphies
                                            </span>
                                        <span className="item-divider">
                                            ....................................................................................
                                            </span>
                                        <div className="item-data">
                                            <img src={Trophy}
                                                alt="Trophy-icon"
                                                className="item-icon"
                                            />
                                            <span className="item-value">
                                                {data.trophies}
                                            </span>
                                        </div>
                                    </li>






                                    <li className="player-option-items">
                                    <span className="item-name">
                                            Clan
                                            </span>
                                            <span className="item-divider">
                                                ....................................................................................
                                            </span>
                                            <div className="item-data">
                                                <img src={Clanicon}
                                                alt="hjh"
                                                className="item-icon"
                                                />

                                                

                                                <span className="item-value">
                                                    <Link to="/clan">{clan.name}</Link>
                                                    

                                                   
                                                </span>
                                            </div>
                                    </li>

                                </ul>
                            </div>







                            <div className="player-nav-option">
                                <ul className="nav-options">
                                    <li className="nav-option-item">
                                        <img
                                            src={option1}
                                            alt="option-icon"
                                            className="option-icon"
                                        />
                                        <span className="option-name align-center btn"
                                            onClick={() => this.setState({activeTab : "playerStats"})}
                                        >
                                            Player Stats
                                            </span>
                                    </li>

                                    <li className="nav-option-item">
                                        <img
                                            src={option2}
                                            alt="option-icon"
                                            className="option-icon"
                                        />
                                        <span className="option-name align-center btn"
                                            onClick={() => this.setState({activeTab : "cards"})}
                                        >
                                            Cards Stats
                                            </span>
                                    </li>

                                    <li className="nav-option-item">
                                        <img
                                            src={option4}
                                            alt="option-icon"
                                            className="option-icon"
                                        />
                                        <span className="option-name align-center btn"
                                            onClick={() => this.setState({activeTab : "upcomingChest"})}
                                        >
                                            UpcomingChest
                                            </span>
                                    </li>

                                    <li className="nav-option-item">
                                        <img
                                            src={option3}
                                            alt="option-icon"
                                            className="option-icon"
                                        />
                                        <span 
                                        className="option-name align-center btn"
                                            onClick={() => this.setState({activeTab : "battle"})}
                                        >
                                            Battle Stats
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>


                {
                    this.state.activeTab === "playerStats" &&
                    <div>
                        <StatsContainer 
                            Stats = {data}
                        />
                        <League 
                            leagueStatistics = { leagueStatistics }
                        />
                    </div>
                }
    

                {
                    this.state.activeTab === "cards" &&
                    <Cardstats 
                        cards = {cards}
                        currentDeck = {currentDeck}
                        currentFavouriteCard = {currentFavouriteCard}
                        />
                }
                </div>
            </div>
        )
    }
}
