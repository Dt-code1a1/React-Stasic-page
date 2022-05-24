import React from "react";
import faceImage from "../assets/Rectangle.svg"
import emailIcon from "../assets/Icon.svg"

export default function Info() {
    return (
        <div>
            <img src={faceImage}/>
            <div className="infoContent">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p className="p-content">laurasmith.website</p>
            </div>
            <button className="emailButton"><img src={emailIcon}/> Email </button>
        </div>
    )
}