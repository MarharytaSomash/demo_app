import React from "react";
import { NavLink } from "react-router-dom";
import { FC } from "react";
// import "./styles/notFoundPage.scss";

const NotFoundPage: React.FC = () => {
    return (
        <div className="not-foud_page">
            This page doesn&apos;t exist... Go&nbsp;
            <NavLink to="/">
                <span> Home </span>
            </NavLink>
        </div>
    );
};

export default NotFoundPage;
