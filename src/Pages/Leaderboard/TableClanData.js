import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { regions } from "../../Constants";
import Trophy from "../../assets/img/trophy.png";
import Champion_League from "../../assets/img/leagues/champion.png";
import "./leaderboard.css";

export default class TableClanData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 20
    }
  }



  render() {
    const { itemCount } = this.state;
    const { topClans } = this.props;
    return (
      <div>
        <table class="table table-hover mt-3 lb-table">
          <tbody>
            {
              topClans.filter(({ rank }) => rank <= this.state.itemCount).
                map(({ tag, name, clanScore, rank, members, location: { countryCode, id } }) => {
                  return (
                    <tr>
                      <td className="align-middle">#{rank}</td>
                      <td className="align-middle">
                        <img
                          src="https://cdn.statsroyale.com/images/badges/16000040.png"
                          alt="_trophy.png"
                          className="lb-icon-clan"
                        />
                        <Link to='/clan'
                          onClick={() => localStorage.setItem('clan', tag)}
                        > {name} </Link>
                      </td>
                      <td className="align-middle">
                        <img
                          src={Trophy}
                          alt="_trophy.png"
                          className="lb-icon"
                        />
                        {clanScore}
                      </td>
                      <td className="align-middle d-none d-lg-table-cell">
                        {" "}
                        <i class="fas fa-users mr-3"></i> {members}/50
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>

        <div className="text-center">
          <span
            className="btn lb-see_more_btn px-3"
            onClick={() => {
              this.setState({ itemCount: itemCount + 10 })
            }
            }
          >
            See All <i class="fas fa-arrow-down ml-2"></i>
          </span>
        </div>
      </div>
    )
  }
}
