import React, { useState } from "react";

function Inputitem(props) {
  const [isdone, setisdone] = useState(false);
  function handclick() {
    setisdone((prevvalue) => {
      return !prevvalue;
    });
  }
  return (
    <div onClick={handclick}>
      <li style={{ textDecoration: isdone ? "line-through" : "none" }}>
        {props.txt}
      </li>
    </div>
  );
}

export default Inputitem;
