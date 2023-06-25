import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    loading: boolean;
    success: boolean;
    userData: object;
}

const initialState: AuthState = {
    loading: false,
    success: false,
    userData: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
            state.success = false;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.userData = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.success = false;
        },
    },
});

export const { startLoading, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
