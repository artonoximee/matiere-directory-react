import React, {useState} from "react";

import ContactHeader from "./ContactHeader"
import ContactForm from "./ContactForm"

function Contact() {
  // initializing airtable and states
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);
  
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  );

  const [formErrors, setFormErrors] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  );

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(true);
  const [formValid, setFormValid] = useState(false)

  function validateField(name, value) {
    let tempFormErrors = formErrors;
    let tempNameValid = nameValid;
    let tempEmailValid = emailValid;
    let tempMessageValid = messageValid;


    switch(name) {
      case 'name':
        const tempNameValid = value.length < 100;
        tempFormErrors.name = tempNameValid ? '' : ' is too long';
        break;
      case 'email':
        const tempEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        tempFormErrors.email = tempEmailValid ? '' : ' is invalid';
        break;
      case 'message':
        const tempMessageValid = value.length < 1000;
        tempFormErrors.email = tempMessageValid ? '' : ' is too long';
        break;
      default:
        break;
    }
    setFormErrors(tempFormErrors)
    setNameValid(tempNameValid)
    setEmailValid(tempEmailValid)
    setMessageValid(tempMessageValid)
    validateForm()
  }

  function validateForm() {
    setFormValid(nameValid && emailValid && messageValid)
  }

  function onFocusOut(e) {
    const {name, value} = e.target;
    validateField(name, value)
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit() {
    base('contacts').create([
      {
        "fields": {
          "name": formData.name,
          "email": formData.email,
          "message": formData.message
        }
      }
    ], function(err, records) {
      if (err) {
        return;
      }
      setFormData(
        {
          name: "",
          email: "",
          message: ""
        }
      )
    });
  }


  return (
    <>
      <ContactHeader />
      <ContactForm 
        formData={formData} 
        handleChange={(e) => handleChange(e)}
        handleSubmit={handleSubmit}
        onFocusOut={(e) => onFocusOut(e)}
        disableSubmit={formValid}
      />
    </>
  )
}

export default Contact;