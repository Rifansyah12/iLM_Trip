import React from "react";
import Background from "../../assets/volcano-3779159_1280.png";

function Header() {
  const headerStyle = {
    position: "relative",
    width: "100%",
    height: 671, // Tinggi gambar latar belakang
    overflow: "hidden",
  };

  const textStyle = {
    color: "#FFFCFC",
    fontSize: 50,
    fontFamily: "Beiruti",
    fontWeight: "700",
    wordWrap: "break-word",
    position: "absolute",
    top: 180, // Posisi vertikal teks
    left: 50, // Sama dengan padding kiri navbar
    paddingRight: 50, // Sama dengan padding kanan navbar
    zIndex: 1, // Pastikan teks berada di atas gambar
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0, // Gambar berada di bawah teks
  };

  return (
    <header style={headerStyle}>
      <img
        className="Volcano37791591280"
        style={imageStyle}
        src={Background}
        alt="Background"
      />
      <div className="PilihPetualanganAndaCapaiPuncaknya" style={textStyle}>
        “Pilih Petualangan Anda, Capai Puncaknya!”
      </div>
    </header>
  );
}

export default Header;
