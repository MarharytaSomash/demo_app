import { useDispatch } from "react-redux";
import errorReducer from "./errorReducer ";
import registerReducer from "./registerReducer";
import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import logOutReducer from "./logOutReducer";

export const store = configureStore({
    reducer: {
        error: errorReducer,
        auth: authReducer,
        register: registerReducer,
        logOut: logOutReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
