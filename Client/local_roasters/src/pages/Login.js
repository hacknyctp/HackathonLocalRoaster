import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            success: false
        }
    }

    textHandler = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    submit = () => {
        axios.post("https://local-roasters-api.herokuapp.com/users/login", {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('token', res.data.token);
            console.log(localStorage.getItem('token'))
            this.props.history.push("/dashboard");
        })
            .catch(error => console.log(error))
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <h1>Local Roasters</h1>
                <input type="text" value={email} id="email" placeholder="email" onChange={(e) => this.textHandler(e)} required />
                <input type="password" value={password} id="password" placeholder="password" onChange={(e) => this.textHandler(e)} required />
                <input type="submit" value="submit" onClick={this.submit} />
            </div>
        )
    }
}