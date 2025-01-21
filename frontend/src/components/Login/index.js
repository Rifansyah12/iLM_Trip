import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/volcano-3779159_1280.png";
import NewImage from "../../assets/logo/Logo_trip2.png"; // Logo aplikasi

function LoginPage() {
  const navigate = useNavigate();
  const pageStyle = {
    position: "relative",
    width: "100%",
    height: "100vh", // Menyesuaikan tinggi halaman dengan viewport
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Pastikan gambar tidak pecah
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0, // Gambar berada di bawah elemen lainnya
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay hitam transparan
    zIndex: 1, // Overlay berada di atas gambar
  };

  const loginBoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400, // Lebar form login
    padding: 30, // Padding dalam form
    backgroundColor: "#0f4142", // Warna latar form
    borderRadius: 10, // Sudut membulat
    boxShadow: "0 4px 10px rgba(26, 247, 2, 0.79)", // Efek bayangan
    zIndex: 2, // Form berada di atas overlay
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
    width: "50%", // Ukuran logo
    marginBottom: 20,
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    navigate("/dashboard"); // Navigasi ke halaman dashboard
  };

  return (
    <div style={pageStyle}>
      <img
        className="BackgroundImage"
        style={imageStyle}
        src={Background}
        alt="Background"
      />
      <div style={overlayStyle}></div> {/* Overlay hitam transparan */}
      <div style={loginBoxStyle}>
        <img
          className="LogoImage"
          style={logoStyle}
          src={NewImage}
          alt="Logo"
        />
        <h2 style={{ marginBottom: 20, color: "#ffff" }}>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" style={inputStyle} required />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
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
