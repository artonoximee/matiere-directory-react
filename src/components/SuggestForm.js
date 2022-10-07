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
          <label for="description" className="form-label">Description de la structure</label>
          <textarea 
            type="text"
            id="description"
            rows="5"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="Entrez ici une description qui permettra de comprendre les services proposés par la structure"
            value={null}
            name="description"
            onChange={null}
          />
          <label for="type" className="form-label">Type de structure</label>
          <select 
            id="type" 
            className="form-select form-select-lg mb-5 bg-dark border-secondary text-light" 
            value={null}
            name="structure_types"
            onChange={null}
          >
            <option value="NONE">Choisir le type de structure</option>
          </select>


          <label for="address" className="form-label"><i class="fa-solid fa-location-dot text-success"></i> Adresse (numéro et rue)</label>
          <input 
            type="text" 
            id="address"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="1 Rue de l'Hôtel de Ville"
            value={null}
            name="address"
            onChange={null}
          />
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <label for="address" className="form-label">Code postal</label>
              <input
                type="text"
                id="address"
                className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
                placeholder="12345"
                value={null}
                name="postcode"
                onChange={null}
              />
            </div>
            <div class="col-lg-6 col-md-12">
              <label for="department" className="form-label">Département</label>
              <select 
                id="department" 
                className="form-select form-select-lg mb-3 bg-dark border-secondary text-light" 
                value={null}
                name="department"
                onChange={null}
              >
                <option value="NONE">Choisir le département</option>
              </select>
            </div>
          </div>

          <label for="city" className="form-label">Ville</label>
          <input 
            type="text" 
            id="city"
            className="form-control form-control-lg mb-5 bg-dark border-secondary text-light"
            placeholder="Nom de la localité"
            value={null}
            name="text"
            onChange={null}
          />

          <div class="row">
            <div class="col-lg-6 col-md-12">
              <label for="email" className="form-label"><i class="fa-solid fa-envelope text-success"></i> Email</label>
              <input 
                type="email" 
                id="email"
                className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
                placeholder="nom@domaine.com"
                value={null}
                name="email"
                onChange={null}
              />
            </div>
            <div class="col-lg-6 col-md-12">
              <label for="email" className="form-label"><i class="fa-solid fa-phone text-success"></i> Téléphone</label>
              <input 
                type="text" 
                id="telephone"
                className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
                placeholder="01 23 45 67 89"
                value={null}
                name="telephone"
                onChange={null}
              />
            </div>
          </div>

          <label for="website" className="form-label"><i class="fa-solid fa-link text-success"></i> Site web</label>
          <input 
            type="text" 
            id="website"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="http://www.siteinternet.com/"
            value={null}
            name="website"
            onChange={null}
          />

          <div class="row">
            <div class="col-lg-4 col-md-12">
              <label for="facebook" className="form-label"><i class="fa-brands fa-facebook text-success"></i> Facebook</label>
              <input 
                type="text" 
                id="facebook"
                className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
                placeholder="https://www.facebook.com/username"
                value={null}
                name="facebook_url"
                onChange={null}
              />
            </div>
            <div class="col-lg-4 col-md-12">
              <label for="twitter" className="form-label"><i class="fa-brands fa-twitter text-success"></i> Twitter</label>
              <input 
                type="text" 
                id="twitter"
                className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
                placeholder="https://twitter.com/username"
                value={null}
                name="twitter_url"
                onChange={null}
              />
            </div>
            <div class="col-lg-4 col-md-12">
              <label for="instagram" className="form-label"><i class="fa-brands fa-instagram text-success"></i> Instagram</label>
              <input 
                type="text" 
                id="instagram"
                className="form-control form-control-lg mb-5 bg-dark border-secondary text-light"
                placeholder="https://www.instagram.com/username"
                value={null}
                name="instagram_url"
                onChange={null}
              />
            </div>
          </div>

          <div class="d-grid gap-2 mb-5 bottom-margin">
            <button class="btn btn-lg btn-outline-success" onclick={null} type="submit">Envoyer</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuggestForm;