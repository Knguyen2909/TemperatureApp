import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import TempApp from "./pages/TempApp/TempApp";
import Login from "./pages/Login/Login";
import ScheduleManager from "./pages/ScheduleManager/ScheduleManager";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/TemperatureControl" element={<TempApp />} />
          <Route path="/ScheduleManager" element={<ScheduleManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);