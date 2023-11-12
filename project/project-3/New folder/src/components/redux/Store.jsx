
import { createStoreHook } from "react-redux/es/exports";
import  Reducer  from "./reducer/index";

 const store = createStoreHook(Reducer,{})

 export default store 