import React, { Component } from "react";
import Slides from "../components/Slides"
import { Swipeable } from "react-swipeable";
import axios from 'axios';
import "../styles/DashBoard.css";

const RIGHT = "-1";
const LEFT = "+1";
const IMG_WIDTH = "342px";
const IMG_HEIGHT = "249px";


const buttonStyles = {
    height: IMG_HEIGHT,
    color: "#eeeeee",
    fontSize: "2em",
    backgroundColor: "rgba(230,230,230,.2)",
    border: "0",
    cursor: "pointer"
};
const buttonLeft = { ...buttonStyles, float: "left" };
const buttonRight = { ...buttonStyles, float: "right" };


export default class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typeOfCoffee: "",
            location: "",
            price: "",
            recomendations: [],
            slideIndex: 0
        }
    }
    //this changes slide index
    onSwiped(direction) {
        const { recomendations } = this.state;
        const change = direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = this.state.slideIndex + Number(change);
        let newIdx;
        if (adjustedIdx >= recomendations.length) { //after last slide go to first
            newIdx = 0;
        } else if (adjustedIdx < 0) { //if swipe left on first go to last
            newIdx = recomendations.length - 1;
        } else { //else go to next slide back or forth
            newIdx = adjustedIdx;
        }
        this.setState({ slideIndex: newIdx });
    }


    //this is going to get the user data from the database
    componentDidMount() {
        axios("https://local-roasters-api.herokuapp.com/users", { headers: { 'x-auth-token': localStorage.getItem("token") } })
            .then((res) => this.setState({
                typeOfCoffee: res.coffee,
                price: res.price,
                location: res.location, price: res.price,
                recomendations: res.recomendations
            }))
            .then(() => console.log(this.state))
            .catch((error) => alert("Something went wrong with getting your data..."));
    }


    render() {
        const { typeOfCoffee, location, price, recomendations, slideIndex } = this.state;
        const currentPlace = recomendations[slideIndex];
        return (

            <Swipeable
                trackMouse
                preventDefaultTouchmoveEvent
                onSwipedLeft={() => this.onSwiped(LEFT)}
                onSwipedRight={() => this.onSwiped(RIGHT)}
            // style={{ width: IMG_WIDTH }}
            >
                <div>
                    <h2>{typeOfCoffee} coffee in {location} with in ${price}</h2>
                    <button onClick={() => this.onSwiped(RIGHT)} style={buttonLeft}>
                        ⇦
                    </button>
                    <Slides
                    // location={currentPlace.location}
                    // price={currentPlace.price}
                    // coffee={currentPlace.coffee}
                    />
                    <button onClick={() => this.onSwiped(LEFT)} style={buttonRight}>
                        ⇨
                    </button>
                </div>

            </Swipeable >

        )
    }
}