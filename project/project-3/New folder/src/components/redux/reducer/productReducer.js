import { ActionType } from "../containts/ActionType"
const Initial_state=[
    {
        id:1,
        name:"akash",
        job:"programer"
    }
]

export const productReducer =(state=Initial_state,{type,payload})=>{
switch (type) {
    case ActionType.SET_PRODUCT:
        return state

    default:
        return state
}
}