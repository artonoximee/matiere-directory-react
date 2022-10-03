import React from "react"

function Form(props) {
  const departments = props.departments;

  const optionsDpt = departments.map(dpt => <p>{dpt}</p>)

  return (
    <div className="form">
      {optionsDpt}
    </div>
  )
}

export default Form;