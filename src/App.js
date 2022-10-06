/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {Outlet} from "react-router-dom";

import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 col-md-12 p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;