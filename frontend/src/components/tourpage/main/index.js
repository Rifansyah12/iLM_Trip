import React, { useState } from "react";
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const sliderStyle = {
    position: "relative",
    width: "100%",
    height: 671,
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const textContainerStyle = {
    color: "#FFFCFC",
    fontSize: 70,
    fontFamily: "Beiruti",
    fontWeight: "700",
    position: "absolute",
    top: 180,
    left: 300,
    zIndex: 2,
    maxWidth: "50%",
  };

  const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 3,
  };

  const leftButtonStyle = {
    ...buttonStyle,
    left: 100,
    backgroundColor: "#FFFFFF", // Latar belakang tetap putih
    borderColor: "#FFA629", // Warna petunjuk
    borderWidth: 4, // Ketebalan garis petunjuk
    color: "#FFA629",
    fontSize: 80,
    paddingBottom: "15px", // Geser teks ke atas
    fontFamily: "Calibri, Sans-serif",
  };

  const rightButtonStyle = {
    ...buttonStyle,
    right: 100,
    backgroundColor: "#FFFFFF", // Latar belakang tetap putih
    borderColor: "#FFA629", // Warna petunjuk
    borderWidth: 10, // Ketebalan garis petunjuk
    color: "#FFA629", // Warna teks pada tombol
    fontSize: 80,
    paddingBottom: "15px",
    fontFamily: "Calibri, Sans-serif",
  };

  return (
    <header style={sliderStyle}>
      <img
        style={imageStyle}
        src={slides[currentSlide].image}
        alt={`Slide ${currentSlide + 1}`}
      />
      <div style={overlayStyle}></div>
      <div style={textContainerStyle}>
        {slides[currentSlide].text}
        <p
          style={{
            color: "#ffff",
            fontSize: 30,
            fontWeight: "50",
            fontFamily: "Poppins",
            marginTop: 20,
            textAlign: "left",
          }}
        >
          {slides[currentSlide].subText}
        </p>
        <Link
          to={slides[currentSlide].link}
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 50px",
            fontSize: "25px",
            backgroundColor: "#FA8806",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Explore
        </Link>
      </div>
      <button style={leftButtonStyle} onClick={prevSlide}>
        &#8249; {/* Tanda panah kiri */}
      </button>
      <button style={rightButtonStyle} onClick={nextSlide}>
        &#8250; {/* Tanda panah kanan */}
      </button>
    </header>
  );
}

export default TourPage;
