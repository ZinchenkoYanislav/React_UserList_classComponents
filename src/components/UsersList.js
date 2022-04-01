import React, { Component } from 'react'
import UsersListItem from './UsersListItem'

export default class UsersList extends Component {
  render() {
    const users = this.props.users
    return (
        
        <table className="table table-bordered ">
        <thead> 
          <tr  className="table-primary ">
            <th className="text-center" scope="col">Name</th>
            <th className="text-center" scope="col">Surname</th>
            <th className="text-center" scope="col">Phone Number</th>
            <th className="text-center" scope="col">Buttons</th>
          </tr>
        </thead>
        <tbody>
            {users.map((item) =>{
                return (<UsersListItem key={item.id} item = {item} deleteUser={this.props.deleteUser} />)
            })}
        </tbody>
      </table>
    )
  }
}
