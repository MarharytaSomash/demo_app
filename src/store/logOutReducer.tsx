import { createSlice } from "@reduxjs/toolkit";

interface LogAutState {
    success: boolean;
}

const initialState: LogAutState = {
    success: false,
};

const authSlice = createSlice({
    name: "logOut",
    initialState,
    reducers: {
        logOutSuccess: (state) => {
            state.success = true;
        },
    },
});

export const { logOutSuccess } = authSlice.actions;
export default authSlice.reducer;
