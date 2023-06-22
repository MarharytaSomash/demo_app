import React from "react";
import ReactDOM from "react-dom";
import * as yup from "yup";
import { Divider, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import "./styles/sighUpStyle.scss";
import IconEyeOff from "./Eye";
import CustomizedButtons from "./Button";
import { Link } from "react-router-dom";

const SignupSchema = yup.object().shape({
    full_name: yup
        .string()
        .min(4, "Too Short, please,enter more than 4 symbols!")
        .max(15, "Too Long! please,enter less than 15 symbols!")
        .required("Required"),
    user_name: yup
        .string()
        .min(4, "Too Short, please,enter more than 4 symbols!")
        .max(15, "Too Long! please,enter less than 15 symbols!")
        .required("Required"),

    password: yup
        .string()
        .min(6, "Too Short, please,enter more than 6 symbols!")
        .max(15, "Too Long! please,enter less  symbols!")
        .required("Required"),
    confirm_password: yup
        .string()
        .min(6, "Too Short, please,enter more than 6 symbols!")
        .max(15, "Too Long! please,enter less  symbols!")
        .required("Required"),
});

export const SignUp = () => {
    //  const dispatch = useDispatch();
    //  const { user } = useSelector((state: RootState) => state);

    //  const { error } = useSelector((state: RootState) => state.error);

    const inputItems = [
        {
            label: "Full Name",
            name: "full_name",
            autoComplete: "off",
            type: "text",
            placeholder: "Example name",
        },
        {
            label: "User Name",
            name: "user_name",
            autoComplete: "off",
            type: "text",
            placeholder: "Example123",
        },
        {
            label: "Password",
            name: "password",
            autoComplete: "off",
            type: "password",
            placeholder: "enter your password",
        },
        {
            label: "Confirm Password",
            name: "confirm_password",
            autoComplete: "off",
            type: "password",
            placeholder: "confirm your password",
        },
    ];
    //  const { registrationHandler }: any = useRegister();
    const handleSubmit = (values: any) => {
        //   dispatch(registerUserAction(values));
        //   registrationHandler(values);
        console.log(values);
    };
    const renderErrorMessage = (name: string, touched: any, errors: any) => {
        if (touched[name] && errors[name]) {
            return <div className="warning">{errors[name]}</div>;
        }
        return null;
    };

    //  useEffect(() => {
    //      if (error) {
    //          toast.error(`${error}`, {
    //              position: toast.POSITION.BOTTOM_CENTER,
    //          });
    //      }
    //  }, [error]);
    return (
        <>
            <div className="registration__form-wrapper">
                <Formik
                    // className="registration__page"
                    initialValues={{
                        full_name: "",
                        user_name: "",
                        password: "",
                        confirm_password: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={SignupSchema}
                >
                    {({ errors, touched }) => (
                        <Form className="registration__form">
                            <h2
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                                className="form__title"
                            >
                                {" "}
                                SiGN UP{" "}
                            </h2>
                            {inputItems.map(({ label, name, autoComplete, type, placeholder }) => {
                                return (
                                    <div className="registration-form__details" key={name}>
                                        <label htmlFor={name} className="registration-form__label">
                                            {label}
                                        </label>
                                        <div
                                            style={{
                                                // direction: "row",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Field
                                                id={name}
                                                name={name}
                                                autoComplete={autoComplete}
                                                type={type}
                                                placeholder={placeholder}
                                                className="registration-form__input"
                                                style={{
                                                    fontFamily: "Montserrat, sans-serif",
                                                }}
                                            />
                                            {(name === "password" ||
                                                name === "confirm_password") && (
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
                    I have an account.{" "}
                    <span>
                        <Link to="/auth/login">Go to Sign in</Link>
                    </span>
                </p>
            </div>
        </>
    );
};
