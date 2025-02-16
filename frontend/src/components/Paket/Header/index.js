import React, { useState, useEffect } from "react";
import Background from "../../../assets/volcano-3779159_1280.png";

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
    height: isMobile ? 280 : 500, // Tambah tinggi untuk desktop
    overflow: "hidden",
  };

  const textStyle = {
    color: "#FFFCFC",
    fontSize: isMobile ? 28 : 80, // Ukuran font lebih besar
    fontFamily: "Beiruti",
    fontWeight: "700",
    position: "absolute",
    top: isMobile ? 15 : 80, // Jarak dari atas lebih jauh di desktop
    left: isMobile ? 25 : 80, // Padding lebih besar di desktop
    paddingRight: isMobile ? 25 : 80,
    zIndex: 1,
    maxWidth: isMobile ? "85%" : "65%", // Teks lebih lebar di desktop
  };

  const paragraphStyle = {
    color: "#FFFFFF",
    fontSize: isMobile ? 16 : 30, // Teks paragraf lebih besar
    fontWeight: 50,
    fontFamily: "Poppins",
    width: isMobile ? "100%" : "75%", // Sesuaikan lebar teks
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
        Layanan
        <p style={paragraphStyle}>
          Temukan Keajaiban Alam Bersama Kami dan Rasakan sensasi mendaki gunung
          dengan kenyamanan dan fasilitas lengkap. Pilih paket favoritmu dan
          biarkan kami mengurus sisanya.
        </p>
      </div>
    </header>
  );
}

export default Header;
