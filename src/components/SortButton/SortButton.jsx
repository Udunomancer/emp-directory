import React from "react";

function SortButton(props) {
    return (
        <button 
          className={`btn p-1 fas fa-angle-${props.value}`} 
          id={props.id} 
          value={props.value} 
          onClick={props.action}>
        </button>
    )
}

export default SortButton;