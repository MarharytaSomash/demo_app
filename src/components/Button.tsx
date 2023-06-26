import React from "react";
import { Button } from "antd";

const CustomizedButton = () => {
    return (
        <Button
            style={{
                width: "300px",
                height: "44px",
                top: "20px",
                left: "1px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
                padding: "6px 16px",
                backgroundColor: "#539713",
                color: "white",
            }}
            type="primary"
            htmlType="submit"
        >
            Sign Up
        </Button>
    );
};

export default CustomizedButton;
