import React from "react";
import Background from "../../assets/volcano-3779159_1280.png";
import NewImage from "../../assets/logo/Logo_trip.png";

function Header() {
  const headerStyle = {
    position: "relative",
    width: "100%",
    height: "80vh", // Gunakan vh agar tinggi fleksibel
    overflow: "hidden",
  };

  const textStyle = {
    color: "#FFFCFC",
    fontSize: "3vw", // Gunakan vw agar responsif di layar kecil
    fontFamily: "Beiruti",
    fontWeight: "700",
    position: "absolute",
    top: "20%",
    left: "5%",
    zIndex: 1,
    maxWidth: "50%",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
  };

  const newImageStyle = {
    position: "absolute",
    top: "5%",
    right: "5%",
    width: "15vw",
    height: "auto",
    zIndex: 1,
  };

  const buttonStyle = {
    width: "12vw",
    height: "6vh",
    background: "linear-gradient(90deg, white 0%, #FFD18F 100%)",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5vw",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    color: "#FA8806",
    marginTop: "20px",
  };

  return (
    <header style={headerStyle}>
      <img style={imageStyle} src={Background} alt="Background" />
      <div style={overlayStyle}></div>

      <div style={textStyle}>
        “Pilih Petualangan Anda, Capai Puncaknya!”
        <p
          style={{
            color: "#ffff",
            fontSize: "1.5vw",
            fontWeight: "50",
            fontFamily: "Poppins",
            width: "100%",
            textAlign: "left",
          }}
        >
          Petualangan ini lebih dari sekedar perjalanan menuju puncak. Ini
          adalah pengalaman yang akan mengubah cara Anda merasakan dunia, penuh
          tantangan, keindahan, dan kebanggaan yang tak terlupakan.
        </p>
        <button style={buttonStyle}>Explore</button>
      </div>

      <img style={newImageStyle} src={NewImage} alt="New Image" />
    </header>
  );
}

export default Header;
