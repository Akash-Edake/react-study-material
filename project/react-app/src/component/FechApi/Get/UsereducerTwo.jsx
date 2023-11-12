import React, { useReducer } from "react";

const fourth = {
  mango: 0,
  banana: 6,
  Apple: 0,
};
const third = (set, action) => {
  switch (action.type) {
    case "increament":
      return { ...set, mango: set.mango + action.value };
    case "decreament":
      return { ...set, mango: set.mango - action.value };
    case "reset":
      return { ...set, mango: set.mango * action.value };
    case "increament1":
      return { ...set, banana: set.banana + action.value };
    case "decreament1":
      return { ...set, banana: set.banana - action.value };
    case "reset1":
      return { ...set, banana: set.banana * action.value };
    case "increament2":
      return { ...set, Apple: set.Apple + action.value };
    case "decreament2":
      return { ...set, Apple: set.Apple - action.value };
    case "reset2":
      return { ...set, Apple: set.Apple * action.value };
    default:
      return set;
  }
};

function UsereducerTwo() {
  const [first, second] = useReducer(third, fourth);

  return (
    <div>
      <h1>Mango</h1>
      <h2>{first.mango} Kg</h2>
      <h2>Total Rate: {first.mango * 60}</h2>
      <button onClick={() => second({ type: "increament", value: 1 })}>
        +
      </button>
      <button onClick={() => second({ type: "decreament", value: 1 })}>
        -
      </button>
      <button onClick={() => second({ type: "reset", value: 0 })}>reset</button>
      <br />
      <h1>Banana</h1>
      <h2>{first.banana} NOS</h2>
      <h2>Total Rate: {first.banana * 2}</h2>
      <button onClick={() => second({ type: "increament1", value: 6 })}>
        +
      </button>
      <button onClick={() => second({ type: "decreament1", value: 6 })}>
        -
      </button>
      <button onClick={() => second({ type: "reset1", value: 0 })}>
        reset
      </button>
      <br />
      <h1>Apple</h1>
      <h2>{first.Apple} Kg</h2>
      <h2>Total Rate: {first.Apple * 80}</h2>
      <button onClick={() => second({ type: "increament2", value: 1 })}>
        +
      </button>
      <button onClick={() => second({ type: "decreament2", value: 1 })}>
        -
      </button>
      <button onClick={() => second({ type: "reset2", value: 0 })}>
        reset
      </button>
      <br />

      <h1>
        {" "}
        total Amount: {first.mango * 60 +
          first.banana * 2 +
          first.Apple * 80}{" "}
      </h1>
    </div>
  );
}

export default UsereducerTwo;
