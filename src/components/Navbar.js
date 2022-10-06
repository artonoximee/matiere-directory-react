import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark p-4 border-bottom border-secondary">
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
              <Link to="form" className="nav-link">Proposer un ajout</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="mailto:contact@mlav.land">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar;