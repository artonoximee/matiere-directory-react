/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from "react";
import {useForm} from "react-hook-form";
import {ThemeContext} from "../context/themeContext"

function SuggestForm() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [departments, setDepartments] = useState([]);
  const [types, setTypes] = useState([]);
  const [confirmSent, setConfirmSent] = useState(false)
  const {theme} = useContext(ThemeContext)

  // Async function to fetch departments
  const fetchDepartments = async () => {
    const records = await base('departments').select({
      sort: [{field: "num", direction: "asc"}]
    }).all();
    const fetchedDepartments = [];
    for (const record of records) {
      const rec = {
        id: record.id,
        num: record.get('num'),
        name: record.get('name')
      }
      if (fetchedDepartments.some(r => r.id === rec.id)) {
      } else {
        fetchedDepartments.push(rec)
        setDepartments(fetchedDepartments);
      }
    }
  }

  // Async function to fetch types
  const fetchTypes = async () => {
    const records = await base('structure_types').select({
      sort: [{field: "name", direction: "asc"}]
    }).all();
    const fetchedTypes = [];
    for (const record of records) {
      const rec = {
        id: record.id, 
        name: record.get('name')
      }
      if (fetchedTypes.some(r => r.id === rec.id)) {
      } else {
        fetchedTypes.push(rec)
        setTypes(fetchedTypes);
      }
    }
  }

  useEffect(() => {
    fetchDepartments();
    fetchTypes();
  }, []);

  const optionsDpt = departments.map(dpt => 
    <option key={dpt.id} value={dpt.id}>{dpt.num} - {dpt.name}</option>
  )

  const optionsTypes = types.map(type => 
    <option key={type.id} value={type.id}>{type.name}</option>
  )
  
  function onSubmit(data) {
    base('structures').create([
      {
        "fields": {
          "name": data.name,
          "publish": false,
          "description": data.description,
          "structure_types": [
            data.structure_type
          ],
          "address": data.address,
          "postcode": data.postcode,
          "departments": [
            data.department
          ],
          "city": data.city,
          "country": "France",
          "telephone": data.telephone,
          "email": data.email,
          "website": data.website,
          "facebook_url": data.facebook_url,
          "twitter_url": data.twitter_url,
          "instagram_url": data.instagram_url,
        }
      }
    ], function(err, records) {
      if (err) {
        return;
      }
    });
    reset( {
      name: '',
      description: '',
      structure_type: '',
      address: '',
      postcode: '',
      department: '',
      city: '',
      telephone: '',
      email: '',
      website: '',
      facebook_url: '',
      twitter_url: '',
      instagram_url: ''
    })
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
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.name && "is-invalid border-danger"}`}
            placeholder="Bureau R??emploi"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-danger mt-2">Merci de renseigner le nom de la structure</p>}

          <label htmlFor="description" className="form-label mt-3">Description de la structure</label>
          <textarea 
            type="text"
            id="description"
            rows="5"
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.description && "is-invalid border-danger"}`}
            placeholder="Entrez ici une description qui permettra de comprendre les services propos??s par la structure"
            {...register("description", { required: true })}
          />
          {errors.description && <p className="text-danger mt-2">Merci de renseigner la description de la structure</p>}

          <label htmlFor="type" className="form-label mt-3">Type de structure</label>
          <select 
            id="type" 
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.structure_type && "is-invalid border-danger"}`} 
            {...register("structure_type", { required: true })}
          >
            <option value="">Choisir le type de structure</option>
            {optionsTypes}
          </select>
          {errors.structure_type && <p className="text-danger mt-2">Merci de renseigner le type de la structure</p>}

          <label htmlFor="address" className="form-label mt-5"><i className="fa-solid fa-location-dot text-success"></i> Adresse (num??ro et rue)</label>
          <input 
            type="text" 
            id="address"
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"}`}
            placeholder="1 Rue de l'H??tel de Ville"
            {...register("address")}
          />
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <label htmlFor="address" className="form-label mt-3">Code postal</label>
              <input
                type="text"
                id="address"
                className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.postcode && "is-invalid border-danger"}`}
                placeholder="12345"
                {...register("postcode", { pattern: /\d{5}/g })}
              />
              {errors.postcode && <p className="text-danger mt-2">Le format du code postal semble incorrect</p>}
            </div>
            <div className="col-lg-6 col-md-12">
              <label htmlFor="department" className="form-label mt-3">D??partement</label>
              <select 
                id="department" 
                className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.department && "is-invalid border-danger"}`}
                {...register("department", { required: true })}
              >
                <option value="">Choisir le d??partement</option>
                {optionsDpt}
              </select>
              {errors.department && <p className="text-danger mt-2">Merci de renseigner le d??partement</p>}
            </div>
          </div>

          <label htmlFor="city" className="form-label mt-3">Ville</label>
          <input 
            type="text" 
            id="city"
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.city && "is-invalid border-danger"}`}
            placeholder="Nom de la localit??"
            {...register("city", { required: true })}
          />
          {errors.city && <p className="text-danger mt-2">Merci de renseigner la ville o?? se situe la structure</p>}

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <label htmlFor="email" className="form-label mt-5"><i className="fa-solid fa-envelope text-success"></i> Email</label>
              <input 
                type="email" 
                id="email"
                className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.email && "is-invalid border-danger"}`}
                placeholder="nom@domaine.com"
                {...register("email", { pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
              />
              {errors.email && <p className="text-danger mt-2">L'adresse email semble incorrecte</p>}
            </div>
            <div className="col-lg-6 col-md-12">
              <label htmlFor="telephone" className="form-label mt-lg-5 mt-3"><i className="fa-solid fa-phone text-success"></i> T??l??phone</label>
              <input 
                type="text" 
                id="telephone"
                className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.telephone && "is-invalid border-danger"}`}
                placeholder="0123456789"
                {...register("telephone", { pattern: /\d{10}/g })}
              />
              {errors.telephone && <p className="text-danger mt-2">Le format du t??l??phone semble incorrect</p>}
            </div>
          </div>

          <label htmlFor="website" className="form-label mt-3"><i className="fa-solid fa-link text-success"></i> Site web</label>
          <input 
            type="text" 
            id="website"
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.website && "is-invalid border-danger"}`}
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
                className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"}`}
                placeholder="https://www.facebook.com/username"
                {...register("facebook_url")}
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <label htmlFor="twitter" className="form-label mt-3"><i className="fa-brands fa-twitter text-success"></i> Twitter</label>
              <input 
                type="text" 
                id="twitter"
                className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"}`}
                placeholder="https://twitter.com/username"
                {...register("twitter_url")}
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <label htmlFor="instagram" className="form-label mt-3"><i className="fa-brands fa-instagram text-success"></i> Instagram</label>
              <input 
                type="text" 
                id="instagram"
                className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"}`}
                placeholder="https://www.instagram.com/username"
                {...register("instagram_url")}
              />
            </div>
          </div>

          <div className="d-grid gap-2">
            <button className={`btn btn-lg mt-5 ${theme === "dark" ? "btn-outline-success" : "btn-success"}`} onClick={handleSubmit(onSubmit)} type="submit">Envoyer</button>
          </div>

          {confirmSent && 
          <div className="alert alert-success alert-dismissible fade show mt-5" role="alert">
            <i className="fa-solid fa-paper-plane text-success"></i> <b>Proposition envoy??e</b>, nous la traiterons dans les plus brefs d??lais !
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