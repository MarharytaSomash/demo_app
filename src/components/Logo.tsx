import React from "react";

const Logo = () => {
    return (
        <img
            style={{
                position: "relative",
                width: "8.4rem",
                height: "5rem",
                top: "3rem",
                left: "-3.8rem",
            }}
            src={process.env.PUBLIC_URL + "/img/Logo.png"}
            alt="logo"
        />
    );
};

export default Logo;
