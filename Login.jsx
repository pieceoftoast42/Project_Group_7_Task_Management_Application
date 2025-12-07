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
    <div className="authcontainer">
      <div className="authcard">
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

        <button className="authswitchbtn" onClick={switchToSignup}>
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
}

const authcontainer {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f2f5;
  }
  
  const authcard {
    background: #ffffff;
    padding: 30px 40px;
    border-radius: 12px;
    width: 350px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    text-align: center;
  }
  
  const authcardh2 {
    margin-bottom: 20px;
    font-size: 1.6rem;
    color: #333;
  }
  
  const authcardinput {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  
  const authcardbutton {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 6px;
    border: none;
    background-color: #333;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
  }
  
  const authcardbutton:hover {
    background-color: #1e1e1e;
  }
  
  const authswitchbtn {
    background: transparent;
    border: none;
    color: #1e1e1e;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 10px;
    font-size: 0.9rem;
  }
  
  const authswitchbtn:hover {
    color: #555;
  }

export default Login;
