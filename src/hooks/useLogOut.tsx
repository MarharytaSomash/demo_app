import { useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage } from "../utilits/LocalStorage";
import { keysToRemove } from "../constants/data";
import axios from "axios";
import { HOME } from "../constants/path";
import { useAppDispatch } from "../store";
import { setError } from "../store/errorReducer ";
import { AppDispatch } from "../store";
import { logOutSuccess } from "../store/logOutReducer";

const useLogOut = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    const LogOutHandler = async () => {
        try {
            const token = getLocalStorage("newAccessToken");
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            };
            console.log("refresh", `${token}`);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/logout`, {
                headers,
            });
            const logout = response.data;
            if (logout) {
                dispatch(logOutSuccess());

                keysToRemove.forEach((key: string) => {
                    removeLocalStorage(key);
                });
                navigate(HOME);
            }
        } catch (error: any) {
            dispatch(setError(error.response.data.message));
        }
    };
    return { LogOutHandler };
};

export default useLogOut;
