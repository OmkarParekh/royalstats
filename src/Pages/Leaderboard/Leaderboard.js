import React, { Component } from "react";
import uuidv4 from "uuid/v4";

import { regions } from "../../Constants";
import Trophy from "../../assets/img/trophy.png";
import Champion_League from "../../assets/img/leagues/champion.png";
import "./leaderboard.css";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      topPlayer: [
        {
          name: "Bat IvKo",
          trophies: 5760,
          league: "Master III League 6",
          clan: "BulgarianGang"
        },
        {
          name: "Bat IvKo",
          trophies: 5760,
          league: "Master III League 6",
          clan: "BulgarianGang"
        },
        {
          name: "Bat IvKo",
          trophies: 5760,
          league: "Master III League 6",
          clan: "BulgarianGang"
        },
        {
          name: "Bat IvKo",
          trophies: 5760,
          league: "Master III League 6",
          clan: "BulgarianGang"
        },
        {
          name: "Bat IvKo",
          trophies: 5760,
          league: "Master III League 6",
          clan: "BulgarianGang"
        }
      ],
      topClans: [
        {
          name: "Dark Warriors",
          trophies: "75000",
          members: "50",
          location: "India"
        },
        {
          name: "Dark Warriors",
          trophies: "75000",
          members: "50",
          location: "India"
        },
        {
          name: "Dark Warriors",
          trophies: "75000",
          members: "50",
          location: "India"
        },
        {
          name: "Dark Warriors",
          trophies: "75000",
          members: "50",
          location: "India"
        },
        {
          name: "Dark Warriors",
          trophies: "75000",
          members: "50",
          location: "India"
        }
      ],
      topWarClans: []
    };
  }

  render = () => {
    const { topPlayer, topClans } = this.state;
    return (
      <div className="container mt-3">
        {/*  Top Players */}
        <div class="card border-0 px-5 mb-5">
          <div class="card-body">
            <div className="row">
              <div className="col-6">
                <div className="card-title lb-card_title px-3">Top Players</div>
              </div>
              <div className="col-6 text-right">
                <select className="custom-select lb-card_select-box border-0 bg-light">
                  <option selected>Country</option>
                  {regions.map(region => (
                    <option key={uuidv4()} value={region.key}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <hr className="m-0 my-2" />
            <table class="table table-hover mt-3 lb-table">
              <tbody>
                {topPlayer.map(({ name, trophies, league, clan }, i) => {
                  return (
                    <tr>
                      <td className="align-middle">#{i + 1}</td>
                      <td className="align-middle">{name}</td>
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
                        {league}
                      </td>
                      <td className="align-middle">
                        <img
                          src="https://cdn.statsroyale.com/images/badges/16000040.png"
                          alt="_trophy.png"
                          className="lb-icon-clan"
                        />
                        {clan}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="text-right">
              <a href="/" className="btn lb-see_more_btn px-3">
                See All <i class="fal fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/*  Top Clan */}

        <div class="card border-0 px-5 mb-5">
          <div class="card-body">
            <div className="row">
              <div className="col-6">
                <div className="card-title lb-card_title px-3">Top Clans</div>
              </div>
              <div className="col-6 text-right">
                <select className="custom-select lb-card_select-box border-0 bg-light">
                  <option selected>Country</option>
                  {regions.map(region => (
                    <option key={uuidv4()} value={region.key}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <hr className="m-0 my-2" />
            <table class="table table-hover mt-3 lb-table">
              <tbody>
                {topClans.map(({ name, trophies, members, location }, i) => {
                  return (
                    <tr>
                      <td className="align-middle">#{i + 1}</td>
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
                        {trophies}
                      </td>
                      <td className="align-middle">
                        {" "}
                        <i class="fal fa-users mr-3"></i> {members}/50
                      </td>
                      <td className="align-middle">{location}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="text-right">
              <a href="/" className="btn lb-see_more_btn px-3">
                See All <i class="fal fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Top War Clans */}

        <div class="card border-0 px-5 mb-5">
          <div class="card-body">
            <div className="row">
              <div className="col-6">
                <div className="card-title lb-card_title px-3">
                  Top War Clans
                </div>
              </div>
              <div className="col-6 text-right">
                <select className="custom-select lb-card_select-box border-0 bg-light">
                  <option selected>Country</option>
                  {regions.map(region => (
                    <option key={uuidv4()} value={region.key}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <hr className="m-0 my-2" />
            <table class="table table-hover mt-3 lb-table">
              <tbody>
                {topClans.map(({ name, trophies, members, location }, i) => {
                  return (
                    <tr>
                      <td className="align-middle">#{i + 1}</td>
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
                        {trophies}
                      </td>
                      <td className="align-middle">
                        {" "}
                        <i class="fal fa-users mr-3"></i> {members}/50
                      </td>
                      <td className="align-middle">{location}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="text-right">
              <a href="/" className="btn lb-see_more_btn px-3">
                See All <i class="fal fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
