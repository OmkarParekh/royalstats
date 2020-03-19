import React, { Component } from 'react';
import people from '../../assest/img/people.png';
import MemberTable from './MemberTable';
import './table.css';


export default class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeOption: "All Player",
        }
    }
    render() {
        const memberData = this.props.memberData;
        const obj = Object.assign({}, memberData);
        
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="container-header d-flex">


                            <div className="headertitle">
                                <img
                                    src={people}
                                    alt="Cards-icon"
                                    className="header-icon"
                                />
                                <span className="title-name">Members</span>
                            </div>


                            <div class="dropdown cardCategory" >
                                <span class="dropdown-toggle category-text" data-toggle="dropdown">
                                    {this.state.activeOption}
                                </span>


                                <div class="dropdown-menu ml-1">
                                    <span class="dropdown-item option-item text-center btn"
                                        onClick={() => this.setState({ activeOption: "All Player" })}
                                    >
                                        All Player</span>
                                     <span class="dropdown-item text-center btn"
                                            onClick={() => this.setState({ activeOption: "By Donations" })}
                                        >
                                            By Donations</span>
                                        {/*<span class="dropdown-item text-center btn"
                                            onClick={() => this.setState({ activeOption: "By Rearity" })}
                                        >
                                            By Rearity</span>
                                        <hr />
                                        <span class="dropdown-item text-center btn"
                                            onClick={() => this.setState({ activeOption: "deck" })}
                                        >
                                            Deck</span> */}
                                </div>


                            </div>

                        </div>

                        <div className="conatiner-fluid">
                            <table className="table table-hover table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col" className="text-center">Role</th>
                                        <th scope="col" className="text-center">Trophies</th>
                                        <th scope="col" className="text-center">donations</th>
                                        <th scope="col" className="text-wrap hide text-center">Donations Received</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {this.state.activeOption === "All Player" &&
                                           Object.values(obj).map(MemberItem => {
                                               return(
                                                   <MemberTable 
                                                   member = {MemberItem}
                                                   />
                                               )
                                           })
                                        }

                                        {
                                            this.state.activeOption === ""
                                        }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
