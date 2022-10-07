import React from "react";

function SuggestHeader() {
  return (
    <div className="row mt-5 justify-content-center top-margin">
      <div className="col mt-5">
        <h1 className="text-center"><i className="fa-solid fa-square-plus text-success"></i> &nbsp;Proposer un ajout à l'annuaire</h1>
        <p className="fs-4 mt-5 text-center">
          Si vous connaissez une structure qui entre dans les critères de l'annuaire réemploi et qui n'y figure pas encore, vous pouvez ici nous envoyer votre suggestion. Elle sera validée dans les plus brefs délais avant d'être publiée.
        </p>
      </div>
    </div>
  )
}

export default SuggestHeader;