/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext} from "react";
import {Outlet} from "react-router-dom";

import {ThemeContext} from "./context/themeContext"

import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  const {theme} = useContext(ThemeContext)
  console.log(theme)

  return (
    <div id="page" className={`container-fluid bg-${theme} text-${theme === "dark" ? "light" : "dark"}`}>
    <Navbar />
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 col-md-12 p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;