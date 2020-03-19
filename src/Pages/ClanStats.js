import React, { Component } from 'react';
import '../css/ClanStats.css';
import Axios from 'axios';
import Loading from '../Components/Loader/loading';

import ScoreIcon from '../assest/img/trophy-ribbon.png';
import Reqtrophy from '../assest/img/Trophy.png';
import WarT from '../assest/img/wart.png';
import donations from '../assest/img/cards.png';
import people from '../assest/img/people.png';
import social from '../assest/img/social.png';
import Member from '../Components/ClanMembers/Member';
import clanBadge from '../assest/img/A_Char_King_04.png';


export default class ClanStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clanData: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        const clanTag = localStorage.getItem('clan');
        if (clanTag) {
            const clan = clanTag.replace('#', '');
            this.setState({isLoading : true})
            Axios.get(`/clan/${clan}`)
                .then(res => {
                    this.setState({
                        clanData: res.data,
                        isLoading: false
                    })
                })
                .catch(err => this.props.history.push('/error'))
        }


    }



    render() {

        const { clanData} = this.state;
        const badge = Object.assign({}, clanData.badge);
        const loc = Object.assign({}, clanData.location);
        return (
            <div>

                {
                    this.state.isLoading &&
                    <Loading />
                }
                {
                    !this.state.isLoading &&
                    <div>
                        <div className="container-fluid player-stats">
                            <div className="row p-4">
                            <div className="clan-loc col-12 float-right">
                                        <p className="text-danger text-monospace">
                                            {loc.countryCode}
                                        </p>
                                    </div>
                            
                                <div className="col-4 d-block offset-xl-4 offset-lg-4 offset-md-3 offset-sm-2 translate my-2">
                                    <div className="d-flex">
                                        <img
                                            src={clanBadge}
                                            alt="_clan-icon"
                                            className="c-icon d-inline-block"
                                        />
                                        <br></br>
                                        <span className="text-monospace clan-name">
                                            {clanData.name}
                                            <h6 className="">
                                                {clanData.tag}
                                            </h6>
                                        </span>
                                    </div>


                                    <br></br>
                                    <span className="text-secondary text-monospace text-justify">
                                        {clanData.description} 
                                    </span>
                                </div>
                                <div className="col-12  player-data-cont">
                                    

                                    <div className="clan-props ">
                                        <div className="props-item d-block">
                                            <img
                                                src={ScoreIcon}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header text-wrap">
                                                score
                                            <h6 className="props-value">
                                                    {clanData.clanScore}
                                                </h6>
                                            </span>
                                        </div>

                                        <div className="props-item d-block">
                                            <img
                                                src={Reqtrophy}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                                TrophiesLimits
                                            <h6 className="props-value">
                                                    {clanData.requiredTrophies}
                                                </h6>
                                            </span>
                                        </div>

                                        <div className="props-item d-block">
                                            <img
                                                src={WarT}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                                warTrophies
                                            <h6 className="props-value">
                                                    {clanData.clanWarTrophies}
                                                </h6>
                                            </span>
                                        </div>

                                        <div className="props-item d-block">
                                            <img
                                                src={donations}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                                donations
                                            <h6 className="props-value">
                                                    {clanData.donationsPerWeek}
                                                </h6>
                                            </span>
                                        </div>

                                        <div className="props-item d-block">
                                            <img
                                                src={social}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                                memberCount
                                            <h6 className="props-value">
                                                    {`${clanData.members}/50`}
                                                </h6>
                                            </span>
                                        </div>

                                        <div className="props-item d-block">
                                            <img
                                                src={people}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                                type
                                            <h6 className="props-value">
                                                    {clanData.type}
                                                </h6>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <Member
                                memberData={clanData.memberList}
                            />
                        </div>


                    </div>
                }

            </div>

        )
    }
}
