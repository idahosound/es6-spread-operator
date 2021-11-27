import React, { useState } from "react";
import ListItem from "./ToDoItem";

function App() {

  const [listItems, setListItems] = useState([]);
  const [toDoItem, setToDoItem] = useState("");
  const [idCount, setIdCount] = useState(0)

  function handleChange(event) {
    const newItem = event.target.value;
    setToDoItem(newItem);
  }

  function handleClick() {
    setIdCount(idCount + 1);
    setListItems((prevItems) => [...prevItems, { Id: idCount, text: toDoItem }]);
    setToDoItem("");
  }

  function deleteItem(thisOne){
    console.log("item clicked is " + thisOne);
    console.log(listItems);
    setListItems(prevItems=>{
      return prevItems.filter(
        (item, Id)=>{
          return Id !== thisOne;
        });
    });
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
          {listItems.map((item) => <ListItem key={item.Id} Id={item.Id} text={item.text} onChecked={deleteItem} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
