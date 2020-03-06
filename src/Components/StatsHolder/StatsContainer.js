import React, { Component } from 'react'
import './StatsContainer.css'

import Trophy from '../../assest/img/Trophy.png';
import battle from '../../assest/img/battle.png';
import clanWar from '../../assest/img/clan-wars.png';
import tournament from '../../assest/img/tournament.png';
import badge from '../../assest/img/legendaryPoints.png';




export default class StatsContainer extends Component {


    constructor(props){
            super(props);

        

            
    }



    render() {
        const statData = this.props.Stats;
        const statsres = Object.assign({}, statData);
        

        return (
                <div>
            <div className="container-fluid data-container">
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
                                <span className="statsData">
                                    {statsres.bestTrophies}
                                </span>
                                </div>
                          
                    
                        <div className="stats-data">
                            <span className="statstext">Trophies</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.trophies}
                            </span>
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
                            <span className="statsData">
                                {statsres.wins}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Looses</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.losses}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">threeCrownWins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.threeCrownWins}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">challengeMaxWins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.challengeMaxWins}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">BattleCount</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                
                                {statsres.battleCount}
                            </span>
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
                            <span className="statstext">warDayWins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.warDayWins}
                            </span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">clanCardsCollected</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.clanCardsCollected}
                            </span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">totalDonations</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.totalDonations}
                            </span>
                        </div>




                        <div className="d-flex stats-header-upper">
                            
                        <span className="align-middle headerText">
                                        <img src={tournament} className="align-middle stat-icon" alt="" />
                                        Turnamets  And Challeges
                                    </span>
                            
                            
                            {/* <img src={tournament} alt="Battle-icon" className="stat-icon" />
                            <span className="headerText ">Wins Stats</span> */}
                        </div>

                        <div className="stats-data">
                            <span className="statstext">tournamentCardsWon</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.tournamentCardsWon}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">challengeMaxWins</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.challengeMaxWins}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">challengeCardsWon</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.challengeCardsWon}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">tournamentGames</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.tournamentBattleCount}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">clanCardsCollected</span>
                            <span className="stat-divider">..............................</span>
                            <span className="statsData">
                                {statsres.clanCardsCollected}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
        );
    }
}



