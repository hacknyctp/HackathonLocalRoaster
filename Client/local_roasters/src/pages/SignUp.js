import React, { Component } from 'react';
import axios from 'axios';
import '../styles/SignUp.css';
import Navbar from '../components/Navbar';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '10033',
            email: 'sparky@gmail.com',
            password: 'abc123',
            retype: 'abc123'
        };
    }

    formHandler = e => {
        console.log(this.state[e.target.id]);
        this.setState({ [e.target.id]: e.target.value });
    };
    submitHandler = () => {
        sessionStorage.setItem('price', 4);
        sessionStorage.setItem('coffee', 'black');
        //this sends the information to the sign up api
        const { location, email, password, retype } = this.state;

        if (password === retype) {
            axios
                .post('https://local-roasters-api.herokuapp.com/users/signup', {
                    email: email,
                    password: password,
                    location: location,
                    coffee: sessionStorage.getItem('coffee'),
                    price: sessionStorage.getItem('price')
                })
                .then(res => localStorage.setItem('token', res.data.token))
                .then(() => this.props.history.push('/dashboard'))
                .catch(error => console.log(error));
        } else {
            alert('The passwords do not match');
        }
    };
    render() {
        return (
            <div className='container-fluid'>
                <div className='jumbotron'>
                    <h3>
                        <i className='fas fa-mug-hot'></i> Local Roasters
          </h3>
                    <hr class='my-3'></hr>
                    <p>Where are you getting your Coffee ? </p>
                </div>

                <div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            id='location'
                            type='numeric'
                            value={this.state.location}
                            placeholder='zip code'
                            onChange={event => this.formHandler(event)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            className='form-control'
                            id='email'
                            type='text'
                            value={this.state.email}
                            placeholder='email'
                            onChange={event => this.formHandler(event)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            id='password'
                            type='password'
                            value={this.state.password}
                            placeholder='password'
                            onChange={event => this.formHandler(event)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            id='retype'
                            type='password'
                            value={this.state.retype}
                            placeholder='retype password'
                            onChange={event => this.formHandler(event)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            className='btn btn-lg btn-primary'
                            type='submit'
                            value='Continue'
                            onClick={this.submitHandler}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
