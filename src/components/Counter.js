import React from 'react';

function Counter(props) {
  const count = props.count
  
  return (
    <div className="text-bg-dark text-center mt-1">
      <h6>
        <b className="text-success">{count}</b> {count > 1 ? "résultats" : "résultat"}
      </h6>
    </div>
  )
}

export default Counter;