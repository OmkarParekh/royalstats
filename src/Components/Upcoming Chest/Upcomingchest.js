import React, { Component } from 'react';
import HeaderIcon from '../../assest/img/crl.png';
import chest from '../../assest/img/chest-legendary.png';
import './chest.css';

export default class Upcomingchest extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row chest-holder">
                        <div className="col-12 d-flex">
                                <span className="align-middle text-monospace header-title">
                                        <img src={HeaderIcon} className="align-middle icon-s" alt="" />
                                        Upcomingchest
                                </span>
                        </div>

                        <div className="d-flex">
                            <div className="chest-data d-block">
                            <img
                                src={chest}
                                alt="chest-icon"
                                className="chest-icon d-block"
                            />
                            <span className="chest-title text-monospace text-center d-block">
                                Golden Chest
                            </span>
                            <span className="chest-duration">
                                Next
                            </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
