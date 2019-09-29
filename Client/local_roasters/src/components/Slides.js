import React, { Component } from 'react';


const Slides = ({ price, coffee, name, img }) => {
    return (
        <div className="e-flex align-items-center justify-content" style={{ maxWidth: "100%" }}>
            <h1> {name} </h1>
            <p>{coffee}: ${price}</p>
            <div style={{ width: "40%" }}>
                <img className="img-fluid rounded mx-auto d-block " src={img} />
            </div>
        </div >
    )
}

export default Slides;