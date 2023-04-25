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

            <div className="back-button-container">
                <div className="back-button" onClick={handleClick}>
                    Back<span> </span>
                </div>

                <div className="temperature-display-container">
                    <div>
                        <header>Friday</header>
                        <div className="top-border"></div>
                    </div>


                </div>
                <div>
                        <button id="start-time-button">Start Time</button>
                        <button id="end-time-button">End Time</button>
                        <button id="temperature-button">Temperature</button>
                    </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={alertTemp}>Confirm</button>
            </div>

        </div>

    )
}
export default Testing;