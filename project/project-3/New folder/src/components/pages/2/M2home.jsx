import axios from "axios";
import React, { useState, useEffect } from "react";
import M2card from "./M2card";

function M2home() {
  const [Json, setJson] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/product")
      .then((resolve) => {
        setJson(resolve.data);
      })
      .catch((error) => console.log("some ting is error", error));
  }, []);

  return (
    <>
      {Json.map((item, index) => {
        return <M2card data={item} key={index}/>;
      })}
    </>
  );
}

export default M2home;
