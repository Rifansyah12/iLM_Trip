import React, { useState, useEffect } from "react";

const AutoSlider = () => {
  const reviews = [
    {
      rating: 4,
      review:
        "Cerita ini benar-benar memberikan inspirasi dan wawasan baru tentang pentingnya pemanfaatan lahan di pedesaan.",
      username: "@username123",
      profileImg: "https://via.placeholder.com/50",
      image: "https://via.placeholder.com/400",
    },
    {
      rating: 5,
      review:
        "Sangat menginspirasi! Saya belajar banyak tentang bagaimana memanfaatkan sumber daya lokal untuk bertani.",
      username: "@farmlover",
      profileImg: "https://via.placeholder.com/50",
      image: "https://via.placeholder.com/400",
    },
    {
      rating: 3,
      review:
        "Konten ini cukup menarik, tapi saya berharap ada lebih banyak contoh praktis.",
      username: "@ruraldreamer",
      profileImg: "https://via.placeholder.com/50",
      image: "https://via.placeholder.com/400",
    },
    {
      rating: 5,
      review:
        "Luar biasa! Ini adalah jenis cerita yang membuat saya ingin mencoba bertani di desa.",
      username: "@greenthumb",
      profileImg: "https://via.placeholder.com/50",
      image: "https://via.placeholder.com/400",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Setiap 3 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, [reviews.length]);

  return (
    <div style={{ padding: "0 20px", backgroundColor: "#f7f4e7" }}>
      {" "}
      {/* Menambahkan jarak kiri dan kanan */}
      {/* Konten Slider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* Bagian Kiri: Rating, Deskripsi, Akun */}
        <div style={{ flex: "1 1 45%", textAlign: "left", marginLeft: 100 }}>
          <div style={{ marginBottom: "10px" }}>
            <span style={{ color: "#FFD700", fontSize: "40px" }}>
              {"★".repeat(reviews[currentIndex].rating)}
              {"☆".repeat(5 - reviews[currentIndex].rating)}
            </span>
            <p style={{ fontSize: "14px", color: "#164F4C" }}>
              ({reviews[currentIndex].rating}.0 dari 5 berdasarkan 20 ulasan)
            </p>
          </div>
          <p
            style={{
              fontSize: "16px",
              fontFamily: "Poppins",
              color: "#164F4C",
              marginBottom: "20px",
              lineHeight: "1.5",
            }}
          >
            "{reviews[currentIndex].review}"
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={reviews[currentIndex].profileImg}
              alt="Profil"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              }}
            />
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                color: "#164F4C",
                fontWeight: "600",
              }}
            >
              {reviews[currentIndex].username}
            </p>
          </div>
        </div>

        {/* Bagian Gambar: Posisi di Sebelah Kanan */}
        <div style={{ flex: "1 1 45%", textAlign: "center" }}>
          <img
            src={reviews[currentIndex].image}
            alt="Gambar Rating"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>
      {/* Indikator Lingkaran */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "40px",
        }}
      >
        {reviews.map((_, index) => (
          <div
            key={index}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#FFD700" : "#CCCCCC",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
