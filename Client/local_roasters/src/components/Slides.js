import React, { Component } from 'react';


const Slides = ({ location, price, coffee }) => {
    return (
        <div>
            {/* <h1> {location.address} </h1> */}
            <p>{coffee}: ${price}</p>
        </div>
    )
}

export default Slides;