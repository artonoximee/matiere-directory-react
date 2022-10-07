import React from "react";

function ContactHeader() {
  return (
    <div className="row mt-5 justify-content-center top-margin">
      <div className="col mt-5">
        <h1 className="text-center"><i class="fa-solid fa-paper-plane text-success"></i> &nbsp;Nous contacter</h1>
        <p className="fs-4 mt-5 text-center">
          Si vous souhaitez nous contacter pour suggérer des modifications, demander l'enlèvement de vos coordonnées de l'annuaire, ou n'importe quelle raison <i class="fa-solid fa-face-smile-wink text-success"></i>
        </p>
      </div>
    </div>
  )
}

export default ContactHeader;