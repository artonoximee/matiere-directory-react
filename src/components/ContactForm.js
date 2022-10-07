import React from "react";

function SuggestForm(props) {
  const {name, email, message} = props.formData

  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <label for="name" className="form-label"><i class="fa-solid fa-user text-success"></i> Votre nom</label>
          <input 
            type="text"
            id="name"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="Marcel Dupont"
            value={name}
            name="name"
            onChange={props.handleChange}
          />
          <label for="name" className="form-label"><i class="fa-solid fa-envelope text-success"></i> Votre email</label>
          <input 
            type="text"
            id="name"
            className="form-control form-control-lg mb-3 bg-dark border-secondary text-light"
            placeholder="marceldupont@gmail.com"
            value={email}
            name="email"
            onChange={props.handleChange}
          />
          <label for="message" className="form-label"><i class="fa-solid fa-file-lines text-success"></i> Votre message</label>
          <textarea 
            type="text"
            id="message"
            rows="5"
            className="form-control form-control-lg mb-5 bg-dark border-secondary text-light"
            placeholder="Votre message ici !"
            value={message}
            name="message"
            onChange={props.handleChange}
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