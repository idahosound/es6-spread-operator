import React from "react";

function ListItem (props){
    return <li key={props.key}>{props.text}</li>
}

export default ListItem;

