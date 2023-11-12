const Child_props = (props_2) => {
    return (
       <>
       {props_2.children}
        <h1>this is props = {props_2.name} </h1>
        {props_2.children}
       </>
    )
}
export default Child_props ;