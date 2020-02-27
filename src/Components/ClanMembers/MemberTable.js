import React, { Component, Fragment } from 'react'

export default class MemberTable extends Component {
    render() {
        const { member } = this.props;
        return (
            <Fragment>
                <tr>
                    <th scope="row">
                        {member.rank}
                    </th>
                    <td>
                        {member.name}
                    </td>
                    <td>
                        {member.role}
                    </td>
                    <td>
                        {member.trophies}
                    </td>
                    <td>
                        {member.donations}
                    </td>
                    <td>
                        {member.donationsReceived}
                    </td>
                    <td className="d-flex">
                        {member.lastSeen}
                    </td>
                </tr>
            </Fragment>
        )
    }
}
