import React, { useState } from "react";
import Inputitem from "./Inputitem";

function App() {
  const [inputtext, setinputtext] = useState("");
  const [inputitems, setinputitem] = useState([]);

  function handelchage(event) {
    const newvalue = event.target.value;
    setinputtext(newvalue);
  }
  function additem() {
    setinputitem((previtem) => {
      return [...previtem, inputtext];
    });
    setinputtext("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handelchage} type="text" value={inputtext} />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {inputitems.map((inputitem) => (
            <Inputitem txt={inputitem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
