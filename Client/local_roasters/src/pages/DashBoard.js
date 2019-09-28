import React, { Component } from "react";
import Slides from "../components/Slides"
import "DashBoard.css";


export default class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typeOfCoffee: "",
            location: "",
            price: "",
            recomendations: []
        }
    }

    //this is going to get the user data from the database
    componentDidMount() {
        fetch("")
            .then((res) => res.json())
            .then((res) => this.setState({
                typeOfCoffee: res.coffeeType,
                location: res.location, price: res.price,
                recomendations: res.recomendations
            }))
            .catch((error) => alert("Something went wrong with getting your data..."));
    }


    render() {
        const { typeOfCoffee, location, price, recomendations } = this.state;
        return (
            <div>
                <h2>{typeOfCoffee} coffee in {location} with in ${price}</h2>
                {/* the div below is going to hold the cards of recomendations*/}
                {recomendations.map((place, index) => {
                    return (
                        <Slides
                            key={index}
                            location={place.location}
                            coffee={place.coffee}
                            price={place.price}
                        />
                    );

                })}
            </div>
        )
    }
}