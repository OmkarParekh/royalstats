import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import { regions } from "../../Constants";
import TableData from "./TableData";
import Axios from "axios";
import Loading from "../../Components/Loader/loading";
import './leaderboard.css';

export default class TopPlayer extends Component {
  constructor() {
    super();
    this.state = {
      activeCountry: "57000021",
      notice: true,
      loading: false,
      topPlayer: []
    };
  }

  hanndleCountry = e => {
    this.setState({
      activeCountry: e.target.value,
      notice: false,
      loading: true
    });

    Axios.get(`/top/players/${this.state.activeCountry}`)
      .then(res => {
        this.setState({
          loading: false,
          topPlayer: res.data.items
        });
      })
      .catch(err => this.props.history.push("/error"));
  };

  render() {
    const { topPlayer } = this.state;
    return (
      <div>
          <div className="container mt-3">
            {/*  Top Players */}
            <div class="card border-0 px-xl-5 px-sm-1 mb-5">
              <div class="card-body">
                <div className="row">
                  <div className="col">
                    <div className="card-title lb-card_title px-1">
                      Top Players
                    </div>
                  </div>
                  <div className="col text-right">
                    <select
                      className="custom-select lb-card_select-box border-0 bg-light"
                      onChange={this.hanndleCountry}
                    >
                      <option defaultChecked>Country</option>
                      {regions
                        .filter(region => region.isCountry === true)
                        .map(region => (
                          <option key={uuidv4()} value={region.id}>
                            {region.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                </div>
                <hr className="m-0 my-2" />
                {this.state.loading && <Loading />}

                {this.state.notice && (
                  <div className="text-center">
                    <div class="alert alert-dark" role="alert">
                      Select the Country name
                    </div>
                  </div>
                )}
                {/* {For player} */}
                <div className="container-fluid">
                {!this.state.loading && <TableData topPlayerdata={topPlayer} />}
                </div>
             
            </div>
          </div>
        )}
      </div>
    );
  }
}
