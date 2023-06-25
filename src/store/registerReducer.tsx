import { createSlice } from "@reduxjs/toolkit";

interface RegState {
    loading: boolean;
    success: boolean;
    userRegData: object;
}

const initialState: RegState = {
    loading: false,
    success: false,
    userRegData: {},
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
            state.success = false;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.userRegData = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.success = false;
        },
    },
});

export const { startLoading, loginSuccess, loginFailure } = registerSlice.actions;
export default registerSlice.reducer;
