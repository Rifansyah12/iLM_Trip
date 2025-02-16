import React, { useState, useEffect } from "react";
import Background from "../../../../assets/Trip/bgprt.png";

function Header({ tripId }) {
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
    height: isMobile ? 280 : 400,
    overflow: "hidden",
  };

  const textStyle = {
    color: "#FFFCFC",
    fontSize: isMobile ? 28 : 70,
    fontFamily: "Beiruti",
    fontWeight: "700",
    wordWrap: "break-word",
    position: "absolute",
    top: isMobile ? 20 : 50,
    left: isMobile ? 20 : 50,
    paddingRight: isMobile ? 20 : 50,
    zIndex: 1,
    maxWidth: isMobile ? "80%" : "50%",
  };

  const paragraphStyle = {
    color: "#FFFFFF",
    fontSize: isMobile ? 16 : 30,
    fontWeight: "50",
    fontFamily: "Poppins",
    width: isMobile ? "100%" : "150%",
    margin: isMobile ? "10px 0" : "20px",
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

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  };

  return (
    <header style={headerStyle}>
      <img style={imageStyle} src={Background} alt="Background" />
      <div style={overlayStyle}></div>

      {/* Bagian teks yang berubah tergantung pada tripId */}
      {tripId === 2 ? (
        <div className="PilihPetualanganAndaCapaiPuncaknya" style={textStyle}>
          PrivateTrip <span style={{ color: "#BDC3C7" }}>LUXURY</span>
          <p
            style={{
              color: "#ffff",
              fontSize: 30,
              fontWeight: "50",
              fontFamily: "Poppins",
              width: "150%",
              margin: "20px",
              left: 50,
              textAlign: "left",
            }}
          >
            Nikmati petualangan mendaki yang eksklusif dengan Paket Private Trip
            kami. Rasakan pengalaman mendaki gunung secara pribadi bersama
            orang-orang terdekat.
          </p>
        </div>
      ) : (
        <div className="PilihPetualanganAndaCapaiPuncaknya" style={textStyle}>
          PrivateTrip <span style={{ color: "#FFD700" }}>PREMIUM</span>
          <p style={paragraphStyle}>
            Nikmati petualangan mendaki yang eksklusif dengan Paket Private Trip
            kami. Rasakan pengalaman mendaki gunung secara pribadi bersama
            orang-orang terdekat.
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;
