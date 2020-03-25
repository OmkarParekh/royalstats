import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import { regions } from "../../Constants";
import TableClanData from "./TableClanData";
import Axios from "axios";
import Loading from "../../Components/Loader/loading";

export default class TopClanStats extends Component {
  constructor() {
    super();
    this.state = {
      topWarClans: [],
      loading: false,
      notice: true,
      activeCountry: "57000021"
    };
  }

  hanndleCountry = e => {
    this.setState({
      activeCountry: e.target.value,
      loading: true,
      notice: false
    });

    Axios.get(`/top/clans/${this.state.activeCountry}`)
      .then(res => {
        this.setState({
          topWarClans: res.data.items,
          loading: false
        });
      })
      .catch(err => this.props.history.push("/error"));
  };

  render() {
    const { topWarClans } = this.state;

    return (
      <div className="container mt-3">
        <div class="card border-0 px-xl-5 px-sm-1 mb-5">
          <div class="card-body">
            <div className="row">
              <div className="col">
                <div className="card-title lb-card_title px-3">
                  Top War Clans
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

            {this.state.notice && (
              <div className="text-center">
                <div class="alert alert-dark" role="alert">
                  Select the Country name
                </div>
              </div>
            )}

            {this.state.loading && <Loading />}
              <div className="conatainer-fluid">
            {!this.state.loading && <TableClanData topClans={topWarClans} />}
              </div>
          
        </div>
      </div>
    );
  }
}
