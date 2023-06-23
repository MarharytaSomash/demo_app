import React from "react";
import { useState } from "react";
import { SignUp } from "../components/SignUp";
import { SignIn } from "../components/SignIn";
import { Box } from "@material-ui/core";
import Logo from "../components/Logo";

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const handleToggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };
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

                {isSignUp ? <SignUp handleToggleSignUp={handleToggleSignUp} /> : <SignIn />}
            </Box>
        </Box>
    );
};
export default Auth;
