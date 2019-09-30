import React, { Component } from "react";
import axios from "axios";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            email: "",
            password: "",
            retype: ""
        };
    }

    formHandler = e => {
        console.log(this.state[e.target.id]);
        this.setState({ [e.target.id]: e.target.value });
    };
    submitHandler = () => {
        //this sends the information to the sign up api
        const { location, email, password, retype } = this.state;
    };

    formHandler = e => {
        console.log(this.state[e.target.id]);
        this.setState({ [e.target.id]: e.target.value });
    };
    submitHandler = () => {
        sessionStorage.setItem("price", 4);
        sessionStorage.setItem("coffee", "black");
        //this sends the information to the sign up api
        const { location, email, password, retype } = this.state;

        if (password === retype) {
            axios
                .post("https://local-roasters-api.herokuapp.com/users/signup", {
                    email: email,
                    password: password,
                    location: location,
                    coffee: sessionStorage.getItem("coffee"),
                    price: sessionStorage.getItem("price")
                })
                .then(res => localStorage.setItem("token", res.data.token))
                .then(() => this.props.history.push("/dashboard"))
                .catch(error => console.log(error));
        } else {
            alert("The passwords do not match");
        }
    };

    render() {
        return (
            <div className="container-fluid backgroundImg">
                <div className="jumbotron">
                    <h3>
                        <i className="fas fa-mug-hot"></i> Local Roasters
          </h3>
                    <hr class="my-3"></hr>
                    <p> A few more things... </p>
                </div>
                <h1 style={{ color: "white", fontSize: "22px" }}>
                    Where are you getting your Coffee?
        </h1>
                <div className="signUp align-items-center">
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="location"
                            type="numeric"
                            value={this.state.location}
                            placeholder="Zip Code ie 11216"
                            onChange={event => this.formHandler(event)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            id="email"
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={event => this.formHandler(event)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="password"
                            type="password"
                            value={this.state.password}
                            placeholder="password"
                            onChange={event => this.formHandler(event)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="retype"
                            type="password"
                            value={this.state.retype}
                            placeholder="retype password"
                            onChange={event => this.formHandler(event)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="btn btn-lg btn-success"
                            type="submit"
                            value="Continue"
                            onClick={this.submitHandler}
                        />
                    </div>
                    <Link style={{ color: "white" }} className="links" to="/login">
                        <span className="links-small mt-1 mb-0">Already Sign Up? |</span>{" "}
                        Log In
          </Link>
                </div>
            </div>
        );
    }
}
