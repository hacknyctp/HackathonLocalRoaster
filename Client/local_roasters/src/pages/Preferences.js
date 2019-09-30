import React, { Component } from "react";
import "../styles/Preferences.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  textHandler = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submit = () => {
    axios
      .post("https://local-roasters-api.herokuapp.com/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));
        this.props.history.push("/preferences");
      })
      .catch(error => console.log(error));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="d-flex flex-column align-items-center backgroundImg">
        <div className="container-fluid">
          <div className="jumbotron" style={{ marginTop: "-5px" }}>
            <h3>
              <i className="fas fa-mug-hot"></i> Local Roasters
            </h3>
          </div>
        </div>

        <h1 style={{ color: "white" }}>Update Preferences</h1>
        <div className="inputs">
          <input
            className="m-2 form-control"
            type="text"
            value={email}
            id=""
            placeholder="Roast"
            onChange={e => this.textHandler(e)}
            required
          />
          <input
            className="m-2 form-control"
            type=" text"
            value={password}
            id=" price"
            placeholder="Price"
            onChange={e => this.textHandler(e)}
            required
          />
          <input
            className="m-2 form-control"
            type=" email"
            value={email}
            id=" password"
            placeholder="email"
            onChange={e => this.textHandler(e)}
            required
          />
          <h2 style={{ color: "white" }}>Update Password</h2>
          <input
            className="m-2 form-control"
            type="Password"
            value={password}
            id="Password"
            placeholder="password"
            onChange={e => this.textHandler(e)}
            required
          />
          <input
            className="m-2 form-control"
            type=" password"
            value={password}
            id=" password"
            placeholder="confirm password"
            onChange={e => this.textHandler(e)}
            required
          />

          <input
            className="m-2 p-2 btn btn-success"
            type="submit"
            value="submit"
            onClick={this.submit}
          />
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => this.props.history.push("/dashboard")}
        >
          {" "}
          Back to Dashboard
        </button>
      </div>
    );
  }
}
