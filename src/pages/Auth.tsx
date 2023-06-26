import React from "react";
import { SignUp } from "../components/SignUp";
import Logo from "../components/Logo";
import { Space } from "antd";

const Auth = () => {
    return (
        <Space
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Space
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
            </Space>
        </Space>
    );
};
export default Auth;
