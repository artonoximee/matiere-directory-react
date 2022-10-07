import React from "react";

function SuggestForm() {
  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <label for="name" className="form-label"><i class="fa-solid fa-file-lines text-success"></i> Nom de la structure</label>
          <input 
            type="text"
            id="name"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="Bureau Réemploi"
            value={null}
            name="text"
            onChange={null}
          />
          <label for="name" className="form-label"><i class="fa-solid fa-file-lines text-success"></i> Nom de la structure</label>
          <input 
            type="text"
            id="name"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="Bureau Réemploi"
            value={null}
            name="text"
            onChange={null}
          />
          <label for="description" className="form-label">Description de la structure</label>
          <textarea 
            type="text"
            id="description"
            rows="5"
            className="form-control form-control-lg mb-5 bg-dark border-secondary text-light"
            placeholder="Entrez ici une description qui permettra de comprendre les services proposés par la structure"
            value={null}
            name="description"
            onChange={null}
          />

          <div class="d-grid gap-2 mb-5 bottom-margin">
            <button class="btn btn-lg btn-outline-success" onclick={null} type="submit">Envoyer</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuggestForm;