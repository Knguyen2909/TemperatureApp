import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="primary"
                            style={{ borderRadius: '5px', width: "200px" }}
                        >
                            Schedule
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ borderRadius: '5px', width: "200px" }}>
                            <Dropdown.Item>9:00AM - 10:00 AM</Dropdown.Item>
                            <Dropdown.Item>10:00AM - 11:00 AM</Dropdown.Item>
                            <Dropdown.Item>11:00 AM - 12:00 AM</Dropdown.Item>
                            <Dropdown.Item>12:00AM - 1:00 PM</Dropdown.Item>
                            <Dropdown.Item>1:00PM - 2:00 PM</Dropdown.Item>
                            <Dropdown.Item>2:00 PM - 3:00 PM</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>


                <div>
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="primary"
                            style={{ borderRadius: '5px', width: "200px" }}
                        >
                            Temperature
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ borderRadius: '5px', width: "200px" }}>
                            <Dropdown.Item>26'C</Dropdown.Item>
                            <Dropdown.Item>27'C</Dropdown.Item>
                            <Dropdown.Item>28'C</Dropdown.Item>
                            <Dropdown.Item>29'C</Dropdown.Item>
                            <Dropdown.Item>30'C</Dropdown.Item>
                            <Dropdown.Item>31'C</Dropdown.Item>
                            <Dropdown.Item>32'C</Dropdown.Item>
                            <Dropdown.Item>33'C</Dropdown.Item>
                            <Dropdown.Item>34'C</Dropdown.Item>
                            <Dropdown.Item>35'C</Dropdown.Item>
                            <Dropdown.Item>36'C</Dropdown.Item>
                            <Dropdown.Item>37'C</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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