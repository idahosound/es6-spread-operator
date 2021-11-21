import React from "react";

function App() {

  const items = ["item1", "item2", "item3"];
  const listItems = items.map((item) =>
    <li>{item}</li>);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" />
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
