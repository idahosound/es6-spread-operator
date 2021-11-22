import React, { useState } from "react";
import ListItem from "./ToDoItem";

function App() {

  const [listItems, setListItems] = useState([]);
  const [toDoItem, setToDoItem] = useState("");

  function handleChange(event) {
    const newItem = event.target.value;
    setToDoItem(newItem);
  }

  function handleClick() {
    const itemCount = listItems.length;
    setListItems( (prevItems) => [...prevItems, {key: itemCount, text: toDoItem}] );
    setToDoItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={toDoItem} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map({item} => <ListItem /> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
