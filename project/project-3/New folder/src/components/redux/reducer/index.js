import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

 const Reducer = combineReducers({
    allproduct : productReducer
})
export default Reducer