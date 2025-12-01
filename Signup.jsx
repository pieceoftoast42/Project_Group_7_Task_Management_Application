import React, { useState } from "react";
import "./styles/LoginSignup.css";

function Signup({ setCurrentUser }) {
  const [userN, setUserN] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.userN === userN);
    if (exists) {
      alert("User already exists");
      return;
    }

    const newUser = { userN, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setCurrentUser(userN);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={signup}>
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

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
