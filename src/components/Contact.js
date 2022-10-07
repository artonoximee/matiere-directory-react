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
      />
    </>
  )
}

export default Contact;