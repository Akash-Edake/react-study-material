import React,{useReducer} from "react";
const first = (set, action) => {
  switch (action) {
    case "increament":
      return set + 1;
    case "decreament":
      return set - 1;
    case "reset":
      return 0;
    default:
      return set;
  }
};

function SimpleReducer() {
    
  const [state, dispatch] = useReducer(first, 12);
  return (<div>
    {state}
    <button onClick={()=>dispatch("increament")}>increament</button>
    <button onClick={()=>dispatch("decreament")}>Decreament</button>
    <button onClick={()=>dispatch("reset")}>reset</button>
    

  </div>)
}

export default SimpleReducer;
