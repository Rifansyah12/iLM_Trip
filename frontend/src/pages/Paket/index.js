import React from "react";
import logoImage from "../../assets/logo/Logo_trip.png";
import ContentImage from "../../assets/konten/konten.png";
import bgImage from "../../assets/konten/bgkonten.png";

const Paket = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`, // URL gambar
        backgroundSize: "cover", // Menyesuaikan ukuran gambar agar penuh
        backgroundPosition: "center", // Posisi gambar di tengah
        backgroundRepeat: "no-repeat", // Menghindari pengulangan gambar
        padding: "50px 20px",
      }}
    >
      {/* LogoTrip */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <img
          src={logoImage}
          alt="LogoTrip"
          style={{
            width: "100%",
            maxWidth: 500, // Ukuran maksimum untuk gambar
            height: "auto", // Proporsi tetap
          }}
        />
      </div>

      {/* Konten */}
      {[
        {
          title: "Private Trip",
          text: "Private Trip menawarkan perjalanan pribadi yang penuh kenyamanan, memberi Anda kesempatan untuk menjelajahi pegunungan tanpa gangguan dalam suasana yang lebih tenang dan eksklusif.",
          image: "https://via.placeholder.com/100",
          reverse: false,
        },
        {
          title: "Open Trip",
          text: "Open Trip memungkinkan Anda untuk bergabung dengan grup dalam perjalanan yang lebih terjangkau, tetapi tetap menawarkan pengalaman yang luar biasa.",
          image: "https://via.placeholder.com/100",
          reverse: true,
        },
        {
          title: "Family Trip",
          text: "Family Trip dirancang khusus untuk keluarga yang ingin menikmati waktu bersama dalam perjalanan yang nyaman dan penuh kenangan.",
          image: "https://via.placeholder.com/100",
          reverse: false,
        },
        {
          title: "Gathering Kantor",
          text: "Gathering Kantor memberikan kesempatan bagi perusahaan untuk menyelenggarakan acara atau perjalanan bersama rekan kerja dalam suasana yang menyenangkan.",
          image: "https://via.placeholder.com/100",
          reverse: true,
        },
      ].map((feature, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: feature.reverse ? "row-reverse" : "row",
            alignItems: "center",
            marginTop: 30,
            marginBottom: 100, // Jarak antar konten
            maxWidth: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            gap: 20, // Jarak antar elemen
            flexWrap: "wrap", // Membuat responsif
          }}
        >
          <img
            src={ContentImage}
            alt={feature.title}
            style={{
              flex: "1 1 40%", // Ukuran gambar responsif
              width: "300%",
              maxWidth: 300,
              height: "auto", // Proporsi tetap
              border: "2px solid #ffff",
              borderRadius: "10px",
            }}
          />
          <div style={{ flex: "1 1 50%", textAlign: "left" }}>
            <h3
              style={{
                color: "#ffff",
                fontSize: 80,
                position: "relative",
                paddingBottom: "10px",
                marginBottom: "20px",
                display: "inline-block",
              }}
            >
              {feature.title}
              <span
                style={{
                  display: "block",
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#ffff",
                  marginTop: "5px",
                }}
              />
            </h3>
            <p style={{ color: "#ffff", fontSize: 20 }}>{feature.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Paket;
