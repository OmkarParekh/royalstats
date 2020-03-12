import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Playerstats from '../../Pages/Playerstats';


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
                        <span onClick={() => localStorage.setItem('player', tag)} ><Link to="/player">{name}</Link> </span>
                    </td>
                    <td>
                        {role}
                    </td>
                    <td>
                        {trophies}
                    </td>
                    <td>
                        {donations}
                    </td>
                    <td>
                        {donationsReceived}
                    </td>
                    <td>
                        {lastSeen}
                    </td>
                </tr>
            </Fragment>
        )
    }
}
