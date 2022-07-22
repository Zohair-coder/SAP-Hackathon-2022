import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  Input,
  Label,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Button,
} from "@ui5/webcomponents-react";
import { loginUser } from "../api/api";
import { FlexBox } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import "./login.css";

function LoginView() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = input.username;
    const password = input.password;
    loginUser(username, password).then(function (response) {
      if (response.status === 200) {
        const user_id = response.data;
        localStorage.setItem("user_id", user_id);
        setIsAuthenticated(true);
      }
    });
  };

  return (
    <div>
      {isAuthenticated ? <Navigate to="/home" /> : null}
      <h1>The Missing Piece</h1>
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Start}
      >
        <form>
          <Label>Username:</Label>
          <Input
            name="username"
            onChange={handleInputChange}
            value={input.username}
          ></Input>
          <Label>Password:</Label>
          <Input
            name="password"
            onChange={handleInputChange}
            value={input.password}
          ></Input>
          <h3>
            Don't have an account? <a href="/register">Sign Up</a>
          </h3>
          <Link to={"/home"}>
            <Button onClick={handleSubmit}>Log In</Button>
          </Link>
        </form>
      </FlexBox>
    </div>
  );
}

export default LoginView;
