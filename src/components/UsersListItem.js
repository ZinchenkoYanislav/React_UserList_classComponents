import React, { Component } from 'react'

export default class UsersListItem extends Component {
  onDelete(id){
    this.props.deleteUser(id)
  }
  render() {
      const {item} = this.props
    return (
        <tr  className="table-primary">
            <td className="text-center">{item.name}</td>
            <td className="text-center">{item.surname}</td>
            <td className="text-center">{item.phoneNumber}</td>
            <td className="text-center"> <button onClick={() => this.onDelete(item.id)} type="button" className="btn btn-danger">Delete</button></td>
          </tr>
    )
  }
}
