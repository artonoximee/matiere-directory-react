import React from "react"

function Form(props) {
  const departments = props.departments;
  const types = props.types;

  const optionsDpt = departments.map(dpt => 
    <option key={dpt.id} value={dpt.id}>{dpt.num} - {dpt.name}</option>
  )

  const optionsTypes = types.map(type => 
    <option key={type.id} value={type.id}>{type.name}</option>
  )

  return (
    <div className="form">
      <select id="department" className="form-select form-select-lg mb-3">
        <option value="ALL">Tous les départements</option>
        {optionsDpt}
      </select>
      <select id="type" className="form-select form-select-lg mb-3">
        <option value="ALL">Tous les types de structure</option>
        {optionsTypes}
      </select>
    </div>
  )
}

export default Form;