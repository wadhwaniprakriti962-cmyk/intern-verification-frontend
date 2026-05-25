import { useState } from "react";
import "./Login.css";
import api from "../api/axiosInstance";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post(
        "/api/auth/login",
        {
          email,
          password
        }
      );

      console.log("LOGIN RESPONSE:", res.data);

      // 🔥 SAVE TOKEN
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      // redirect
      window.location.href = "/dashboard";

    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

 return (
  <div className="login-container">
    <div className="login-box">

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  </div>
);
}