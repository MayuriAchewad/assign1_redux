import {combineReducers, createStore} from "redux";
import { empReducer } from "../reducer/empReducer";

export const configStore=()=>{
    const myStore= createStore(combineReducers({empReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return myStore;
}