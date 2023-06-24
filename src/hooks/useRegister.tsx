import { inputDataReg } from "../interface";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../utilits/LocalStorage";
import { useState } from "react";
import axios from "axios";
import { USERS, HOME } from "../constants/path";

const useRegister = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();

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
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}${HOME}`,
                dataToSend,
                { headers },
            );
            const user = response.data.user;
            setLocalStorage("userRegister", JSON.stringify(user));
            setTimeout(() => navigate(USERS), 800);
        } catch (error: any) {
            console.error(error.response.data.message);
            setError(error.response.data.message);
        }
    };
    return { registrationHandler };
};

export default useRegister;
