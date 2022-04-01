import React, { Component } from "react";

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            newName: '',
            newSurname: '',
            newPhoneNumber: '',
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
       this.props.addUser(this.state.newName, this.state.newSurname, this.state.newPhoneNumber)
       this.props.toggleForm()
       this.setState({
        newName: '',
        newSurname: '',
        newPhoneNumber: '',
       })
    }
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="newName"
            value={this.state.newName}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group mb-3">
          <label>Surname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your surname"
            name="newSurname"
            value={this.state.newSurname}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group mb-3">
          <label>Phone number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your phone number"
            name="newPhoneNumber"
            value={this.state.newPhoneNumber}
            onChange={this.changeHandler}
          />
        </div>
        <div>
        <button type="submit" className="btn btn-primary btnMargin">
          Submit
        </button>
        <button onClick={this.props.toggleForm} type="button" className="btn btn-warning ml-5">
          Cancel
        </button>
        </div>
      </form>
    );
  }
}
