import React from "react";

function ListItem(props) {

    function handleClick() {
       

    }
    return (
        <div onClick={handleClick}>
            <li>{props.text}</li>
        </div>
    );
}

export default ListItem;