import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Playerstats from '../../Pages/Playerstats';
import './table.css';

export default class MemberTable extends Component {
    SetTag = (tag) => {
        
        const memberTag = tag.substr(1);
        localStorage.setItem('player',tag);
    }
    render() {
        const { member : { clanRank, tag, name, role, trophies, donations, donationsReceived, lastSeen} } = this.props;
        return (
            <Fragment>
                <tr>
                    <th scope="row">
                        {clanRank}
                    </th>
                    <td>
                        <span className="d-block" onClick={() => localStorage.setItem('player', tag)} ><Link to="/player">{name}</Link> </span>
                        {lastSeen}
                    </td>
                    <td className="text-center">
                        {role}
                    </td>
                    <td className="text-center">
                        {trophies}
                    </td>
                    <td className="text-center">
                        {donations}
                    </td>
                    <td className="text-center">
                        {donationsReceived}
                    </td>
                </tr>
            </Fragment>
        )
    }
}
