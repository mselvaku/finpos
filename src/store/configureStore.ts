import thunk from "redux-thunk";
import {applyMiddleware, createStore} from 'redux'
import {chatReducer, initialState} from "./reducers";

export default createStore(chatReducer, initialState, applyMiddleware(thunk))