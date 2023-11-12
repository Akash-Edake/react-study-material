import React from 'react'

const Header = () => {
    return (
        <>
        const [Filter, setFilter] = useState('')
  return (
    <>
    <input type="text " onChange={e=>{setFilter(e.target.value)}} />

    {
      Data.filter((event)=>{
        if(event===''){
          return event
        }else if(event.img.includes(Filter)){
          return event
        }
      })
      .map((itm)=>{
        return(
          <div>{itm.img}</div>
        )
      })
    }
    </>
  );

        </>
    )
}

export default Header