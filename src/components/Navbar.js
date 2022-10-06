import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark p-4 border-bottom border-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><i className="fa-solid fa-address-book text-success"></i> &nbsp;Annuaire Réemploi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <a className="nav-link" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recherche</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ajouter</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;