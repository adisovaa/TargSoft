import {applyMiddleware, combineReducers, createStore} from "redux"
import sidebarReducer from "./sidebar-reducer"
import thunkMiddleware from 'redux-thunk'
import contentReducer from "./content-reducer";


let reducers = combineReducers({
    sidebar: sidebarReducer,
    content: contentReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store