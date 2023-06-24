import React from "react";
import { Box } from "@material-ui/core";
import { SignUp } from "../components/SignUp";
import Logo from "../components/Logo";

const Auth = () => {
    return (
        <Box
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                style={{
                    width: "26.5rem",
                    height: "54.25rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "#1D283A",
                    left: "3rem",
                }}
            >
                <Logo />
                <SignUp />
            </Box>
        </Box>
    );
};
export default Auth;
