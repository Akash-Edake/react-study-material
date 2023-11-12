import axios from 'axios'
import React,{useState, useEffect} from 'react'

function Addcard() {
    const [Json, setJson] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3003/Postdata")
        .then((resolve)=> setJson(resolve.data))
        .catch((error)=>console.warn(error))
    },[])

    const deletebtn =(id)=>{
        axios.delete(`http://localhost:3003/Postdata/${id}`)
    }
  return (
    <>
   {
    Json.length ==0 && <h1>no item add</h1>
   }
   <h1>total item :  {Json.length}</h1>
    <div style={{display:'flex' }}>
    {
        Json.map((item,index)=>{
            const {title,color,img,gender,price,id}=item
            return(
                <div key={index} style={{border:'1px solid', width:'350px', margin:'20px'}}>
                <div>{title} </div>
                <img src={img} style={{width:'300px',height:'200px', objectFit:'cover'}} alt="" />
                
                <button onClick={()=>deletebtn(id)}>DELETE</button>
            </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Addcard