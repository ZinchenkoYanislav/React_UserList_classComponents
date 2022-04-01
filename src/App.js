import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          name: "Vanya",
          surname: "Ivanov",
          phoneNumber: "(+380)99-356-18-72",
        },
        {
          id: 2,
          name: "Tanya",
          surname: "Ivanova",
          phoneNumber: "(+380)99-222-22-22",
        },
        {
          id: 3,
          name: "Igor",
          surname: "Petrov",
          phoneNumber: "(+380)99-333-33-33",
        },
      ],
      visibilityForm: false,
    };
  }

  toggleForm = () => {
    this.setState({
      visibilityForm: !this.state.visibilityForm,
    });
  };

  addUser = (name, surname, phoneNumber) => {
    this.setState({
      users: [
        ...this.state.users,
        { id: new Date().getTime(), name, surname, phoneNumber },
      ],
    });
  };

  deleteUser = (id) => {
    const changedUser = this.state.users.filter((item) => item.id !== id);
    console.log(changedUser);
    this.setState({
      users: changedUser,
    });
  };

  render() {
    return (
      <div className="container">
        <UsersList users={this.state.users} deleteUser={this.deleteUser} />
        <button
          type="button"
          onClick={() => this.toggleForm()}
          className="btn btn-primary mb-3"
        >
          Add User
        </button>
        {this.state.visibilityForm ? (
          <Form addUser={this.addUser} toggleForm={this.toggleForm} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
