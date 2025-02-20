import React from "react";
import NewImage from "../../assets/foto_crew/BgAbout.jpg";
import NewImage1 from "../../assets/Gunung/Gede/gede1.jpg";
import NewImage2 from "../../assets/Gunung/Sumbing/sumbing1.jpg";
import NewImage3 from "../../assets/Gunung/Sumbing/sumbing2.jpg";
import NewImage4 from "../../assets/Gunung/Sumbing/sumbing3.jpg";
import NewImage5 from "../../assets/Gunung/Sumbing/sumbing4.JPG";
import NewImage6 from "../../assets/Gunung/Sindoro/sindoro2.jpg";
import NewImage7 from "../../assets/Gunung/Sindoro/sindoro3.jpg";
import NewImage8 from "../../assets/Gunung/Sindoro/sindoro4.jpg";

import PartnerImage1 from "../../assets/partner/partner1.jpg";
import PartnerImage2 from "../../assets/partner/partner2.jpg";
import PartnerImage3 from "../../assets/partner/partner3.PNG";
import PartnerImage4 from "../../assets/partner/partner4.JPG";
import CustomerImage1 from "../../assets/customer/customer1.jpg";
import CustomerImage2 from "../../assets/customer/customer2.png";
import CustomerImage3 from "../../assets/customer/customer3.jpg";
import CustomerImage4 from "../../assets/customer/customer4.jpg";
import CustomerImage5 from "../../assets/customer/customer5.jpg";
import PageheaderImage from "../../assets/Gunung/Gede/gede.jpg";

const TentangKami = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.overlay}></div>
        <div style={styles.headerContent}>
          <h1>About Us</h1>
          <nav>
            <ol style={styles.breadcrumb}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>/</li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>/</li>
              <li>About Us</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Tentang Kami Section */}
      <div style={styles.content}>
        <div style={styles.overlay}></div>
        <div style={styles.textContainer}>
          <h2 style={styles.sectionTitle}>ILM TRIP Organizer</h2>
          <div style={styles.flexContainer}>
            {/* Video */}
            <div style={styles.videoContainer}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/zQreoFMeyCQ"
                title="Il'm Trip Organizer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            {/* Deskripsi */}
            <div style={styles.textBox}>
              <h2 style={{ ...styles.highlightText, textAlign: "center" }}>
                Lebih dari Sekadar Pendakian – Ini adalah Perjalanan Menuju
                Kebanggaan dan Keindahan Sejati.
              </h2>
              <p>
                Kami adalah perusahaan yang berdedikasi dalam menyajikan
                pengalaman wisata pendakian gunung yang tak terlupakan di
                Indonesia. Dengan fokus pada wisata minat khusus, Il'm Trip
                Organizer menawarkan berbagai paket pendakian yang dirancang
                untuk memenuhi kebutuhan berbagai kalangan, mulai dari private
                trip untuk pendakian eksklusif, open trip untuk bertemu dengan
                pendaki lain, family trip untuk pengalaman keluarga, hingga
                gathering kantor yang mempererat kebersamaan. Kami menyediakan
                pilihan fasilitas yang variatif, mulai dari medium trip dengan
                kenyamanan standar, premium trip untuk pengalaman lebih lengkap,
                hingga luxury trip yang menghadirkan kemewahan di alam bebas.
                Dengan komitmen terhadap keselamatan, pelayanan berkualitas, dan
                pengalaman seru, kami siap mengajak Anda menaklukkan
                puncak-puncak tertinggi dengan penuh kebanggaan. Temukan
                petualangan mendaki terbaik bersama Il'm Trip Organizer dan
                wujudkan mimpi pendakian Anda.
              </p>
            </div>
          </div>

          {/* Galeri Gambar */}
          <div style={styles.imageGrid}>
            {[
              NewImage1,
              NewImage2,
              NewImage3,
              NewImage4,
              NewImage5,
              NewImage6,
              NewImage7,
              NewImage8,
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gambar ${idx + 1}`}
                style={styles.image}
              />
            ))}
          </div>

          {/* Partner Kami */}
          <h2 style={styles.sectionTitle}>Partner Kami</h2>
          <div style={styles.partnerGrid}>
            {[PartnerImage1, PartnerImage2, PartnerImage3, PartnerImage4].map(
              (img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Partner ${idx + 1}`}
                  style={styles.partnerImage}
                />
              )
            )}
          </div>

          {/* customer Kami */}
          <h2 style={styles.sectionTitle}>Customer</h2>
          <div style={styles.partnerGrid}>
            {[
              CustomerImage1,
              CustomerImage2,
              CustomerImage3,
              CustomerImage4,
              CustomerImage5,
            ].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Partner ${idx + 1}`}
                style={styles.partnerImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* CSS-in-JS */
const styles = {
  container: {
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredTitle: {
    fontSize: "24px",
    color: "#40E0D0",
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  header: {
    width: "100%",
    backgroundImage: `url(${PageheaderImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "60px 20px",
    textAlign: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  headerContent: {
    position: "relative",
    zIndex: 1,
    color: "white",
  },
  breadcrumb: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    gap: "10px",
  },
  content: {
    width: "100%",
    padding: "40px",
    position: "relative",
    backgroundImage: `url(${NewImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  textContainer: {
    position: "relative",
    zIndex: 1,
  },
  sectionTitle: {
    color: "white",
    marginBottom: "10%", // Tambahkan jarak bawah lebih besar
    borderBottom: "2px solid orange",
    display: "block", // Pastikan elemen mengambil seluruh lebar yang tersedia
    padding: "8px",
    borderRadius: "8px",
    textAlign: "center",
    width: "max-content", // Sesuaikan lebar dengan teks
    margin: "0 auto", // Pusatkan elemen secara horizontal
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
  videoContainer: {
    flex: "1 1 400px",
    maxWidth: "600px",
  },
  textBox: {
    flex: "1 1 400px",
    textAlign: "justify",
  },
  highlightText: {
    fontSize: "24px",
    color: "#40E0D0",
    textAlign: "left",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginTop: "30px",
  },
  image: {
    width: "80%",
    height: "auto",
    borderRadius: "10px",
  },
  partnerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "20px",
    padding: "0 20px",
    marginTop: "40px",
  },
  partnerImage: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
};

export default TentangKami;
