import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import { regions } from "../../Constants";
import TableData from './TableData';
import Axios from 'axios';


export default class TopPlayer extends Component {
    constructor() {
        super();
        this.state = {
            activeCountry: '57000021',
            topPlayer: []
        }
    }

    


    hanndleCountry = (e) => {
        this.setState({
            activeCountry : e.target.value
        })

        Axios.get(`/top/players/${this.state.activeCountry}`)
            .then(res => {
                this.setState({topPlayer : res.data.items})
            })
            .catch(err => this.props.history.push('/error'))
    }

    render() {
        const { topPlayer } = this.state;
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
                                    <select className="custom-select lb-card_select-box border-0 bg-light"
                                        onChange = {this.hanndleCountry}>
                                        <option defaultChecked>Country</option>
                                        {regions.filter(region => region.isCountry===true)
                                        .map(region => (
                                            <option key={uuidv4()} value={region.id}>
                                                {region.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <hr className="m-0 my-2" />


                            {/* {For player} */}
                            <TableData 
                                topPlayerdata = {topPlayer}
                            />



                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
