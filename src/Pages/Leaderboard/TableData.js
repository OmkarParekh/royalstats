import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import Axios from 'axios'

import { regions } from "../../Constants";
import Trophy from "../../assets/img/trophy.png";
import Champion_League from "../../assets/img/leagues/champion.png";
import "./leaderboard.css";

export default class TableData extends Component {
    constructor() {
        super();
        this.state = {
            topPlayer: []
        }
    }

    componentDidMount() {
        Axios.get('/top/players/IN')
            .then(res => {
                this.setState({
                    topPlayer: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { topPlayer } = this.state;
        return (
            <div>
                <table class="table table-hover mt-3 lb-table">
                    <tbody>

                  {
                    topPlayer.filter(({rank}) => rank <= 20).map(({name:playerName, rank, tag:playerTag, trophies, clan : {name:className, tag:clanTag, badge:{image}}}, index ) => {
                      return(
                        <tr key={rank} 
                        onClick={()=>{
                            // document.write("player")
                          }
                        } >
                        <td className="align-middle">#{rank}</td>
                        <td className="align-middle">{playerName}</td>
                        <td className="align-middle">
                          <img
                            src={Trophy}
                            alt="_trophy.png"
                            className="lb-icon"
                          />
                          {trophies}
                        </td>
                        <td className="align-middle">
                          <img
                            src={Champion_League}
                            alt="_trophy.png"
                            className="lb-icon"
                          />
                          Master III League 6
                        </td>
                        <td className="align-middle">

                          {
                            image !== null &&
                            <img
                            // src="https://cdn.statsroyale.com/images/badges/16000040.png"
                            src={ image }
                            alt="_trophy.png"
                            className="lb-icon-clan"
                          />
                          }
                          {
                            image == null &&
                            <img
                            src="https://cdn.statsroyale.com/images/badges/16000040.png"
                            alt="_trophy.png"
                            className="lb-icon-clan"
                          />
                          }
                          {className}
                          {/* {clanTag} */}
                          
                        </td>
                      </tr>
                      );
                  })
                }


             
                    </tbody>
                </table>
            </div>

        )
    }
}
