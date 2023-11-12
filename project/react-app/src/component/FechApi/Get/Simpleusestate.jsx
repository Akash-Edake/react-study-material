import React, { useState } from 'react'

function Simpleusestate() {
    const [first, setfirst] = useState(0)

  return (
    <div>
        {first}
        <button onClick={()=>setfirst(first+1)}>Increase</button>
        <button onClick={()=>setfirst(first-1)}>Decrease</button>
        <button onClick={()=>setfirst(0)}>Reset</button>
    </div>
  )
}

export default Simpleusestate