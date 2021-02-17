import React from "react";

function SortButton(props) {
    return (
        <button className="btn p-1" id={props.id} value={props.value} onClick={props.action}>
            <i className={`fas fa-angle-${props.value}`}></i>
        </button>
    )
}

export default SortButton;