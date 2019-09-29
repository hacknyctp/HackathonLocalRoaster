import React, { Component } from 'react';
import "../styles/Slides.css"


const Slides = ({ price, coffee, name, img, address, beans }) => {

    return (
        <div className="e-flex align-items-center justify-content border m-3 p-3" style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                ⇦ <h1 style={{ margin: "0 30px" }}> {name} </h1> ⇨
            </div>
            <hr />
            <div style={{ padding: "0 100px" }}>
                <img className="img-fluid rounded mt-3 mb-3" src={img} />
            </div>
            <p style={{ float: "right ", fontSize: "2rem" }}>${price}</p>
            <div style={{ width: "60%" }}>
                {beans == 1 ?
                    <div>
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} /> </div> : null}
                {beans == 2 ?
                    <div>
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} /> </div> : null}
                {beans == 3 ?
                    <div>
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain.svg")} /> </div> : null}
                {beans == 4 ?
                    <div>
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} />
                        <img className="img" src={require("../assets/coffee-grain-fill.svg")} /> </div> : null}

            </div>
            <br />
            <div className="card-bottom">
                <a className="btn btn-success" target="_blank" href={`https://www.google.com/maps/place/${address}`}> Take me here </a>
                <p>{address}</p>
            </div>
        </div >
    )
}

export default Slides;