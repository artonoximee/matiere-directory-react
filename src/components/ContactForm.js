import React from "react";
import {useForm} from "react-hook-form";

function SuggestForm(props) {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  function onSubmit(data) {
    base('contacts').create([
      {
        "fields": {
          "name": data.name,
          "email": data.email,
          "message": data.message
        }
      }
    ], function(err, records) {
      if (err) {
        return;
      }
    });
    reset( {
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <label htmlFor="name" className="form-label mt-3"><i className="fa-solid fa-user text-success"></i> Votre nom</label>
          <input 
            type="text"
            id="name"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.name && "is-invalid border-danger"}`}
            placeholder="Marcel Dupont"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-danger mt-2">Il semblerait que vous n'ayez pas renseigné de nom</p>}

          <label htmlFor="name" className="form-label mt-3"><i className="fa-solid fa-envelope text-success"></i> Votre email</label>
          <input 
            type="email"
            id="name"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.email && "is-invalid border-danger"}`}
            placeholder="marceldupont@gmail.com"
            {...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
          />
          {errors.email && <p className="text-danger mt-2">Adresse email invalide, merci de la vérifier</p>}

          <label htmlFor="message" className="form-label mt-3"><i className="fa-solid fa-file-lines text-success"></i> Votre message</label>
          <textarea 
            type="text"
            id="message"
            rows="5"
            className={`form-control form-control-lg bg-dark border-secondary text-light ${errors.message && "is-invalid border-danger"}`}
            placeholder="Votre message ici !"
            {...register("message", { required: true })}
          />
          {errors.message && <p className="text-danger mt-2">Il serait préférable d'ajouter un petit message, non ?</p>}

          <div className="d-grid gap-2 mt-5 bottom-margin">
            <button className="btn btn-lg btn-outline-success" onClick={handleSubmit(onSubmit)} type="submit">Envoyer</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuggestForm;