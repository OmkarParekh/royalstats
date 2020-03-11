import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import LeagueData from '../../Components/StatsHolder/LeagueData'


import { regions } from "../../Constants";
import Trophy from "../../assets/img/trophy.png";
import Champion_League from "../../assets/img/leagues/champion.png";
import "./leaderboard.css";

export default class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      itemCount: 20
    }
  }



  render() {
    const { topPlayerdata } = this.props;

    return (
      <div>
        <table class="table table-hover mt-3 lb-table">
          <tbody>


            {
              Object.assign(topPlayerdata).filter((item, index) => index < this.state.itemCount)
                .map(({ rank, tag, name, trophies, arena:{name:arenaName}}) => {
                  return (
                    <tr key={rank}>
                      <td className="align-middle">#{rank}</td>
                      <td className="align-middle"
                        onClick={() => localStorage.setItem('player', tag)}
                      >
                        <Link to="/player">{name}</Link>


                      </td>
                      <td className="align-middle">
                        <img
                          src={Trophy}
                          alt="_trophy.png"
                          className="lb-icon"
                        />
                        {trophies}
                      </td>
                      <td className="align-middle">

                        <div className="d-flex">
                        <LeagueData
                          trophies={trophies}
                        />
                        <span className="mt-3"> {arenaName} </span>
                        </div>
                       
                        
                        {/* <img
                          src={Champion_League}
                          alt="_trophy.png"
                          className="lb-icon"
                        />
                        Master III League 6 */}
                        </td> 

                      {/* {className} */}
                      {/* {clanTag}  */}

                    </tr>
                  )
                })
            }



          </tbody>
        </table>

        <div className="text-center">
          <span
            className="btn lb-see_more_btn px-3"
            // onClick={() => {
            //   this.setState({ itemCount: itemCount + 10 })
            // }
            // }
            onClick={this.changeData}
          >
            See All <i class="fas fa-arrow-down ml-2"></i>
          </span>
        </div>
      </div>

    )
  }
}
