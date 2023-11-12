import axios from 'axios';
import React, { useEffect, useState } from 'react'

function M2addcard() {   
    const [Json, setJson] = useState([]);
    const [count, setcount] = useState(0);
    useEffect(() => {
      axios.get("http://localhost:3003/Postdata")
        .then((resolve) => {
          setJson(resolve.data);
        })
        .catch((error) => console.log("some ting is error", error));
    }, []);
  
    return (
      <>
        {Json.map((item, index) => {
            const {id,title,color,img,gender,price}=item
          return (
<div key={index}>
<img src={img} alt="" />
<div>{color}</div>
<div>{price*count}</div>
<button onClick={()=>setcount(count-1)}>-</button>
<span>{count}</span>
<button onClick={()=>setcount(count+1)}>+</button>
</div>
          )
        })}
      </>
    );
}

export default M2addcard