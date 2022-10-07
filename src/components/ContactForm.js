import React from "react";

function SuggestForm(props) {
  const {name, email, message} = props.formData

  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <label htmlFor="name" className="form-label"><i className="fa-solid fa-user text-success"></i> Votre nom</label>
          <input 
            type="text"
            id="name"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="Marcel Dupont"
            value={name}
            name="name"
            onChange={props.handleChange}
            onBlur={props.onFocusOut}
          />
          <label htmlFor="name" className="form-label"><i className="fa-solid fa-envelope text-success"></i> Votre email</label>
          <input 
            type="text"
            id="name"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="marceldupont@gmail.com"
            value={email}
            name="email"
            onChange={props.handleChange}
            onBlur={props.onFocusOut}
          />
          <label htmlFor="message" className="form-label"><i className="fa-solid fa-file-lines text-success"></i> Votre message</label>
          <textarea 
            type="text"
            id="message"
            rows="5"
            className="form-control form-control-lg mb-5 bg-dark border-secondary text-light"
            placeholder="Votre message ici !"
            value={message}
            name="message"
            onChange={props.handleChange}
            onBlur={props.onFocusOut}
          />

          <div className="d-grid gap-2 mb-5 bottom-margin">
            <button className="btn btn-lg btn-outline-success" onClick={props.handleSubmit} type="submit">Envoyer</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuggestForm;