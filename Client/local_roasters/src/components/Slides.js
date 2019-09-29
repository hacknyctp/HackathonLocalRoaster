import React, { Component } from 'react';


const Slides = ({ location, price, coffee, name }) => {
    return (
        <div>
            <h1> {name} </h1>
            <p>{coffee}: ${price}</p>
        </div>
    )
}

export default Slides;