import {createStore, applyMiddleware} from "redux";
import rootReducer from "./Reducer/rootReducer";
import rootReducer from "redux-thunk"

const middlewares = [thunk]

if(ProcessingInstruction.env.NODE_ENV==="development") {
    const {logger} = require("redux-logger");
    middlewares.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;