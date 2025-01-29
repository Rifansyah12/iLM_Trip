import React from "react";

const TentangKami = () => {
  return (
    <div
      style={{
        backgroundColor: "#222222", // Warna latar belakang hitam
        color: "#ffffff", // Warna teks putih
        minHeight: "100vh", // Pastikan latar belakang mengisi seluruh tinggi layar
        display: "flex", // Untuk memastikan konten disusun secara vertikal
        flexDirection: "column", // Tata letak vertikal
      }}
    >
      <br />
      <br />
      <br />

      {/* Judul Tentang Kami */}
      <h1 style={{ marginLeft: "50px", fontSize: "80px" }}>Tentang Kami</h1>
      <hr
        style={{
          width: "30%",
          border: "none",
          borderTop: "2px solid #ffffff", // Warna garis putih
          margin: "10px 0",
          marginLeft: "50px",
        }}
      />
      <p
        style={{
          fontSize: "30px",
          marginLeft: "50px",
          maxWidth: "60%", // Maksimum 60% dari lebar layar
          textAlign: "justify", // Teks rata kiri-kanan
          marginRight: "auto",
          marginBottom: "100px", // Jarak bawah untuk paragraf pertama
        }}
      >
        Il'm Trip Organizer adalah perusahaan yang menyediakan layanan wisata
        pendakian gunung di Indonesia. Perusahaan ini menawarkan berbagai paket
        seperti private trip, open trip, family trip, dan gathering kantor,
        dengan pilihan fasilitas medium, premium, dan luxury trip.
      </p>

      {/* Judul Apa Itu Il'm */}
      <h1 style={{ marginLeft: "50px", marginTop: "30px", fontSize: "80px" }}>
        Apa Itu Il'm?
      </h1>
      <hr
        style={{
          width: "30%",
          border: "none",
          borderTop: "2px solid #ffffff", // Warna garis putih
          margin: "10px 0",
          marginLeft: "50px",
        }}
      />
      <p
        style={{
          fontSize: "30px",
          marginLeft: "50px",
          maxWidth: "60%", // Maksimum 60% dari lebar layar
          textAlign: "justify", // Teks rata kiri-kanan
          marginRight: "auto",
        }}
      >
        Selamat datang di Il'm Trip Organizer <br />
        <br />
        Kami adalah perusahaan yang berdedikasi dalam menyajikan pengalaman
        wisata pendakian gunung yang tak terlupakan di Indonesia. Dengan fokus
        pada wisata minat khusus, Il'm Trip Organizer menawarkan berbagai paket
        pendakian yang dirancang untuk memenuhi kebutuhan berbagai kalangan,
        mulai dari private trip untuk pendakian eksklusif, open trip untuk
        bertemu dengan pendaki lain, family trip untuk pengalaman keluarga,
        hingga gathering kantor yang mempererat kebersamaan.
        <br />
        <br /> Kami menyediakan pilihan fasilitas yang variatif, mulai dari
        medium trip dengan kenyamanan standar, premium trip untuk pengalaman
        lebih lengkap, hingga luxury trip yang menghadirkan kemewahan di alam
        bebas. Dengan komitmen terhadap keselamatan, pelayanan berkualitas, dan
        pengalaman seru, kami siap mengajak Anda menaklukkan puncak-puncak
        tertinggi dengan penuh kebanggaan. Temukan petualangan mendaki terbaik
        bersama Il'm Trip Organizer dan wujudkan mimpi pendakian Anda.
      </p>

      {/* Gambar Berjejer */}
      <div
        style={{
          display: "grid", // Menggunakan grid untuk pengaturan gambar
          gridTemplateColumns: "repeat(2, 1fr)", // Dua kolom
          gap: "20px", // Menambahkan jarak antar gambar
          marginTop: "50px", // Menambahkan jarak antara gambar dan paragraf
          marginBottom: "50px", // Menambahkan jarak antara gambar dan footer
        }}
      >
        <img
          src="https://via.placeholder.com/200"
          alt="Gambar 1"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
          }}
        />
        <img
          src="https://via.placeholder.com/200"
          alt="Gambar 2"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
          }}
        />
        <img
          src="https://via.placeholder.com/200"
          alt="Gambar 3"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "10px", // Membuat gambar memiliki sudut yang tumpul
          }}
        />
        <img
          src="https://via.placeholder.com/200"
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
        style={{ marginLeft: "50px", fontSize: "60px", marginBottom: "20px" }}
      >
        Sponsor Kami
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
          src="https://via.placeholder.com/150"
          alt="Sponsor 1"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Sponsor 2"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Sponsor 3"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Sponsor 4"
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default TentangKami;
