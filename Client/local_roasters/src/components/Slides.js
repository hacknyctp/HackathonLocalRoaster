import React, { Component } from 'react';


const Slides = ({ price, coffee, name, img }) => {
    return (
        <div className="e-flex align-items-center justify-content" style={{ width: "100%" }}>
            <h1> {name} </h1>
            <div style={{ padding: "0 100px" }}>
                <img className="img-fluid rounded mx-auto d-block " src={img} />
            </div>
            <p>{coffee}: ${price}</p>
        </div >
    )
}

export default Slides;