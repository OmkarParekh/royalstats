import React, { Component } from 'react';
import option4 from '../assest/img/chest-background.png';
import '../css/Upcoming.css';

import Axios from 'axios';
import ChestData from '../Components/Upcoming Chest/chestData';
import Loading from '../Components/Loader/loading'


export default class Upcomimg extends Component {
    constructor() {
        super();
        this.state = {
            chest: [],
            isloading: true
        }
    }

    componentDidMount() {
        const playerTag = localStorage.getItem('player');
        if (playerTag) {
            const player = playerTag.replace('#', '');
            Axios.get(`/player/${player}/chests`)
                .then(res => {
                    this.setState({
                        chest: res.data.items,
                        isloading: false
                    })
                })
                .catch(err => this.props.history.push('/error'));
        }

    }
    render() {

        const { chest } = this.state;
        console.log(chest)

        return (
            <div>
                {
                    this.state.isloading &&
                    <Loading />
                }

        <div className="container page-header">
                <div className="header">
                    <img
                        src={option4}
                        alt="option-icon"
                        className="page-icon"
                    />
                    <span className="page-title align-center btn text-monospace">
                        UpcomingChest
                    </span>
                </div>


                <div className="page-content row">
                    <div className="col-12 d-flex chest-data">

                        {
                            chest.map((item) => {

                                return (
                                    <div className="chest-container text-center">
                                        <ChestData
                                            chestName={item.name}
                                        />
                                        <span className="chest-pos text-monospace">
                                            {item.index}
                                        </span>
                                    </div>
                                );

                            })
                        }

                    </div>
                </div>
            </div>
            </div>
        )
    }
}
