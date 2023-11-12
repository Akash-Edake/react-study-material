import { useEffect, useState } from "react";

const Effect = () => {
  let num = 0;
  const [add, setadd] = useState(num);

  useEffect(() => {
    console.log("add fun")   
  }, [add]);

  return (
    <>
      {add}
      <button onClick ={() => setadd(add + 1)}>click</button>
    </>
  );
};
export default Effect;
