import React from "react";
import "./login-page.scss";
import logo from "./images/logo.png";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="blue-left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="gray-right">test</div>
    </div>
  );
};

export default LoginPage;
