import React from "react"

function Form(props) {
  const departments = props.departments;

  const optionsDpt = departments.map(dpt => 
    <option key={dpt.id} value={dpt.id}>{dpt.num} - {dpt.name}</option>
  )

  return (
    <div className="form">
      <select id="department" className="form-select form-select-lg mb-3">
        <option value="ALL">Tous les départements</option>
        {optionsDpt}
      </select>
    </div>
  )
}

export default Form;