import React from "react";
import ReactDOM from "react-dom";
import { Divider } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import "./styles/sighInStyle.scss";
import IconEyeOff from "./Eye";
import CustomizedButtons from "./Button";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { SignupSchemaLogin, inputLogin } from "../constants/data";
import useAuth from "../hooks/useAuth";
import { setLocalStorage } from "../utilits/LocalStorage";

export const SignIn: React.FC = () => {
    //  const dispatch = useDispatch();
    //  const { user } = useSelector((state: RootState) => state);

    //  const { error } = useSelector((state: RootState) => state.error);

    const { authHandler }: any = useAuth();
    const handleSubmit = (values: any) => {
        //   dispatch(registerUserAction(values));
        authHandler(values);
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
        <div className="authorization-wrapper">
            <div className="authorization-wrapper-main">
                <Logo />
                <div className="authorization__form-wrapper">
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
                                                <Divider
                                                    style={{
                                                        backgroundColor: "white",
                                                        width: "19.7",
                                                    }}
                                                />
                                                {renderErrorMessage(name, touched, errors)}
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
                        <Link to="/auth/register"> New Account</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};
