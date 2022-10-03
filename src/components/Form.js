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
        <div className="col-12">
          <select 
            id="department" 
            className="form-select form-select-lg mb-3 bg-dark border-secondary text-light" 
            value={department}
            name="department"
            onChange={props.handleChange}
          >
            <option value="ALL">Tous les départements</option>
            {optionsDpt}
          </select>
        </div>
        <div className="col-12">
          <select 
            id="type" 
            className="form-select form-select-lg mb-3 bg-dark border-secondary text-light"
            value={type}
            name="type"
            onChange={props.handleChange}
          >
            <option value="ALL">Tous les types de structure</option>
            {optionsTypes}
          </select>
        </div>
      </div>
    </>
  )
}

export default Form;