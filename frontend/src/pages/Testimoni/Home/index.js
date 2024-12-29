import React, { useState } from "react";

const Kontak = () => {
  return (
    <>
      <div style={{ padding: "30px", backgroundColor: "#222222" }}>
        <h2 style={{ textAlign: "center", color: "#ffff", fontSize: "80px" }}>
          Testimonial
        </h2>

        <p style={{ textAlign: "center", color: "#ffff", fontSize: "40px" }}>
          Pengalaman tak terlupakan
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          backgroundColor: "#222222",
        }}
      >
        {/* Konten Testimonial */}
        <div
          style={{
            width: 500,
            height: 300,
            background: "#FFFFFF",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Foto Profil */}
          <img
            src="https://via.placeholder.com/100" // Ganti dengan URL foto profil
            alt="Foto Profil"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />

          {/* Nama */}
          <h3 style={{ margin: "0", color: "#333", fontSize: "20px" }}>
            Nama Pelanggan
          </h3>

          {/* Komentar */}
          <p
            style={{
              textAlign: "center",
              margin: "10px 0 20px 0",
              color: "#555",
              fontSize: "16px",
              lineHeight: "1.5",
            }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            nunc eu orci consectetur commodo nec non lorem."
          </p>

          {/* Rating Bintang */}
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFD700"
                style={{ width: "24px", height: "24px" }}
              >
                <path d="M12 .587l3.668 7.429 8.332 1.151-6.064 5.688 1.528 8.145L12 18.896l-7.464 3.804 1.528-8.145-6.064-5.688 8.332-1.151z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;
