import { useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage } from "../utilits/LocalStorage";
import { keysToRemove } from "../constants/data";
import { useState } from "react";
import axios from "axios";
import { HOME } from "../constants/path";

const useLogOut = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();

    const LogOutHandler = async () => {
        try {
            const refreshToken = getLocalStorage("newAccessToken");
            console.log(refreshToken);

            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${refreshToken}`,
            };
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/logout`, {
                headers,
            });
            const user = response.data;
            keysToRemove.forEach((key: string) => {
                removeLocalStorage(key);
            });
            navigate(HOME);
        } catch (error: any) {
            console.error(error.response.data.message);
            setError(error.response.data.message);
        }
    };
    return { LogOutHandler };
};

export default useLogOut;
