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
        if (nameValid) {
          console.log('Name is valid');
        } else {
          console.log('Name is too long');
        }
        break;
      case 'email':
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailValid) {
          console.log('Email is valid');
        } else {
          console.log('Invalid email');
        }
        break;
      case 'message':
          const messageValid = value.length < 1000;
          if (messageValid) {
            console.log('Message length is ok');
          } else {
            console.log('Message is too long');
          }
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