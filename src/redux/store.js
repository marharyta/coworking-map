import {
    createStore,
    applyMiddleware
} from "redux";
import thunkMiddleware from "redux-thunk";
import { combinedReducer } from './reducer';

export const store = createStore(
    combinedReducer,
    applyMiddleware(thunkMiddleware)
);