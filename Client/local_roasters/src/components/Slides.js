import React, { Component } from 'react';


const Slides = ({ price, coffee, name, img, address }) => {
    if (img == null) {
        img = "../assets/defaultCoffee.jpg";
    }

    return (
        <div className="e-flex align-items-center justify-content border m-3 p-3" style={{ width: "100%" }}>
            <h1> {name} </h1>
            <hr />
            <div style={{ padding: "0 100px" }}>
                <img className="img-fluid rounded mt-3 mb-3" src={img} />
            </div>
            <p>{coffee}: ${price}</p>
            <a className="btn btn-success" href={`https://www.google.com/search?q=${address}`}> Take me </a>
        </div >
    )
}

export default Slides;