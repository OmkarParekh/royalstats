import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import Axios from 'axios'

import { regions } from "../../Constants";
import Trophy from "../../assets/img/trophy.png";
import Champion_League from "../../assets/img/leagues/champion.png";
import "./leaderboard.css";

export default class TableClanData extends Component {
    constructor(props){
        super(props);
        this.state={
            topClansStats: [],
            reqParm : this.props.StatsFor
        }
    }

    componentDidMount(){
        Axios.get(`/top/${this.state.reqParm}/57000016`)
        .then(res => {
          this.setState({
              topClansStats: res.data.items
          })
      })
      .catch(err => console.log(err))
    }

    render() {
        const { topClansStats} = this.state;
        return (
            <div>
                <table class="table table-hover mt-3 lb-table">
              <tbody>
                {
                topClansStats.filter(({rank}) => rank <= 20).
                  map(({tag, name, clanScore, rank, members, location:{countryCode, id}}) => {
                  return (
                    <tr>
                      <td className="align-middle">#{rank}</td>
                      <td className="align-middle">
                        <img
                          src="https://cdn.statsroyale.com/images/badges/16000040.png"
                          alt="_trophy.png"
                          className="lb-icon-clan"
                        />
                        {name}
                      </td>
                      <td className="align-middle">
                        <img
                          src={Trophy}
                          alt="_trophy.png"
                          className="lb-icon"
                        />
                        {clanScore}
                      </td>
                      <td className="align-middle">
                        {" "}
                        <i class="fal fa-users mr-3"></i> {members}/50
                      </td>
                      {/* <td className="align-middle">{countryCode}</td> */}
                    </tr>
                   );
                })}
              </tbody>
            </table> 
            </div>
        )
    }
}
