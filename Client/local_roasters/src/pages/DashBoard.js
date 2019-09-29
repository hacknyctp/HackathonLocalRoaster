import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slides from "../components/Slides";
import { Swipeable } from "react-swipeable";
import axios from "axios";
import "../styles/DashBoard.css";

const RIGHT = "-1";
const LEFT = "+1";
const IMG_WIDTH = "342px";
const IMG_HEIGHT = "249px";

const buttonLeft = { float: "left" };
const buttonRight = { float: "right" };

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeOfCoffee: "",
            location: "",
            price: "",
            recomendations: [{ location: "" }],
            slideIndex: 0
        };
    }
    //this changes slide index
    onSwiped(direction) {
        const { recomendations } = this.state;
        const change = direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = this.state.slideIndex + Number(change);
        let newIdx;
        if (adjustedIdx >= recomendations.length) {
            //after last slide go to first
            newIdx = 0;
        } else if (adjustedIdx < 0) {
            //if swipe left on first go to last
            newIdx = recomendations.length - 1;
        } else {
            //else go to next slide back or forth
            newIdx = adjustedIdx;
        }
        this.setState({ slideIndex: newIdx });
    }

    //this is going to get the user data from the database
    componentDidMount() {
        console.log(localStorage.getItem("token"));
        axios("https://local-roasters-api.herokuapp.com/users", {
            headers: { "x-auth-token": localStorage.getItem("token") }
        })
            // .then(res => console.log(res))
            .then(res =>
                this.setState({
                    typeOfCoffee: res.data.coffee,
                    price: res.data.price,
                    location: res.data.location,
                    price: res.data.price
                })
            )
            .catch(error => {
                console.log(error.message);
            })
            .then(() => {
                //second api call to get the locations
                axios("https://local-roasters-api.herokuapp.com/roasters/getRoasters", {
                    headers: { "x-auth-token": localStorage.getItem("token") },
                    params: {
                        zipcode: 11214
                    }
                })
                    .then(res => this.setState({ recomendations: [...res.data] }))
                    .catch(err => {
                        console.log("error " + err);
                        window.location.replace("/");
                    });
            })
            .catch(error => {
                error.error(error.message);
            });
    }

    logout = () => {
        localStorage.clear();
        this.props.history.push("/");
    };

    render() {
        const {
      typeOfCoffee,
            location,
            price,
            recomendations,
            slideIndex
            } = this.state;
        const currentPlace = recomendations[slideIndex];
        return (
            <div>

                <div className='d-flex flex-column align-items-center '>
                    <div className="container-fluid dashHero ">
                        <div className="jumbotron" style={{ marginTop: "-5px" }}>
                            <img className="logout" src={require("../assets/logout.svg")} onClick={this.logout} />
                            <br />
                            <Link to="/preferences">preferences</Link>
                            <h3>
                                <i className="fas fa-mug-hot"></i> Local Roasters
                        </h3>
                        </div>
                    </div>
                </div>
                <Swipeable
                    trackMouse
                    preventDefaultTouchmoveEvent
                    onSwipedLeft={() => this.onSwiped(LEFT)}
                    onSwipedRight={() => this.onSwiped(RIGHT)}
                >
                    <h2 className="m-5">
                        {typeOfCoffee.substring(0, 1).toUpperCase()}
                        {typeOfCoffee.substring(1)} coffee within ${price} near {location}
                    </h2>
                    <div
                        className="d-flex card"
                        style={{ maxWidth: "100%", position: "abosulte" }}
                    >
                        <button onClick={() => this.onSwiped(RIGHT)} className="buttonStyle" style={buttonLeft}>
                            ⇦
          </button>
                        <Slides
                            price={currentPlace.price}
                            coffee={currentPlace.coffee}
                            name={currentPlace.name}
                            address={currentPlace.location.address}
                            img={currentPlace.img}
                            beans={currentPlace.beans}
                        />
                        <button onClick={() => this.onSwiped(LEFT)} className="buttonStyle" style={buttonRight}>
                            ⇨
          </button>
                    </div>
                </Swipeable>
            </div>
        );
    }
}
