import React, { useState } from "react";
import "./styles/LoginSignup.css";

function Login({ setCurrentUser, switchToSignup }) {
  const [userN, setUserN] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const match = users.find(
      (u) => u.userN === userN && u.password === password
    );

    if (!match) {
      alert("Invalid username or password");
      return;
    }

    setCurrentUser(userN);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            required
            value={userN}
            onChange={(e) => setUserN(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <button className="auth-switch-btn" onClick={switchToSignup}>
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;
