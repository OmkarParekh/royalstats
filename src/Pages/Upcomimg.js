import React, { Component } from 'react';
import option4 from '../assest/img/chest-background.png';
import '../css/Upcoming.css';

import Axios from 'axios';
import ChestData from '../Components/Upcoming Chest/chestData';


export default class Upcomimg extends Component {
    constructor(){
        super();
        this.state={
           chest : []
        }
    }

    componentDidMount(){
        Axios.get('/player/8L9L9GL/chests')
            .then(res => {
                this.setState({
                    chest : res.data.items
                })
            })
    }
    render() {

        const { chest } = this.state;
        console.log(chest)

        return (
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
                               
                                return(
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
        )
    }
}
