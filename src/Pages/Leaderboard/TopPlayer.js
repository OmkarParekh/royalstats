import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import { regions } from "../../Constants";
import TableData from './TableData';

export default class TopPlayer extends Component {
    constructor() {
        super();
        this.state = {
            activeCountry: "57000016"
        }
    }

    hanndleCountry = (key) => {

        // console.log(key)

    }

    render() {
        return (
            <div>
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
                                        <option defaultChecked>Country</option>
                                        {regions.map(region => (
                                            <option key={uuidv4()} value={region.id} 
                                                onChange={this.hanndleCountry(this.id)}
                                            >
                                                {region.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <hr className="m-0 my-2" />


                            {/* {For player} */}
                                <TableData />


                            <div className="text-center">
                                <a href="/" className="btn lb-see_more_btn px-3">
                                    See All <i class="fal fa-arrow-down ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
