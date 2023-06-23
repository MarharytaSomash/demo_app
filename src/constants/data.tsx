import * as yup from "yup";
export const inputRegigter = [
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
export const inputLogin = [
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
];

export const SignupSchemaLogin = yup.object().shape({
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
});
export const SignupSchemaRegister = yup.object().shape({
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
