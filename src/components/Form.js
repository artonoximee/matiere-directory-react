import React from "react"

function Form(props) {
  const departments = props.departments;

  const optionsDpt = departments.map(dpt => 
    <p key={dpt.id} value={dpt.id}>{dpt.num} - {dpt.name}</p>
  )

  return (
    <div className="form">
      <select id="department" class="form-select form-select-lg mb-3">
        <option value="ALL">Tous les départements</option>
      </select>
        {optionsDpt}
    </div>
  )
}

export default Form;