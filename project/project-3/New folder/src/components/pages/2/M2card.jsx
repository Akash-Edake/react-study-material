import axios from "axios";
import React from "react";

function M2card(props) {
  const Postdata = () => {
    const {id,title,color,img,gender,price}=props.data
    let Payload = {
      title: title,
      color: color,
      img: img,
      gender: gender,
      price: price
    };
    axios.post("http://localhost:3003/Postdata",Payload)
   
  };
  return (
    <>
      <div key={props.data.id}>
      <h1>{props.data.title}</h1>
      <button onClick={()=>Postdata()}>postdata</button>
      </div>
    </>
  );
}

export default M2card;
