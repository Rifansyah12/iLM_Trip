import React, { useState, useEffect } from "react";
import Background from "../../../assets/Trip/bgprt.png";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerStyle = {
    position: "relative",
    width: "100%",
    height: isMobile ? 280 : 500, // Tinggi lebih besar di desktop
    overflow: "hidden",
  };

  const textStyle = {
    color: "#FFFCFC",
    fontSize: isMobile ? 28 : 80, // Ukuran font lebih besar di desktop
    fontFamily: "Beiruti",
    fontWeight: "700",
    position: "absolute",
    top: isMobile ? 15 : 80, // Posisi lebih ke bawah di desktop
    left: isMobile ? 25 : 80, // Padding lebih besar di desktop
    paddingRight: isMobile ? 25 : 80,
    zIndex: 1,
    maxWidth: isMobile ? "85%" : "65%", // Lebar teks lebih luas di desktop
  };

  const paragraphStyle = {
    color: "#FFFFFF",
    fontSize: isMobile ? 16 : 30, // Ukuran font paragraf disesuaikan
    fontWeight: 50,
    fontFamily: "Poppins",
    width: isMobile ? "100%" : "75%", // Lebar teks lebih lebar di desktop
    margin: "20px 0",
    textAlign: "left",
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

  return (
    <header style={headerStyle}>
      <img style={imageStyle} src={Background} alt="Background" />
      <div className="PilihPetualanganAndaCapaiPuncaknya" style={textStyle}>
        PrivateTrip
        <p style={paragraphStyle}>
          Nikmati petualangan mendaki yang eksklusif dengan Paket Private Trip
          kami. Rasakan pengalaman mendaki gunung secara pribadi bersama
          orang-orang terdekat.
        </p>
      </div>
    </header>
  );
}

export default Header;
