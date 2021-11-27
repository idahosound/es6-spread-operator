import React from "react";

function ListItem(props) { 

    return (
        <div onClick={()=>{
            props.onChecked(props.Id)
        }}>
            <li>{props.text}</li>
        </div>
    );
}

export default ListItem;