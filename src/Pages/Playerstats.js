import React, { Component } from 'react';
import '../css/player.css';
import arenaImg from '../assest/img/arena.png'
import playerBadge from '../assest/img/legendaryPoints.png';
import Trophy from '../assest/img/Trophy.png';
import Clanicon from '../assest/img/Flame_01.png';
import option1 from '../assest/img/crl.png';
import StatsContainer from '../Components/StatsHolder/StatsContainer';
import Cardstats from '../Components/CardStats/Cardstats';
import Upcomingchest from '../Components/Upcoming Chest/Upcomingchest';


export default class Playerstats extends Component {

    constructor(){
        super()
        this.state={
            stats : false,
            card : false,
            chest : true,
            battle : false,
        }
    }

    render() {
        return (
            <div>
                <div className="container player-stats">
                    <div className="row">
                        <div className="col-3 arena-info">
                                <img src={arenaImg} className="arena-info-img" alt="arena" />
                                <span className="arena-info-name">Legendary</span>
                        </div>
                        <div className="col-8 player-data-cont">
                                <div className="player-data mt-3">
                                    <img src={playerBadge} alt="playerBadge" className="player-data-icon mr-1" />
                                    <span className="player-data-name">
                                        Sniperdevil
                                        <h6 className="text-muted player-data-tag">
                                         #8L9L9GL
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
                                                    30000
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
                                                alt="CLan-icon"
                                                className="item-icon"
                                                />
                                                <span className="item-value">
                                                    Dark Worriors
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
                                            <span className="option-name align-center">
                                                Player Stats
                                            </span>
                                        </li>

                                        <li className="nav-option-item">
                                            <img
                                            src={option1}
                                            alt="option-icon"
                                            className="option-icon"
                                            />
                                            <span className="option-name align-center">
                                                Player Stats
                                            </span>
                                        </li>

                                        <li className="nav-option-item">
                                            <img
                                            src={option1}
                                            alt="option-icon"
                                            className="option-icon"
                                            />
                                            <span className="option-name align-center">
                                                Player Stats
                                            </span>
                                        </li>

                                        <li className="nav-option-item">
                                            <img
                                            src={option1}
                                            alt="option-icon"
                                            className="option-icon"
                                            />
                                            <span className="option-name align-center">
                                                Player Stats
                                            </span>
                                        </li>

                                        <li className="nav-option-item">
                                            <img
                                            src={option1}
                                            alt="option-icon"
                                            className="option-icon"
                                            />
                                            <span className="option-name align-center">
                                                Player Stats
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.stats &&
                        <StatsContainer />
                    }
                     {
                        this.state.card &&
                        <Cardstats />
                    }
                     {
                        this.state.chest &&
                        <Upcomingchest />
                    }
                    
                </div>
            </div>
        )
    }
}
