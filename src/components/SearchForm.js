import React, {useContext} from "react";
import {ThemeContext} from "../context/themeContext"

function SearchForm(props) {
  const {theme} = useContext(ThemeContext)
  
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
      <div className="row justify-content-center mt-4">
        <div className="col-12">
          <input 
            type="text" 
            className={`form-control form-control-lg mb-3 bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"}`}
            placeholder="Rechercher par nom"
            value={text}
            name="text"
            onChange={props.handleChange}
          />
          <select 
            id="department" 
            className={`form-control form-control-lg mb-3 bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"}`}
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
            className={`form-control form-control-lg mb-3 bg-${theme} border-secondary text-${theme === "dark" ? "light" : "dark"}`}
            value={type}
            name="type"
            onChange={props.handleChange}
          >
            <option value="ALL">Tous les types de structures</option>
            {optionsTypes}
          </select>
        </div>
      </div>
    </>
  )
}

export default SearchForm;