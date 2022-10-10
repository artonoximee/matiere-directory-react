import React, {useState, useContext} from "react";
import {useForm} from "react-hook-form";
import {ThemeContext} from "../context/themeContext"

function SuggestForm(props) {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [confirmSent, setConfirmSent] = useState(false)
  const {theme} = useContext(ThemeContext)

  function onSubmit(data) {
    base('messages').create([
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
    setConfirmSent(true)
  }

  function resetConfirmButton() {
    setConfirmSent(false)
  }

  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <label htmlFor="name" className="form-label mt-3"><i className="fa-solid fa-user text-success"></i> Votre nom</label>
          <input 
            type="text"
            id="name"
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.name && "is-invalid border-danger"}`}
            placeholder="Marcel Dupont"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-danger mt-2">Il semblerait que vous n'ayez pas renseigné de nom</p>}

          <label htmlFor="name" className="form-label mt-3"><i className="fa-solid fa-envelope text-success"></i> Votre email</label>
          <input 
            type="email"
            id="name"
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.email && "is-invalid border-danger"}`}
            placeholder="marceldupont@gmail.com"
            {...register("email", { required: true, pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i })}
          />
          {errors.email && <p className="text-danger mt-2">Adresse email invalide, merci de la vérifier</p>}

          <label htmlFor="message" className="form-label mt-3"><i className="fa-solid fa-file-lines text-success"></i> Votre message</label>
          <textarea 
            type="text"
            id="message"
            rows="5"
            className={`form-control form-control-lg bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"} ${errors.message && "is-invalid border-danger"}`}
            placeholder="Votre message ici !"
            {...register("message", { required: true })}
          />
          {errors.message && <p className="text-danger mt-2">Il serait préférable d'ajouter un petit message, non ?</p>}

          <div className="d-grid gap-2">
            <button className={`btn btn-lg mt-5 ${theme === "dark" ? "btn-outline-success" : "btn-success"}`} onClick={handleSubmit(onSubmit)} type="submit">Envoyer</button>
          </div>

          {confirmSent && 
          <div className="alert alert-success alert-dismissible fade show mt-5" role="alert">
            <i className="fa-solid fa-paper-plane text-success"></i> <b>Message envoyé</b>, nous vous répondrons dans les plus brefs délais !
            <button type="button" onClick={resetConfirmButton} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          }

          <div className=" bottom-margin"></div>
        </div>
      </div>
    </>
  )
}

export default SuggestForm;