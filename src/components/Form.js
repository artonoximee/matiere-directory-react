import React from "react"

function Form(props) {
  const departments = props.departments;

  const optionsDpt = departments.map(dpt => <li key={dpt.id}>{dpt.num} - {dpt.name}</li>)

  return (
    <div className="form">
      <ul>{optionsDpt}</ul>
      
    </div>
  )
}

export default Form;