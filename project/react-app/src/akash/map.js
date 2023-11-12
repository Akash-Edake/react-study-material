import React, { useState } from "react";

function Maplist () {
  let array1 = [];

  const [new1, setnew1] = useState(array1);

  const arraylist = () => {
    const arraay2 = [...new1];
    let obj1 = {
      id: 1,
      name: "react"
    };
    arraay2.push(obj1);
    setnew1(arraay2);
  };

  return (
    <div>  
      <button onClick={arraylist}>click</button>
      {new1.map((item) => {
        return (
          <div>
           {item.id}. {item.name}
          </div>
        );
      })}
    </div>
  );
};
export default Maplist;
