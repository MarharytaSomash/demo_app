import { useDispatch } from "react-redux";
import errorReducer from "./errorReducer ";
import registerReducer from "./registerReducer";
import {
    AnyAction,
    applyMiddleware,
    combineReducers,
    createStore,
    ThunkDispatch,
} from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import logOutReducer from "./logOutReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    error: errorReducer,
    auth: authReducer,
    register: registerReducer,
    logOut: logOutReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
