import React, { Component } from 'react';
import Card from '../../assest/img/cards.png'
import './Cardstats.css';
import Carditem from './Carditem';
import arraysort from 'array-sort';




export default class Cardstats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: "All Cards",
        }
    }
    render() {
        const { cards, currentDeck } = this.props;
        const obj = Object.assign({}, cards);
        return (
            <div>
                <div className="container-fluid player-stats">
                    <div className="row">
                        <div className="col-12 p-2">
                            <div className="container-header mt-3 d-flex">
                                <div className="headertitle">
                                    <img
                                        src={Card}
                                        alt="Cards-icon"
                                        className="header-icon"
                                    />
                                    <span className="title-name">Cards Stats</span>
                                </div>
                                <div class="dropdown cardCategory" >
                                    <span class="dropdown-toggle category-text" data-toggle="dropdown">
                                        {this.state.activeOption}
                                    </span>
                                    <div class="dropdown-menu ml-1">
                                        <span class="dropdown-item text-center btn"
                                            onClick={() => this.setState({ activeOption: "All Cards" })}
                                        >
                                            All Cards</span>
                                        <hr />
                                        <span class="dropdown-item text-center btn"
                                            onClick={() => this.setState({ activeOption: "deck" })}
                                        >
                                            Deck</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="divider"></span>

                        <div className="col-lg-12 cardData">


                            {
                                this.state.activeOption === "All Cards" &&
                                Object.values(obj).map((item) => {
                                    return (
                                        <Carditem
                                            data={item}
                                        />
                                    )
                                })
                            }
                        </div>

                        <div>
                            {
                                this.state.activeOption === "deck" &&
                                <div className="deck-info">
                                    {
                                        Object.values(currentDeck).map((item) => {
                                            return (
                                                <Carditem
                                                    data={item}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            }


                        </div>
                    </div>
                            }
                        </div>

            </div>
        )
    }
}




