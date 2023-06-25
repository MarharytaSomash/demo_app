import { inputDataReg } from "../interface";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../utilits/LocalStorage";
import { useState } from "react";
import axios from "axios";
// import { Alert } from "@mui/material";
// import { useAppDispatch } from "../store";
import { setError } from "../store/errorReducer ";
import { AppDispatch } from "../store";
import { AUTH, REGISTER } from "../constants/path";
import { useAppDispatch } from "../store";
import { loginFailure, startLoading, loginSuccess } from "../store/registerReducer";

const useRegister = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();

    const registrationHandler = async (values: inputDataReg) => {
        const headers = {
            "Content-Type": "application/json",
        };

        const dataToSend = {
            displayName: values.displayName,
            username: values.username,
            password: values.password,
        };

        try {
            dispatch(startLoading());
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}${REGISTER}`,
                dataToSend,
                { headers },
            );

            const user = response.data;
            if (user) {
                dispatch(loginSuccess(user));
                setLocalStorage("userRegister", JSON.stringify(user));
                setTimeout(() => navigate(AUTH), 1000);
            }
        } catch (error: any) {
            dispatch(setError(error.response.data.message));
            dispatch(loginFailure());
        }
    };
    return { registrationHandler };
};

export default useRegister;
