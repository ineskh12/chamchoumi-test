import LoginForm from "../components/Login";
import React from "react";
import Home from "../components/Home";

const routes = {
    "/login": () => <LoginForm />,
    "/": () => <Home />
};

export default routes;