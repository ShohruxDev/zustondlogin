import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store";

function LoginPage() {
  const { login } = useStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") { 
      login();
      navigate("/"); 
    } else {
      alert("Login yoki parol noto‘g‘ri!"); 
    }
  };

  return (
    <div className="login-container">
      <h2>Tizimga kirish.</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{
        padding:'10px 15px',
        backgroundColor:'blue'
      }} onClick={handleLogin} className="login-btn">Kirish</button>
    </div>
  );
}

export default LoginPage;




