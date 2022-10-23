import React, { Component } from "react";
import Contact from "./Contact";
import Spinner from "./Spinner";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      lodaing: false,
      page: 1
    };
  }
  async componentDidMount() {
    let url = "https://reqres.in/api/users?page=1?&per_page=6";
    this.setState({ loading: true });
    let results = await fetch(url);
    let parsedData = await results.json();
    console.log(parsedData);
    this.setState({
      data: parsedData.data,
      total: parsedData.total,
      loading: false
    });
  }

  handlePrevClick = async () => {
    let url = `https://reqres.in/api/users?page=${
      this.state.page - 1
    }?&per_page=6`;
    this.setState({ loading: true });
    let results = await fetch(url);
    let parsedData = await results.json();
    // console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      data: parsedData.data,
      loading: false
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.total / 6)) {
    } else {
      let url = `https://reqres.in/api/users?page=${
        this.state.page + 1
      }?&per_page=6`;
      this.setState({ loading: true });
      let results = await fetch(url);
      let parsedData = await results.json();
      this.setState({
        page: this.state.page + 1,
        data: parsedData.data,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="container">Contacts</h1>
        {this.state.lodaing && <Spinner />}
        <div className="row ">
          {!this.state.lodaing &&
            this.state.data.map((element) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 mx-0 my-3"
                  key={element.id}
                >
                  <Contact
                    id={element.id}
                    avatar={element.avatar}
                    first_name={element.first_name}
                    last_name={element.last_name}
                    email={element.email}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            <i className="fa-solid fa-2x fa-arrow-left-long"></i>
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.total / 6)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            <i className="fa-solid fa-2x fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    );
  }
}
