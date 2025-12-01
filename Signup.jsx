import React, { useState } from "react";

function Signup({ setCurrentUser }) {
  const [userN, setuserN] = useState("");
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
    <div>
      <h2>Create Account</h2>
      <form onSubmit={signup}>
        <input
          type="userN"
          placeholder="Username"
          required
          value={userN}
          onChange={(e) => setuserN(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;