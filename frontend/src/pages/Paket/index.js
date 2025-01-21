import React from "react";
import logoImage from "../../assets/logo/Logo_trip.png";
import bgImage from "../../assets/konten/bgkonten.png";
import privateTripImage from "../../assets/Trip/privatetrip.jpg";
import openTripImage from "../../assets/Trip/opentrip.jpg";
import familyTripImage from "../../assets/Trip/Familytrip.jpg";
import gatheringKantorImage from "../../assets/Trip/gatheringtrip.jpg";

const Paket = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "50px 20px",
      }}
    >
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
            maxWidth: 500,
            height: "auto",
          }}
        />
      </div>

      {[
        {
          title: "Private Trip",
          text: "Private Trip menawarkan perjalanan pribadi yang penuh kenyamanan, memberi Anda kesempatan untuk menjelajahi pegunungan tanpa gangguan dalam suasana yang lebih tenang dan eksklusif.",
          image: privateTripImage,
          reverse: false,
        },
        {
          title: "Open Trip",
          text: "Open Trip memungkinkan Anda untuk bergabung dengan grup dalam perjalanan yang lebih terjangkau, tetapi tetap menawarkan pengalaman yang luar biasa.",
          image: openTripImage,
          reverse: true,
        },
        {
          title: "Family Trip",
          text: "Family Trip dirancang khusus untuk keluarga yang ingin menikmati waktu bersama dalam perjalanan yang nyaman dan penuh kenangan.",
          image: familyTripImage,
          reverse: false,
        },
        {
          title: "Gathering Kantor",
          text: "Gathering Kantor memberikan kesempatan bagi perusahaan untuk menyelenggarakan acara atau perjalanan bersama rekan kerja dalam suasana yang menyenangkan.",
          image: gatheringKantorImage,
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
            marginBottom: 100,
            maxWidth: "70%", // Memperkecil lebar total kontainer
            marginLeft: "auto",
            marginRight: "auto",
            gap: 60, // Jarak antara gambar dan teks
            flexWrap: "wrap",
          }}
        >
          <img
            src={feature.image}
            alt={feature.title}
            style={{
              width: 400, // Ukuran tetap untuk lebar
              height: 300, // Ukuran tetap untuk tinggi
              objectFit: "cover", // Proporsi gambar tetap
              border: "2px solid #ffff",
              borderRadius: "10px",
            }}
          />
          <div style={{ flex: "1 1 50%", textAlign: "left" }}>
            <h3
              style={{
                color: "#ffff",
                fontSize: 60,
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
