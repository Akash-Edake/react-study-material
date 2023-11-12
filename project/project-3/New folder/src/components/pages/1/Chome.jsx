import axios from "axios";
import React, { useState, useEffect } from "react";

function Chome() {
  const [Json, setJson] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/product")
      .then((resolve) => {setJson(resolve.data); })
      .catch((error) => console.log("some ting is error", error));
  }, []);

  const PostData = (title, img, color, gender, price) => {
    axios.post("http://localhost:3003/Postdata", {title,color,img,gender,price,});
  };

  return (
    <>
      {Json.map((item, index) => {
        const { title, img, color, gender, price } = item;
        return (
          <div key={index}>
            <span >{title}</span>
            <button onClick={() => PostData(title, img, color, gender, price)}> addtocard  </button>
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}

export default Chome;
