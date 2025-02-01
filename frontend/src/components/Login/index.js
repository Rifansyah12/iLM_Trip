import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Background from "../../assets/volcano-3779159_1280.png";
import NewImage from "../../assets/logo/Logo_trip2.png"; // Logo aplikasi

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const pageStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  };

  const loginBoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    padding: 30,
    backgroundColor: "#000000",
    borderRadius: 10,
    boxShadow: "0 4px 10px rgba(220, 209, 209, 0.79)",
    zIndex: 2,
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: 10,
    margin: "10px 0",
    borderRadius: 5,
    border: "1px solid #ccc",
    fontSize: 16,
  };

  const buttonStyle = {
    width: "100%",
    padding: 10,
    backgroundColor: "#FA8806",
    color: "white",
    border: "none",
    borderRadius: 5,
    fontSize: 18,
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: 10,
  };

  const logoStyle = {
    width: "50%",
    marginBottom: 20,
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    try {
      const response = await axios.post("http://localhost:5000/loginAdmin", {
        email,
        password,
      });

      // Simpan token di localStorage
      localStorage.setItem("token", response.data.token);

      alert("Login Berhasil!");
      navigate("/dashboard"); // Redirect ke dashboard
    } catch (err) {
      setError(err.response?.data?.msg || "Login Gagal!");
    }
  };

  return (
    <div style={pageStyle}>
      <img
        className="BackgroundImage"
        style={imageStyle}
        src={Background}
        alt="Background"
      />
      <div style={overlayStyle}></div>
      <div style={loginBoxStyle}>
        <img
          className="LogoImage"
          style={logoStyle}
          src={NewImage}
          alt="Logo"
        />
        <h2 style={{ marginBottom: 20, color: "#ffff" }}>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
