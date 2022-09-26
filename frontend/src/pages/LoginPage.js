import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
  };

  return (
    <div className="login">
      <h1>Login Form</h1>
      <form className="login-form" onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/forgot/password">Forgot Password</Link>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <Link to="/register">New User?</Link>
      </form>
    </div>
  );
};

export default LoginPage;
