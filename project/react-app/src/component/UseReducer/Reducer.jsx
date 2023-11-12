import React, { useReducer } from "react";

const first = (set, action) => {
  switch (action) {
    case "increament":
      return (set + 1);
    case "Decreament":
      return (set - 1);

    default:
      return (set =0);
  }
};

function Reducer() {
  let second = 0;
  const [state, dispatch] = useReducer(first, second);

  return (
    <div>
      <div> {state} </div>
      <button onClick={() => dispatch("increament")}>increament</button>
      <button onClick={() => dispatch("Decreament")}>Decreament</button>
    </div>
  );
}

export default Reducer;
