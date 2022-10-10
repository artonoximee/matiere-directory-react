import React, {useContext} from "react";
import {ThemeContext} from "../context/themeContext"

import "./Loader.css";

function Loader(props) {
  const {theme} = useContext(ThemeContext)
  const allStructuresCount = props.structuresCount;

  // display a loader if the app is waiting for the API return
  const loader = <div className={`loader-${theme}`}></div>

  // display a message if no structure matches the search query
  const noResults = 
  <span className="text-center text-light">
    <h1><i class="fa-solid fa-face-meh-blank text-success"></i></h1>
    <h3>Uh oh, il semblerait qu'aucun résultat ne corresponde à votre recherche</h3>
  </span>

  return (
    <div className="loader-container">
      {allStructuresCount ? noResults : loader}
    </div>
  )
}

export default Loader;