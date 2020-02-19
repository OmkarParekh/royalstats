import React from 'react';
import './StatsContainer.css'

import Trophy from '../../assest/img/Trophy.png';
import battle from '../../assest/img/battle.png';
import clanWar from '../../assest/img/clan-wars.png';
import tournament from '../../assest/img/tournament.png';
import badge from '../../assest/img/legendaryPoints.png';


export default function StatsCont() {
    return (
        <div>
            <div className="container data-container">
                <div className="row">
                    <div className="col-6 data-holder">



                        <div className="d-flex stats-header">
                            <span className="align-middle headerText">
                                        <img src={Trophy} className="align-middle stat-icon" alt="" />
                                        Trophies
                                    </span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">maxTrophies</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">6407</span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">Trophies</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">6002</span>
                        </div>




                        <div className="d-flex stats-header-upper">
                        <span className="align-middle headerText">
                                        <img src={battle} className="align-middle stat-icon" alt="" />
                                        Wins Stats
                                    </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Wins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">6565458</span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Looses</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">000000</span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">threeCrownWins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">6002</span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">challengeMaxWins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">18</span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Draws</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">76766</span>
                        </div>
                    {/* end of first col */}
                    </div>
                    <div className="col-6 data-holder border-left border-dark">


                    <div className="d-flex stats-header">
                    <span className="align-middle headerText">
                                        <img src={clanWar} className="align-middle stat-icon" alt="" />
                                        Clan War Stats
                                    </span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">maxTrophies</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">6407</span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">Trophies</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">6002</span>
                        </div>




                        <div className="d-flex stats-header-upper">
                            
                        <span className="align-middle headerText">
                                        <img src={tournament} className="align-middle stat-icon" alt="" />
                                        Wins Stats
                                    </span>
                            
                            
                            {/* <img src={tournament} alt="Battle-icon" className="stat-icon" />
                            <span className="headerText ">Wins Stats</span> */}
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Wins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">6565458</span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Looses</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">000000</span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">threeCrownWins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">6002</span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">challengeMaxWins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">18</span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Draws</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">76766</span>
                        </div>
                    </div>
                </div>
            </div>
                <div className="container badge-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex stats-header">
                                <img src={badge}  alt="Badge-icon" width="50" height="55" />
                                <span className="header-text">LeagueStats</span>
                            </div>
                        <div className="offset-2 d-flex">
                            <div className="outer-box">
                                    <div className="inner-box text-center">
                                        <span className="d-block mt-2">Previous Season</span>
                                        <img src={badge} className="d-block" alt="Badge-icon" width="50" height="55" />
                                    </div>
                                    <div className="conternt-box d-flex mt-3 text-center">
                                    <span className="align-middle text-monospace">
                                        <img src={Trophy} className="align-middle icon-s" alt="" />
                                        5555
                                    </span>
                                    </div>
                            </div>
                            <div className="outer-box">
                                    <div className="inner-box text-center">
                                        <span className="d-block mt-2">Currunt Season</span>
                                        <img src={badge} className="d-block" alt="Badge-icon" width="50" height="55" />
                                    </div>
                                    <div className="conternt-box d-flex mt-3 text-center">
                                    <span className="align-middle text-monospace">
                                        <img src={Trophy} className="align-middle icon-s" alt="" />
                                        5555
                                    </span>
                                    </div>
                            </div>
                            <div className="outer-box">
                                    <div className="inner-box text-center">
                                        <span className="d-block mt-2">Best Season</span>
                                        <img src={badge} className="d-block" alt="Badge-icon" width="50" height="55" />
                                    </div>
                                    <div className="conternt-box d-flex mt-3 text-center">
                                    <span className="align-middle text-monospace">
                                        <img src={Trophy} className="align-middle icon-s" alt="" />
                                        5555
                                    </span>
                                    </div>
                            </div>
                           
                            </div>
                               
                        </div>
                    </div>
                </div>
        </div>
    )
}


