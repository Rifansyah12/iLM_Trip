import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background1 from "../../../assets/Trip/bg2.png";
import Background2 from "../../../assets/Gunung/Merbabu/merbabu1.jpg";
import Background3 from "../../../assets/Gunung/Merbabu/merbabu2.jpg";

function Header() {
  const [currentImage, setCurrentImage] = useState(Background1);
  const location = useLocation();

  // Mapping judul berdasarkan URL
  const getTitleFromPath = (path) => {
    if (path.includes("/Paket/OpenTrip/2")) return "Open Trip";
    if (path.includes("/Paket/OpenTrip/3")) return "Family Trip";
    if (path.includes("/Paket/OpenTrip/4")) return "Gathering Kantor";
    return "Open Trip"; // Default jika tidak cocok
  };

  const [title, setTitle] = useState(getTitleFromPath(location.pathname));

  useEffect(() => {
    setTitle(getTitleFromPath(location.pathname));
  }, [location.pathname]);

  const backgroundImages = [Background1, Background2, Background3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = backgroundImages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        height: 400,
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
        src={currentImage}
        alt="Background"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div
        style={{
          color: "#FFFCFC",
          fontSize: 70,
          fontFamily: "Beiruti",
          fontWeight: "700",
          position: "absolute",
          top: 50,
          left: 50,
          zIndex: 1,
          maxWidth: "50%",
        }}
      >
        {title}
        <p
          style={{
            color: "#ffff",
            fontSize: 30,
            fontWeight: "50",
            fontFamily: "Poppins",
            width: "150%",
            margin: "20px",
            textAlign: "left",
          }}
        >
          Nikmati perjalanan penuh petualangan yang membawa Anda pada pengalaman
          seru, layanan berkualitas, dan cerita baru yang tak akan terlupakan.
        </p>
      </div>
    </header>
  );
}

export default Header;
