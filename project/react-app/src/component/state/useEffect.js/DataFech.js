import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFech() {
 const [items,setItems]= useState([])
const [id,setId]=useState(1)
 useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(resolve=>setItems(resolve.data))
     .catch(error=>setItems(error))
 },[id])

 return(
    <>
   {/* <ol>
   {
        items.map(item=><li>{item.title}</li>)
    }
   </ol> */}

   <input value={id} onChange={e=>setId(e.target.value)}></input>
   <div>{items.title}</div>
    </>
 )
}
export default DataFech