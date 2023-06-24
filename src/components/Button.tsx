import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const CustomButton = styled(Button)({
    width: "300px",
    height: "44px",
    top: "20px",
    left: "1px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    fontWeight: "600",
    Padding: "6px, 16px, 6px, 16px",
    backgroundColor: "#539713",
    color: "white",
    "&:hover": {
        backgroundColor: "#44720e",
    },
});

export default function CustomizedButton() {
    return (
        <CustomButton variant="contained" type="submit">
            Sign Up
        </CustomButton>
    );
}
