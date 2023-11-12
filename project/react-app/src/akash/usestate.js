import React, { useState } from "react";

function Use (){
      let initialArrayItem = [
        {
          id: 0,
          name: 'Ankit'
        }
      ]
    
      const [items, setItems] = useState(initialArrayItem);
    
      const addItem = () => {
        let data = [...items];
    
        let anotherName = {
          id: 1,
          name: 'Gorakh'
        }
        data.push(anotherName)
       
        setItems(data)
      }  
      return (
        <div>
          <button onClick={addItem}>Add A Number</button> 
           
           {items.map((item) => {
            return (
              <div>
                {item.id} . Your Name is: {item.name}
              </div>
            )
          })}
        </div>
      )
}
export default Use