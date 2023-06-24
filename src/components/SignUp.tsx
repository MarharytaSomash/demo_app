import React from "react";
import ReactDOM from "react-dom";
import { Divider } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import "./styles/sighUpStyle.scss";
import IconEyeOff from "./Eye";
import CustomizedButtons from "./Button";
import { Link } from "react-router-dom";
import { SignUpProps } from "../interface";
import { inputDataReg } from "../interface";
import { useState, useEffect } from "react";
import { SignupSchemaRegister, inputRegigter } from "../constants/data";
import { toast } from "react-toastify";
import useRegister from "../hooks/useRegister";
export const SignUp: React.FC<SignUpProps> = ({ handleToggleSignUp }) => {
    const [error, setError] = useState();
    const { registrationHandler }: any = useRegister();
    const handleSubmit = (values: inputDataReg) => {
        registrationHandler(values);
    };

    const renderErrorMessage = (name: string, touched: any, errors: any) => {
        if (touched[name] && errors[name]) {
            return <div className="warning">{errors[name]}</div>;
        }
        return null;
    };

    return (
        <div className="registration__form-wrapper">
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
                                    {renderErrorMessage(name, touched, errors)}
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
                    <Link to="/">Go to Sign in</Link>
                </span>
            </p>
        </div>
    );
};
