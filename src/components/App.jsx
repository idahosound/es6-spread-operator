import React, {useState} from "react";

function App() {

  const items = ["item1", "item2", "item3"];
  const listItems = items.map((item) =>
    <li>{item}</li>);

  const [toDoItem, setToDoItem] = useState("");

  function handleChange(event){
    const newItem = event.target.value
    setToDoItem(newItem);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange = {handleChange} value={toDoItem} type="text" />
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
