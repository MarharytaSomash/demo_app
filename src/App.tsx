import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import Auth from "./pages/Auth";
function App() {
    return (
        <Routes>
            <Route index element={<Auth />} />
            <Route path="/auth/login" element={<SignIn />} />
            <Route path="/users" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
