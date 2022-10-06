import React from 'react';
import Structure from './Structure';
import Loader from './Loader';


function Structures(props) {
  const filteredStructures = props.filteredStructures;
  const structuresCount = props.structuresCount;

  // display the structures by calling the Structure component for each structure
  const displayStructures = filteredStructures.map(structure => {
    return structure.publish && <Structure key={structure.id} structure={structure} />
  })

  return(
    <>
    {
      displayStructures.length > 0 ? 
      displayStructures : 
      <Loader structuresCount={structuresCount} />
    }
    </>
  )
}

export default Structures;