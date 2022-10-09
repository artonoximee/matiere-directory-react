import React, {useState} from "react";
import {useForm} from "react-hook-form";

function SuggestForm() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [confirmSent, setConfirmSent] = useState(false)

  function onSubmit(data) {
    console.log(data)
    setConfirmSent(true)
  }

  function resetConfirmButton() {
    setConfirmSent(false)
  }

  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <label htmlFor="name" className="form-label mt-3"><i className="fa-solid fa-file-lines text-success"></i> Nom de la structure</label>
          <input 
            type="text"
            id="name"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.name && "is-invalid border-danger"}`}
            placeholder="Bureau Réemploi"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-danger mt-2">Merci de renseigner le nom de la structure</p>}

          <label htmlFor="description" className="form-label mt-3">Description de la structure</label>
          <textarea 
            type="text"
            id="description"
            rows="5"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.description && "is-invalid border-danger"}`}
            placeholder="Entrez ici une description qui permettra de comprendre les services proposés par la structure"
            {...register("description", { required: true })}
          />
          {errors.description && <p className="text-danger mt-2">Merci de renseigner la description de la structure</p>}

          <label htmlFor="type" className="form-label mt-3">Type de structure</label>
          <select 
            id="type" 
            className="form-select form-select-lg bg-dark border-secondary text-light" 
            {...register("structure_type")}
          >
            <option value="NONE">Choisir le type de structure</option>
          </select>


          <label htmlFor="address" className="form-label mt-5"><i className="fa-solid fa-location-dot text-success"></i> Adresse (numéro et rue)</label>
          <input 
            type="text" 
            id="address"
            className="form-control form-control-lg bg-dark border-secondary text-light"
            placeholder="1 Rue de l'Hôtel de Ville"
            {...register("address")}
          />
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <label htmlFor="address" className="form-label mt-3">Code postal</label>
              <input
                type="text"
                id="address"
                className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.postcode && "is-invalid border-danger"}`}
                placeholder="12345"
                {...register("postcode", { pattern: /\d{5}/g })}
              />
              {errors.postcode && <p className="text-danger mt-2">Le format du code postal semble incorrect</p>}
            </div>
            <div className="col-lg-6 col-md-12">
              <label htmlFor="department" className="form-label mt-3">Département</label>
              <select 
                id="department" 
                className="form-select form-select-lg bg-dark border-secondary text-light" 
                {...register("department")}
              >
                <option value="NONE">Choisir le département</option>
              </select>
            </div>
          </div>

          <label htmlFor="city" className="form-label mt-3">Ville</label>
          <input 
            type="text" 
            id="city"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.city && "is-invalid border-danger"}`}
            placeholder="Nom de la localité"
            {...register("city", { required: true })}
          />
          {errors.city && <p className="text-danger mt-2">Merci de renseigner la ville où se situe la structure</p>}

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <label htmlFor="email" className="form-label mt-5"><i className="fa-solid fa-envelope text-success"></i> Email</label>
              <input 
                type="email" 
                id="email"
                className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.email && "is-invalid border-danger"}`}
                placeholder="nom@domaine.com"
                {...register("email", { pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
              />
              {errors.email && <p className="text-danger mt-2">L'adresse email semble incorrecte</p>}
            </div>
            <div className="col-lg-6 col-md-12">
              <label htmlFor="telephone" className="form-label mt-lg-5 mt-3"><i className="fa-solid fa-phone text-success"></i> Téléphone</label>
              <input 
                type="text" 
                id="telephone"
                className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.telephone && "is-invalid border-danger"}`}
                placeholder="0123456789"
                {...register("telephone", { pattern: /\d{10}/g })}
              />
              {errors.telephone && <p className="text-danger mt-2">Le format du téléphone semble incorrect</p>}
            </div>
          </div>

          <label htmlFor="website" className="form-label mt-3"><i className="fa-solid fa-link text-success"></i> Site web</label>
          <input 
            type="text" 
            id="website"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.website && "is-invalid border-danger"}`}
            placeholder="http://www.siteinternet.com/"
            {...register("website", { pattern: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/g })}
          />
          {errors.website && <p className="text-danger mt-2">Le format de l'adresse du site internet semble incorrect</p>}

          <div className="row">
            <div className="col-lg-4 col-md-12">
              <label htmlFor="facebook" className="form-label mt-3"><i className="fa-brands fa-facebook text-success"></i> Facebook</label>
              <input 
                type="text" 
                id="facebook"
                className="form-control form-control-lg bg-dark border-secondary text-light"
                placeholder="https://www.facebook.com/username"
                {...register("facebook_url")}
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <label htmlFor="twitter" className="form-label mt-3"><i className="fa-brands fa-twitter text-success"></i> Twitter</label>
              <input 
                type="text" 
                id="twitter"
                className="form-control form-control-lg bg-dark border-secondary text-light"
                placeholder="https://twitter.com/username"
                {...register("twitter_url")}
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <label htmlFor="instagram" className="form-label mt-3"><i className="fa-brands fa-instagram text-success"></i> Instagram</label>
              <input 
                type="text" 
                id="instagram"
                className="form-control form-control-lg bg-dark border-secondary text-light"
                placeholder="https://www.instagram.com/username"
                {...register("instagram_url")}
              />
            </div>
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-lg mt-5 btn-outline-success" onClick={handleSubmit(onSubmit)} type="submit">Envoyer</button>
          </div>

          {confirmSent && 
          <div className="alert alert-success alert-dismissible fade show mt-5" role="alert">
            <i className="fa-solid fa-paper-plane text-success"></i> <b>Message envoyé</b>, nous vous répondrons dans les plus brefs délais !
            <button type="button" onClick={resetConfirmButton} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          }

          <div className="bottom-margin"></div>
        </div>
      </div>
    </>
  )
}

export default SuggestForm;