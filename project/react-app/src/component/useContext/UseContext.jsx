import React from 'react'
import ComponentA from './ComponentC'

export const export1 = React.createContext()
export const export2 = React.createContext()

function UseContext() {
  return (
    <div>
<export1.Provider value = "akash">
<export2.Provider value = "React-js">

        <ComponentA/>
</export2.Provider>
</export1.Provider>

    </div>
  )
}

export default UseContext