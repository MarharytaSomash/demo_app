import React from "react";
import { FormikErrors } from "formik";

export const showWarningMessage = (
    name: string,
    touched: Record<string, boolean>,
    errors: FormikErrors<{ username: string; password: string }>,
) => {
    if (touched[name] && errors[name as keyof typeof errors]) {
        return <div className="warning">{errors[name as keyof typeof errors]}</div>;
    }
    return null;
};
