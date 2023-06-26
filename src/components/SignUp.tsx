import React from "react";
import { Divider } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import "./styles/sighUpStyle.scss";
import IconEyeOff from "./Eye";
import CustomizedButtons from "./Button";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { IinputDataReg } from "../interface";
import { SignupSchemaRegister, inputRegigter } from "../constants/data";
import useRegister from "../hooks/useRegister";
import { RootState } from "../store";
import { showWarningMessage } from "../utilits/showWarning";
import ErrorAlert from "../utilits/showAlert";

export const SignUp: React.FC = () => {
    const { registrationHandler } = useRegister();
    const error = useSelector((state: RootState) => state.error.errorMessage);

    const handleSubmit = (values: IinputDataReg) => {
        registrationHandler(values);
    };

    ErrorAlert();

    return (
        <div className="registration__form-wrapper">
            {error && (
                <Alert variant="filled" severity="error" className="alert">
                    {error}
                </Alert>
            )}

            <Formik
                initialValues={{
                    displayName: "",
                    username: "",
                    password: "",
                    confirm_password: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={SignupSchemaRegister}
            >
                {({ errors, touched }) => (
                    <Form className="registration__form">
                        <h2 className="form__title">SIGN UP</h2>
                        {inputRegigter.map(({ label, name, autoComplete, type, placeholder }) => {
                            return (
                                <div className="registration-form__details" key={name}>
                                    <label htmlFor={name} className="registration-form__label">
                                        {label}
                                    </label>
                                    <div className="registration-form__flex">
                                        <Field
                                            id={name}
                                            name={name}
                                            autoComplete={autoComplete}
                                            type={type}
                                            placeholder={placeholder}
                                            className="registration-form__input"
                                        />
                                        {(name === "password" || name === "confirm_password") && (
                                            <IconEyeOff style={{ color: "white" }} />
                                        )}
                                    </div>
                                    <Divider
                                        style={{
                                            backgroundColor: "white",
                                            width: "19.7",
                                        }}
                                    />
                                    {showWarningMessage(name, touched, errors)}
                                </div>
                            );
                        })}

                        <CustomizedButtons />
                    </Form>
                )}
            </Formik>
            <p className="additional-info">
                I have an account.
                <span>
                    <Link to="/auth/login">Go to Sign in</Link>
                </span>
            </p>
        </div>
    );
};
