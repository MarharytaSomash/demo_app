import React, { useEffect } from "react";
import { useAppDispatch } from "../store";
import { clearError } from "../store/errorReducer ";
import { AppDispatch } from "../store";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const ErrorAlert = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const error = useSelector((state: RootState) => state.error.errorMessage);

    useEffect(() => {
        if (error && error.length > 0) {
            const timer = setTimeout(() => {
                dispatch(clearError());
            }, 2000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [dispatch, error]);

    return null;
};

export default ErrorAlert;
