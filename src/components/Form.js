import React from "react"

function Form(props) {
  const departments = props.departments;
  const types = props.types;

  const { department, type, text } = props.formData;

  const optionsDpt = departments.map(dpt => 
    <option key={dpt.id} value={dpt.id}>{dpt.num} - {dpt.name}</option>
  )

  const optionsTypes = types.map(type => 
    <option key={type.id} value={type.id}>{type.name}</option>
  )

  return (
    <>
      <div className="row mt-5 justify-content-center">
        <div className="col-lg-4 col-md-12">
          <select 
            id="department" 
            className="form-select form-select-lg mb-3" 
            value={department}
            name="department"
            onChange={props.handleChange}
          >
            <option value="ALL">Tous les départements</option>
            {optionsDpt}
          </select>
        </div>
        <div className="col-lg-4 col-md-12">
          <select id="type" className="form-select form-select-lg mb-3">
            <option value="ALL">Tous les types de structure</option>
            {optionsTypes}
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-lg-8 col-md-12">
          <div className="d-grid gap-2">
            <button className="btn btn-lg btn-secondary" type="submit">Rechercher</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form;