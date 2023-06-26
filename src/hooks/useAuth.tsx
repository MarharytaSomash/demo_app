import { IinputDataAuth } from "../interface";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../utilits/LocalStorage";
import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../store";
import { AppDispatch } from "../store";
import { setError } from "../store/errorReducer ";
import { REFRESH, AUTH, USERS } from "../constants/path";
import { startLoading, loginSuccess, loginFailure } from "../store/authReducer";

const useAuth = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const navigate = useNavigate();

    const authHandler = async (values: IinputDataAuth) => {
        const headers = {
            "Content-Type": "application/json",
        };

        const dataToSend = {
            username: values.username,
            password: values.password,
        };

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}${AUTH}`,
                dataToSend,
                {
                    headers,
                },
            );
            dispatch(startLoading());
            const { accessToken, refreshToken } = response.data;

            if (accessToken && refreshToken) {
                setLocalStorage("accessToken", accessToken);
                setLocalStorage("refreshToken", refreshToken);

                const refreshResponse = await axios.post(
                    `${process.env.REACT_APP_API_URL}${REFRESH}`,
                    { refreshToken },
                    {
                        headers,
                    },
                );

                const newAccessToken = refreshResponse.data.accessToken;

                if (newAccessToken) {
                    setLocalStorage("accessToken", newAccessToken);

                    const authHeaders = {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${newAccessToken}`,
                    };

                    const getUsers = await axios.get(`${process.env.REACT_APP_API_URL}${USERS}`, {
                        headers: authHeaders,
                    });

                    const usersData = getUsers.data.content;

                    setLocalStorage("newAccessToken", newAccessToken);
                    setLocalStorage("userAuth", JSON.stringify(usersData));
                    dispatch(loginSuccess(usersData));
                    navigate(USERS);
                }
            }
        } catch (error: any) {
            dispatch(loginFailure());
            dispatch(setError(error.response.data?.message));
        }
    };

    return { authHandler };
};

export default useAuth;
