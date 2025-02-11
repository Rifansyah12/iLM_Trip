import React from "react";
import NewImage from "../../assets/foto_crew/BgAbout.jpg";
import NewImage1 from "../../assets/Gunung/Gede/gede1.jpg";
import NewImage2 from "../../assets/Gunung/Gede/gede2.jpg";
import NewImage3 from "../../assets/Gunung/Gede/gede3.jpg";
import NewImage4 from "../../assets/Gunung/Gede/gede4.jpg";
import NewImage5 from "../../assets/Gunung/Gede/gede3.jpg";
import NewImage6 from "../../assets/Gunung/Gede/gede4.jpg";
import PartnerImage1 from "../../assets/partner/partner1.jpg";
import PartnerImage2 from "../../assets/partner/partner2.jpg";
import PartnerImage3 from "../../assets/partner/partner3.PNG";
import PartnerImage4 from "../../assets/partner/partner4.JPG";
import CustomerImage1 from "../../assets/customer/customer1.jpg";
import CustomerImage2 from "../../assets/customer/customer2.png";
import CustomerImage3 from "../../assets/customer/customer3.jpg";
import CustomerImage4 from "../../assets/customer/customer4.jpg";
import CustomerImage5 from "../../assets/customer/customer5.jpg";

const TentangKami = () => {
  return (
    <div
      style={{
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Bungkus konten dengan background */}
      <div
        style={{
          width: "100%", // Sesuaikan lebar agar responsif
          padding: "40px",
          borderRadius: "10px",
          backgroundImage: `url(${NewImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Lapisan transparan abu-abu */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Efek transparan abu
            borderRadius: "10px",
          }}
        ></div>

        {/* Konten Tentang Kami */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Judul Tentang Kami */}
          <h2
            style={{
              color: "white",
              marginBottom: "50px",
              borderBottom: "2px solid orange",
              display: "inline-block",
              width: "max-content", // Garis bawah sesuai panjang teks
              padding: "8px",
              borderRadius: "8px",
              textAlign: "right", // Geser teks ke kanan
              marginLeft: "40%", // Menggeser ke kanan secara otomatis
              marginRight: "0", // Pastikan tidak ada jarak di sisi kanan
            }}
          >
            About Us
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Video YouTube di sebelah kiri */}
            <div style={{ width: "40%" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/zQreoFMeyCQ"
                title="Il'm Trip Organizer"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Konten di sebelah kanan */}
            <div style={{ width: "50%", textAlign: "right" }}>
              <h2
                style={{
                  fontSize: "40px",
                  textAlign: "left",
                  color: "#40E0D0",
                }}
              >
                Lebih dari Sekadar Pendakian – Ini adalah Perjalanan Menuju
                Kebanggaan dan Keindahan Sejati.
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "justify",
                }}
              >
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
          {/* Gambar Berjejer */}
          <div
            style={{
              display: "grid", // Menggunakan grid untuk pengaturan gambar
              gridTemplateColumns: "repeat(8, 0fr)", // Dua kolom
              gap: "20px", // Menambahkan jarak antar gambar
              marginTop: "50px", // Menambahkan jarak antara gambar dan paragraf
              marginBottom: "50px", // Menambahkan jarak antara gambar dan footer
            }}
          >
            <img
              src={NewImage1}
              alt="Gambar 1"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
              }}
            />
            <img
              src={NewImage2}
              alt="Gambar 2"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
              }}
            />
            <img
              src={NewImage3}
              alt="Gambar 3"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
              }}
            />
            <img
              src={NewImage4}
              alt="Gambar 4"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
              }}
            />
            <img
              src={NewImage5}
              alt="Gambar 4"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
              }}
            />
            <img
              src={NewImage6}
              alt="Gambar 4"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
              }}
            />
          </div>

          {/* Bagian Sponsor */}
          <h2
            style={{
              color: "white",
              marginBottom: "50px",
              borderBottom: "2px solid orange",
              display: "inline-block",
              width: "max-content", // Garis bawah sesuai panjang teks
              padding: "8px",
              borderRadius: "8px",
              textAlign: "right", // Geser teks ke kanan
              marginLeft: "40%", // Menggeser ke kanan secara otomatis
              marginRight: "0", // Pastikan tidak ada jarak di sisi kanan
            }}
          >
            Partner Kami
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Responsif
              gap: "20px",
              padding: "0 50px",
              marginBottom: "50px",
            }}
          >
            <img
              src={PartnerImage1}
              alt="Sponsor 1"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <img
              src={PartnerImage2}
              alt="Sponsor 2"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <img
              src={PartnerImage3}
              alt="Sponsor 3"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <img
              src={PartnerImage4}
              alt="Sponsor 4"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>

          {/* Bagian Customer */}
          <h2
            style={{
              color: "white",
              marginBottom: "50px",
              borderBottom: "2px solid orange",
              display: "inline-block",
              width: "max-content", // Garis bawah sesuai panjang teks
              padding: "8px",
              borderRadius: "8px",
              textAlign: "right", // Geser teks ke kanan
              marginLeft: "40%", // Menggeser ke kanan secara otomatis
              marginRight: "0", // Pastikan tidak ada jarak di sisi kanan
            }}
          >
            Customer
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Responsif
              gap: "20px",
              padding: "0 50px",
              marginBottom: "50px",
            }}
          >
            <img
              src={CustomerImage1}
              alt="Sponsor 1"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <img
              src={CustomerImage2}
              alt="Sponsor 2"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <img
              src={CustomerImage3}
              alt="Sponsor 3"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <img
              src={CustomerImage4}
              alt="Sponsor 4"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <img
              src={CustomerImage5}
              alt="Sponsor 4"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
