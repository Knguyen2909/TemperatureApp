import React, { useState } from "react";
import "./Testing.css";

function Testing() {


    const [currentPage, setCurrentPage] = useState('home');

    function handleClick() {
        setCurrentPage('TempApp');
        window.location = "/TemperatureControl"
    }
    function alertTemp() {
        alert("The schedule has been confirmed")
    }

    return (
        <div className="app-container">

            <div className="title-text-button" >
                Friday<span> </span>
            </div>

            <div className="temperature-display-container">
                <div>
                    <div className="text-button" >Start Time<span> </span>
                    </div>

                    <div className="text-button" >End Time<span> </span>
                    </div>

                    <div className="text-button" >Temperature<span> </span>
                    </div>
                </div>

            </div>

            <div className="start-button-container">
                <button className="start-button" onClick={alertTemp}>Confirm</button>
            </div>
            <div className="back-button-container">
                <div className="back-button" onClick={handleClick}>
                    Back<span> </span>
                </div>
            </div>
        </div>

    )
}
export default Testing;