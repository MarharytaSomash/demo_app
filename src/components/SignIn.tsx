import React from "react";
import { Alert } from "antd";
import { Formik, Form, Field } from "formik";
import IconEyeOff from "./EyeIconCompnent";
import CustomizedButtons from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import { SignupSchemaLogin, inputLogin } from "../constants/data";
import useAuth from "../hooks/useAuth";
import { RootState } from "../store";
import ErrorAlert from "../utilits/showAlert";
import { IinputDataAuth } from "../interface";
import { showWarningMessage } from "../utilits/showWarning";
import CustomDivider from "./CustomDiveder";
import "./styles/sighInStyle.scss";

export const SignIn: React.FC = () => {
    const error = useSelector((state: RootState) => state.error.errorMessage);
    const { authHandler }: { authHandler: (data: IinputDataAuth) => void } = useAuth();
    const handleSubmit = (values: IinputDataAuth) => {
        authHandler(values);
    };

    ErrorAlert();
    return (
        <div className="authorization-wrapper">
            <div className="authorization-wrapper-main">
                <Logo />
                <div className="authorization__form-wrapper">
                    {error && <Alert message={error} className="alert" type="error" showIcon />}
                    <Formik
                        initialValues={{
                            username: "",
                            password: "",
                        }}
                        onSubmit={handleSubmit}
                        validationSchema={SignupSchemaLogin}
                    >
                        {({ errors, touched }) => (
                            <Form className="authorization__form">
                                <h2 className="form__title">SIGN IN</h2>
                                {inputLogin.map(
                                    ({ label, name, autoComplete, type, placeholder }) => {
                                        return (
                                            <div className="authorization-form__details" key={name}>
                                                <label
                                                    htmlFor={name}
                                                    className="authorization-form__label"
                                                >
                                                    {label}
                                                </label>
                                                <div className="authorization-form__flex">
                                                    <Field
                                                        id={name}
                                                        name={name}
                                                        autoComplete={autoComplete}
                                                        type={type}
                                                        placeholder={placeholder}
                                                        className="authorization-form__input"
                                                    />
                                                    {(name === "password" ||
                                                        name === "confirm_password") && (
                                                        <IconEyeOff style={{ color: "white" }} />
                                                    )}
                                                </div>
                                                <CustomDivider />
                                                {showWarningMessage(name, touched, errors)}
                                            </div>
                                        );
                                    },
                                )}

                                <CustomizedButtons />
                            </Form>
                        )}
                    </Formik>
                </div>
                <p className="additional-info-button">
                    Don’t have account yet?
                    <span>
                        <Link to="/"> New Account</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};
