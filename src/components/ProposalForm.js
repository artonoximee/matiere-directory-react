import React from "react";

function ProposalForm() {
  return (
    <>
      <div className="row justify-content-center top-margin">
        <div className="col-12">
          <input 
            type="text" 
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="Rechercher par nom"
            value={null}
            name="text"
            onChange={null}
          />
        </div>
      </div>
    </>
  )
}

export default ProposalForm;