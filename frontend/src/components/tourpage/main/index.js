import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../../../assets/volcano-3779159_1280.png";
import Background1 from "../../../assets/konten/pantai.png";

function TourPage() {
  const slides = [
    {
      id: 1,
      image: Background,
      text: "Mountain Trip",
      subText:
        "Jadikan liburanmu lebih bermakna dengan menyatu bersama alam. Bersama Il’m Trip Organizer, petualangan ke puncak gunung menjadi lebih mudah dan aman!",
      link: "/Paket/Home",
    },
    {
      id: 2,
      image: Background1,
      text: "Another Trip",
      subText:
        "Jadikan liburanmu lebih bermakna dengan menyatu bersama alam. Bersama Il’m Trip Organizer, petualangan ke tempat yang ingin anda kunjungi menjadi lebih mudah dan aman!",
      link: "/Paket/Another",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  let touchStartX = 0;
  let touchEndX = 0;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fungsi untuk mengganti slide dengan swipe
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      nextSlide(); // Swipe kiri (geser ke kanan)
    } else if (touchEndX - touchStartX > 50) {
      prevSlide(); // Swipe kanan (geser ke kiri)
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
      onTouchStart={isMobile ? handleTouchStart : null}
      onTouchEnd={isMobile ? handleTouchEnd : null}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
        src={slides[currentSlide].image}
        alt={`Slide ${currentSlide + 1}`}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          color: "#FFFCFC",
          fontSize: isMobile ? "9vw" : "5vw",
          fontFamily: "Beiruti",
          fontWeight: "700",
          position: "absolute",
          top: isMobile ? "25%" : "35%",
          left: isMobile ? "5%" : "15%",
          zIndex: 2,
          maxWidth: isMobile ? "90%" : "50%",
        }}
      >
        {slides[currentSlide].text}
        <p
          style={{
            color: "#ffff",
            fontSize: isMobile ? "5vw" : "2vw",
            fontWeight: "400",
            fontFamily: "Poppins",
            marginTop: "20px",
            textAlign: "left",
          }}
        >
          {slides[currentSlide].subText}
        </p>
        <Link
          to={slides[currentSlide].link}
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: isMobile ? "15px 40px" : "20px 60px",
            fontSize: isMobile ? "5vw" : "2vw",
            backgroundColor: "#FA8806",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Explore
        </Link>
      </div>

      {/* Tombol hanya tampil di desktop */}
      {!isMobile && (
        <>
          <button
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#FFFFFF",
              borderColor: "#FFA629",
              borderWidth: 4,
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 3,
              left: 50,
              fontSize: "3vw",
              color: "#FFA629",
              paddingBottom: "1%",
            }}
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#FFFFFF",
              borderColor: "#FFA629",
              borderWidth: 4,
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 3,
              right: 50,
              fontSize: "3vw",
              color: "#FFA629",
              paddingBottom: "1%",
            }}
            onClick={nextSlide}
          >
            &#8250;
          </button>
        </>
      )}
    </header>
  );
}

export default TourPage;
