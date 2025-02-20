import React from "react";
import { useLocation } from "react-router-dom";

const Header = ({ namaGunung, foto, lokasi, paket }) => {
  const location = useLocation();
  const data = location.state || { namaGunung, foto, lokasi, paket };

  return (
    <header
      style={{
        backgroundImage: `url(${data.foto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px", // Sesuaikan tinggi header
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>{data.namaGunung}</h1>
        <p>
          {data.lokasi} - {data.paket}
        </p>
      </div>
    </header>
  );
};

export default Header;
