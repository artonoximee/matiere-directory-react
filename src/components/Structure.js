import React from 'react';

function Structure(props) {
  // const { name, description } = props.structure
  return (
    <div className="card reveal border border-1 border-secondary text-bg-dark mt-4">
      <div className="card-body">
        <div className="row align-items-end mt-2">
          <div className="col-md-6 col-sm-12">
            <h3><b>La Réserve des arts - Marseille</b></h3>
          </div>
          <div className="col-md-3 col-sm-12">
            <h2 className="badge text-bg-light me-2">Ressourcerie</h2>
          </div>
          <div className="col-md-3 col-sm-12 text-md-end text-sm-start">
            <h5>13015, Marseille</h5>
          </div>
        </div>
        <p className="text-bg-dark mt-2">
          Sa mission solidaire est d'accompagner les professionnel.le.s du secteur de la culture, de la création et de l'artisanat dans l'appropriation des pratiques de l'économie circulaire et le réemploi de matériaux.
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-2">
            <a className="btn btn-sm btn-outline-light" target="_blank" href="https://www.lareservedesarts.org/"><i className="fa-solid fa-globe"></i> www.lareservedesarts.org</a>
          </div>
          <div className="col-lg-4 col-md-12 mt-2">
            <a className="btn btn-sm btn-outline-light" href="mailto:contact@lareservedesarts.org"><i className="fa-solid fa-envelope"></i> contact@lareservedesarts.org</a>
          </div>
          <div className="col-lg-2 col-md-12 mt-2 text-lg-end text-md-start">
            <a className="btn btn-sm btn-outline-light me-2" target="_blank" href="https://www.facebook.com/lareservedesarts"><i className="fa-brands fa-facebook"></i></a>
            <a className="btn btn-sm btn-outline-light me-2" target="_blank" href="https://www.instagram.com/lareservedesarts/"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-3">
            <span><i className="fa-solid fa-location-dot"></i> 10 Imp. du Pétrole, 13015, Marseille</span>
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Structure;