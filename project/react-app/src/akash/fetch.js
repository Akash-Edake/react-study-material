import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Record from './Record.json'

function Fetch() {
const [posts,setPosts] = useState([])
// const [id,setid]= useState(1)

useEffect(()=>{
 const value ={
  "postId": 1,
  "id": 1,
  "name": "id labore ex et quam laborum",
  "email": "akash@gardner.biz",
  "body": "dolor quam autem quasm"
};
axios.get(<Record/> )
    .then(resolve=>console.log(resolve))
    .catch(reject=>console.log(reject))
},[])

  return (
    <div>
     <ol>
     {
            Record.map(post => <li> {post.email}</li>)
       }
     </ol>
     {/* <input value={id} onChange={e=>setid(e.target.value)}></input>
     <div>Email Id : { posts.email}</div>
                */}
     
    </div>
  )
}

export default Fetch
