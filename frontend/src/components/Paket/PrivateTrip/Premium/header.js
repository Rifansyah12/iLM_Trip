import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../../../../assets/Trip/bgprt.png";

function Header() {
  // Mengambil lokasi saat ini dari URL
  const location = useLocation();
  // Memecah URL berdasarkan "/" dan mengambil segmen terakhir sebagai tripId
  const pathParts = location.pathname.split("/");
  const tripIdFromPath = pathParts[pathParts.length - 1];
  console.log("tripIdFromPath:", tripIdFromPath);

  // Konversi ke tipe number
  const tripNumber = parseInt(tripIdFromPath, 10);
  console.log("tripNumber:", tripNumber);

  // Data untuk masing-masing paket berdasarkan tripId
  const tripData = {
    1: {
      title: "PREMIUM",
      color: "#FFD700",
      description:
        "Nikmati perjalanan mendaki dengan kenyamanan ekstra dalam Paket Premium kami.",
    },
    2: {
      title: "LUXURY",
      color: "#BDC3C7",
      description:
        "Rasakan pengalaman mendaki dengan fasilitas mewah dan layanan eksklusif dalam Paket Luxury.",
    },
  };

  const currentTrip = tripData[tripNumber] || tripData[1];
  console.log("currentTrip:", currentTrip);

  // Mengatur state untuk responsive design (mobile/desktop)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? 280 : 400,
        overflow: "hidden",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        src={Background}
        alt="Background"
      />
      <div
        style={{
          position: "absolute",
          top: isMobile ? 20 : 50,
          left: isMobile ? 20 : 50,
          paddingRight: isMobile ? 20 : 50,
          zIndex: 1,
          maxWidth: isMobile ? "80%" : "50%",
          color: "#FFFCFC",
          fontSize: isMobile ? 28 : 70,
          fontFamily: "Beiruti",
          fontWeight: "700",
        }}
      >
        PrivateTrip{" "}
        <span style={{ color: currentTrip.color }}>{currentTrip.title}</span>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: isMobile ? 16 : 30,
            fontWeight: "50",
            fontFamily: "Poppins",
            width: isMobile ? "100%" : "150%",
            margin: isMobile ? "10px 0" : "20px",
            textAlign: "left",
          }}
        >
          {currentTrip.description}
        </p>
      </div>
    </header>
  );
}

export default Header;
