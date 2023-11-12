import React, { useState, useEffect } from "react";
import axios from "axios";

function Getfetch() {
  const [first, setfirst] = useState([]);
  useEffect(() => {
    fun();
  }, []);

  const fun = async () => {
    const a = await axios.get("https://jsonplaceholder.typicode.com/users");
    setfirst(a.data);
  };
  const fun2 = async () => {
    await axios.delete("https://jsonplaceholder.typicode.com/users/1");
    fun()
  };
  return (
    <>
    <button onClick={()=>fun2()}>delete</button>
      {first.map((value) => {
        return <h2>{value.name}</h2>;
      })}
    </>
  );
}

export default Getfetch;
