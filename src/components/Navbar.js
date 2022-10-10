import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from "../context/themeContext"

import "./Navbar.css";

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <nav className={`navbar fixed-top navbar-${theme} navbar-expand-lg bg-${theme} p-4 border-bottom border-${theme === "dark" ? "secondary" : "dark"}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><i className="fa-solid fa-address-book text-success"></i> &nbsp;Annuaire Réemploi</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Recherche</Link>
            </li>
            <li className="nav-item">
              <Link to="add" className="nav-link">Proposer un ajout</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <label className="switch">
              <input type="checkbox" onClick={toggleTheme} />
              <span className="slider round"></span>
            </label>
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar;