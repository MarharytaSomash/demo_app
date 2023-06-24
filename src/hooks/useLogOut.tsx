import { inputDataAuth } from "../interface";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utilits/LocalStorage";
import { useState } from "react";
import axios from "axios";
import { HOME, LOGOUT } from "../constants/path";

const useLogOut = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();

    const LogOutHandler = async () => {
        try {
            const refreshToken = getLocalStorage("newAccessToken");

            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${refreshToken}`,
            };
            const response = await axios.get(`${process.env.REACT_APP_API_URL}${LOGOUT}`, {
                headers,
            });
            const user = response.data;
            setLocalStorage("userAuth", "");
            setTimeout(() => navigate(HOME), 500);
            console.log(response.data);
        } catch (error: any) {
            console.error(error.response.data.message);
            setError(error.response.data.message);
        }
    };
    return { LogOutHandler };
};

export default useLogOut;
