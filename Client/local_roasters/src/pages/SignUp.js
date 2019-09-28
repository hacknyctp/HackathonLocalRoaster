import React, { Component } from 'react';

import "../styles/SignUp.css";



export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "10033",
            email: "sparky@gmail.com",
            password: "abc123",
            retype: "abc123"
        }
    }

    formHandler = (e) => {
        console.log(this.state[e.target.id]);
        this.setState({ [e.target.id]: e.target.value });
    }

    submitHandler = () => {
        sessionStorage.setItem('price', 4);
        sessionStorage.setItem('coffee', 'black');
        //this sends the information to the sign up api
        const { location, email, password, retype } = this.state;

        const data = {
            location: "10033",
            email: "sparky@gmail.com",
            password: "abc123",
            price: 4,
            coffee: "coffee"
        }
        console.log(data);

        if (password === retype) {
            fetch("https://local-roasters-api.herokuapp.com/users/signup", {
                method: 'POST',
                body: JSON.stringify(data),
                mode: 'no-cors'
            })
                .then(res => console.log(res))
                .catch(error => console.log(error))
        } else {
            alert("The passwords do not match");
        }

    }
    render() {
        return (
            <div className="">
                <h1>Local Roasters</h1>
                {/* This is the form div */}
                <div>
                    <h2>Where are you getting your Coffee ? </h2>
                    <input id="location" type="numeric" value={this.state.location} placeholder="zip code" onChange={(event) => this.formHandler(event)} />
                    <br />
                    <input id="email" type="text" value={this.state.email} placeholder="email" onChange={(event) => this.formHandler(event)} />
                    <input id="password" type="password" value={this.state.password} placeholder="password" onChange={(event) => this.formHandler(event)} />
                    <input id="retype" type="password" value={this.state.retype} placeholder="retype password" onChange={(event) => this.formHandler(event)} />
                    <input type="submit" value="Continue" onClick={this.submitHandler} />
                </div>
            </div>
        )
    }
}