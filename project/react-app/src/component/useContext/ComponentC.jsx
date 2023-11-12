import React, { useContext } from "react";

import { export1, export2 } from "./UseContext";

function ComponentC() {
  const user = useContext(export1);
  const channel = useContext(export2);
  return (
    <div>
     {user} - {channel}
    </div>
  );
}

export default ComponentC;
