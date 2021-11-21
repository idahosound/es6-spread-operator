import React, { useState } from "react";

function App() {

  const items = [
    { Id: 1, text: "item 1" },
    { Id: 2, text: "item 2" },
    { Id: 3, text: "item 3" }];

  var itemCount=items.length;

  const listItems = items.map((item) =>
    <li key={item.Id}>{item.text}</li>);

  const [toDoItem, setToDoItem] = useState("");

  function handleChange(event) {
    const newItem = event.target.value;
    setToDoItem(newItem);
  }

  function handleClick(event){

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={toDoItem} type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
