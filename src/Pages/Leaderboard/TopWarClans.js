import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import { regions } from "../../Constants";
import TableClanData from './TableClanData'
export default class TopClanStats extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div class="card border-0 px-5 mb-5">
          <div class="card-body">
            <div className="row">
              <div className="col-6">
                <div className="card-title lb-card_title px-3">Top War Clans</div>
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
            
                    <TableClanData 
                        StatsFor = "war"
                    />

<div className="text-center">
                                <a href="/" className="btn lb-see_more_btn px-3">
                                    See All <i class="fal fa-arrow-down ml-2"></i>
                                </a>
                            </div>
                        </div>
          </div>
        </div>
        )
    }
}
