import React from "react";

function SuggestHeader() {
  return (
    <div className="row mt-5 justify-content-center top-margin">
      <div className="col mt-5">
        <h1 className="text-center"><i className="fa-solid fa-square-plus text-success"></i> &nbsp;Proposer un ajout à l'annuaire</h1>
        <p className="fs-4 mt-5 text-center">
          L'objectif de cette base de données est de répertorier <b>les acteur·ices qui œuvrent pour le réemploi de matériaux de construction en France</b>.
          L'outil de recherche ci-dessous vous permet d'accéder aux acteur·ices autour de vous selon les services qu'ielles proposent.
        </p>
      </div>
    </div>
  )
}

export default SuggestHeader;