import { useEffect, useState } from "react"


const UseEffect=()=>{
    let initia =0;
const [add,setadd]= useState(initia)
const [sub,setsub]= useState(initia)

useEffect(()=>{
    const date = new Date()
    console.log('ur click addvalue Button on this Time',date)
},[add])


useEffect(()=>{
    const date = new Date()
    console.log('ur click subvalue Button on this Time',date)
},[sub])

return(
    <>
    {add}
    <button onClick={()=>setadd(add+1)}>addvalue</button>
    <button onClick={()=>setsub(sub+1)}>subvalue</button>
    </>
)
}
export default UseEffect