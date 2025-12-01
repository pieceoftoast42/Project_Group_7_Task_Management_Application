import React, { useState } from "react";

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
    <div>
      <h2>Login</h2>

      <form onSubmit={login}>
        <input
          type="userN"
          placeholder="Username"
          required
          value={userN}
          onChange={(e) => setUserN(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <button onClick={switchToSignup}>Sign up</button>
      </p>
    </div>
  );
}

export default Login;