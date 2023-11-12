import React, { useState, useReducer } from "react";

const first = (set, action) => {
  switch (action) {
    case "increament1":
      return set + 1;
    case "decreament1":
      return set - 1;
      case "increament2":
      return set + 2;
    case "decreament2":
      return set - 2;
    case "reset":
      return 0;
    default:
      return (set)
  }
};

function SimpleGet() {
  let second = 0;
  const [Count, setCount] = useReducer(first, second);
  // const [Count1,setCount1] = useState(0)

  return (
    <div>
      <h1>banana</h1>
      <h2>{Count}</h2>
      <button onClick={() => setCount("increament1")}>increament</button>
      <button onClick={() => setCount("decreament1")}>decrreament</button>
      <button onClick={() => setCount("increament2")}>increament2</button>
      <button onClick={() => setCount("decreament2")}>decrreament2</button>
      <button onClick={() => setCount("reset")}>reset</button>
      <button onClick={() => setCount("akash")}>akash</button>

      {/* <br />
        <h1>apple</h1>
        <h2>{Count1}</h2>
        <button onClick={()=>setCount1(Count1+2)}>increament</button>
        <button onClick={()=>setCount1(Count1-2)}>decrreament</button>
        <button onClick={()=>setCount1(0)}>reset</button> */}
    </div>
  );
}

export default SimpleGet;
