import React from 'react';
import './Loader.css'

function Loader(props) {
  const allStructuresCount = props.structuresCount;
  const filteredStructuresCount = props.filteredStructures.length;

  // display a loader if the app is waiting for the API return
  const loader = <div className="loader"></div>

  // display a message if no structure matches the search query
  const noResults = 
  <span className="text-center text-light">
    <h1><i class="fa-solid fa-face-meh-blank text-secondary"></i></h1>
    <h3>Uh oh, il semblerait qu'aucun résultat ne corresponde à votre recherche</h3>
  </span>

  console.log(allStructuresCount, filteredStructuresCount)
  return (
    <div className="loader-container">
      {allStructuresCount ? noResults : loader}
    </div>
  )
}

export default Loader;