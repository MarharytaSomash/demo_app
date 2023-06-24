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
    username: yup
        .string()
        .min(5, "Too Short, please,enter more than 5 symbols!")
        .max(15, "Too Long! please,enter less than 15 symbols!")
        .required("Required"),

    password: yup
        .string()
        .min(8, "Too Short, please,enter more than 8 symbols!")
        .max(15, "Too Long! please,enter less  symbols!")
        .required("Required"),
});
export const SignupSchemaRegister = yup.object().shape({
    displayName: yup
        .string()
        .min(6, "Too Short, please,enter more than 5 symbols!")
        .max(25, "Too Long! please,enter less than 25 symbols!")
        .required("Required"),
    username: yup
        .string()
        .min(6, "Too Short, please,enter more than 5 symbols!")
        .max(15, "Too Long! please,enter less than 15 symbols!")
        .required("Required"),

    password: yup
        .string()
        .min(8, "Too Short, please,enter more than 8 symbols!")
        .max(15, "Too Long! please,enter less  symbols!")
        .required("Required"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), undefined], "Passwords must match")
        .required("Confirm Password is required"),
});
