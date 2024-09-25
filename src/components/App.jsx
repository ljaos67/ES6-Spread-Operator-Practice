import React, { useState } from "react";

function App() {
  const [arr, addArr] = useState([]);
  const [item, addItem] = useState("");

  function updateItem(event) {
    const val = event.target.value;
    addItem(val);
  }

  function appendArr() {
    //const { name, value } = event.target;
    addArr([...arr, item]);
    addItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateItem} type="text" name="item" value={item} />
        <button onClick={appendArr}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
