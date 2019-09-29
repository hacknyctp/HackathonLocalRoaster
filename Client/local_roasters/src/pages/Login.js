import React, { Component } from 'react'
import "../styles/Login.css"
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            success: falsegi
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
            <div className='d-flex flex-column align-items-center backgroundImg'>
                <div className="container-fluid">
                    <div className="jumbotron" style={{ marginTop: "-5px" }}>
                        <h3>
                            <i className="fas fa-mug-hot"></i> Local Roasters
                        </h3>
                    </div>
                </div>

                <h1 style={{ color: "white" }}>Login</h1>
                <div className="inputs">
                    <input className="m-2 form-control" type="text" value={email} id="email" placeholder="email" onChange={(e) => this.textHandler(e)} required />
                    <input className="m-2 form-control" type="password" value={password} id="password" placeholder="password" onChange={(e) => this.textHandler(e)} required />
                    <input className="m-2 p-2 btn btn-success" type="submit" value="login" onClick={this.submit} />
                </div>
                <Link style={{ color: "white" }} styleclassName='links' to='/signup'>
                    <span className='links-small'>Don't have an account ? |</span>Sign Up
                 </Link>
            </div>
        )
    }
}