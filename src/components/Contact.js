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
  )

  const [formErrors, setFormErrors] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  )

  function validateField(name, value) {
    switch(name) {
      case 'name':
        const nameValid = value.length < 100;
        nameValid ? setFormErrors(prev => ({...prev, name: ''})) : setFormErrors(prev => ({...prev, name: "is too long"}))
        break;
      case 'email':
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        emailValid ? setFormErrors(prev => ({...prev, email: ''})) : setFormErrors(prev => ({...prev, email: "is invalid"}))
        break;
      case 'message':
        const messageValid = value.length < 1000;
        messageValid ? setFormErrors(prev => ({...prev, message: ''})) : setFormErrors(prev => ({...prev, email: "is too long"}))
        break;
      default:
        break;
    }
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
      />
    </>
  )
}

export default Contact;