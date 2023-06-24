import * as yup from "yup";
export const inputRegigter = [
    {
        label: "Full Name",
        name: "displayName",
        autoComplete: "off",
        type: "text",
        placeholder: "Example name",
    },
    {
        label: "User Name",
        name: "username",
        autoComplete: "off",
        type: "text",
        placeholder: "Example123",
    },
    {
        label: "Password",
        name: "password",
        autoComplete: "off",
        type: "password",
        placeholder: "please,enter your password more than 6 symbols",
    },
    {
        label: "Confirm Password",
        name: "confirm_password",
        autoComplete: "off",
        type: "password",
        placeholder: "confirm your password",
    },
];
export const inputLogin = [
    {
        label: "User Name",
        name: "username",
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
];

export const SignupSchemaLogin = yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
});
export const SignupSchemaRegister = yup.object().shape({
    displayName: yup
        .string()
        .min(6, "min 6 symbol")
        .max(25, "Too Long! please,enter less than 20 symbols!")
        .required("Required"),
    username: yup
        .string()
        .min(6, "min 6 symbols")
        .max(15, "Too Long! please,enter less than 15 symbols!")
        .matches(/^(?=.*[a-zA-Z])(?=.*\d).*$/, "Username must contain both letters and numbers.")
        .required("Required"),

    password: yup
        .string()
        .max(15, "Too Long! please,enter less  symbols!")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
        )
        .required("Required"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), undefined], "Passwords must match")
        .required("Confirm Password is required"),
});
export const keysToRemove = [
    "accessToken",
    "refreshToken",
    "userAuth",
    "userRegister",
    "newAccessToken",
];
