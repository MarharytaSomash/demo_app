import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Registration from "./pages/Registration";
import Authorization from "./pages/Authorization";
function App() {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path="/auth/register" element={<Registration />} />
            <Route path="/auth/login" element={<Authorization />} />
            <Route path="/" element={<Layout />}>
                <Route path="/users" element={<Home />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
