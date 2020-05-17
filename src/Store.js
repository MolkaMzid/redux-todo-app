import{createStore, combineReducers} from "redux";
import SetInputReducer from "./Reducers/SetInputReducer";
import SetListReducer from "./Reducers/SetListReducer";
const Store=createStore(combineReducers({
    InputValue:SetInputReducer,
    ToDoList:SetListReducer,
}))
export default Store;