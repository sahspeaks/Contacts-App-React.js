import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    let { id, email, first_name, last_name, avatar } = this.props;
    return (
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={avatar} className="card-img-top" alt="avatar" />
          <div className="card-body">
            <h5>Contact {id}</h5>
            <h5 className="card-title">
              Name: {first_name} {last_name}
            </h5>
            <p className="card-text">Email: {email}</p>
            <a href="tel:+919393606147" className="btn btn-sm btn-success">
              <i className="fa-solid fa-phone"></i> Call Me
            </a>
          </div>
        </div>
      </div>
    );
  }
}
