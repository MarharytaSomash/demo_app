import React from "react";
import Logo from "../components/Logo";
import useLogOut from "../hooks/useLogOut";
import { useNavigate } from "react-router-dom";
import { HOME } from "../constants/path";
import "./styles/homeStyle.scss";

const Home: React.FC = () => {
    const { LogOutHandler } = useLogOut();
    const navigate = useNavigate();
    const handleClick = () => {
        LogOutHandler();
        navigate(HOME);
    };
    return (
        <div className="home-page-wraper">
            <div className="home-page-logo">
                <Logo />
            </div>
            <div className="home-page-main">
                <div className="home-page-info">
                    <h1 className="home-page-title"> CONGRATULATIONS</h1>
                    <img
                        className="home-page-decor"
                        src={process.env.PUBLIC_URL + "/img/Decor.png"}
                        alt="decor"
                    />
                </div>
                <p className="home-page-text">
                    Now you are on the main page. Soon we will provide you with detailed feedback on
                    the result of your work
                </p>
                <button className="home-page-button" type="submit" onClick={handleClick}>
                    Log Out
                </button>
                <img
                    className="home-page-img"
                    src={process.env.PUBLIC_URL + "/img/People.png"}
                    alt="people"
                />
            </div>
        </div>
    );
};

export default Home;
