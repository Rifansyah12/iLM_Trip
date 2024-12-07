import React from "react";
import PrivateTripImage from "../../../assets/konten/konten.png";
import OpenTripImage from "../../../assets/konten/konten.png";
import FamilyTripImage from "../../../assets/konten/konten.png";
import GatheringImage from "../../../assets/konten/konten.png";

const Paket = () => {
  return (
    <section
      style={{
        backgroundColor: "#222222", // Warna abu-abu
        padding: "50px", // Tambahkan padding agar konten terlihat rapi
        display: "flex", // Gunakan flexbox untuk mengatur tata letak
        flexDirection: "column", // Atur agar semua konten tersusun secara vertikal
        alignItems: "center", // Pusatkan secara horizontal
      }}
    >
      {/* Konten */}
      {[
        {
          title: "Private Trip",
          text: "Nikmati petualangan mendaki yang eksklusif dengan Paket Private Trip kami. Rasakan pengalaman mendaki gunung secara pribadi bersama orang-orang terdekat.Private Trip menawarkan perjalanan pribadi yang penuh kenyamanan, memberi Anda kesempatan untuk menjelajahi pegunungan tanpa gangguan dalam suasana yang lebih tenang dan eksklusif.",
          image: PrivateTripImage,
        },
        {
          title: "Open Trip",
          text: "Bergabunglah dengan para pecinta alam dari berbagai penjuru dalam Open Trip kami. Temukan teman baru, rasakan kebersamaan,dan jelajahi keindahan gunung-gunung Indonesia.Open Trip memungkinkan Anda untuk bergabung dengan grup dalam perjalanan yang lebih terjangkau, tetapi tetap menawarkan pengalaman yang luar biasa.",
          image: OpenTripImage,
        },
        {
          title: "Family Trip",
          text: "Ciptakan kenangan tak terlupakan bersama keluarga dalam Family Trip kami. Pendakian yang dirancang khusus untuk segala usia, memastikan keamanan, kenyamanan, dan kebahagiaan bersama keluarga tercinta.Family Trip dirancang khusus untuk keluarga yang ingin menikmati waktu bersama dalam perjalanan yang nyaman dan penuh kenangan.",
          image: FamilyTripImage,
        },
        {
          title: "Gathering Kantor",
          text: "Perkuat hubungan kerja tim Anda dengan Paket Gathering Kantor. Menghadirkan petualangan mendaki yang menyenangkan dan membangun semangat tim, sembari menikmati keindahan alam Indonesia.Gathering Kantor memberikan kesempatan bagi perusahaan untuk menyelenggarakan acara atau perjalanan bersama rekan kerja dalam suasana yang menyenangkan.",
          image: GatheringImage,
        },
      ].map((feature, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row", // Posisi teks di kiri dan gambar di kanan
            alignItems: "center",
            gap: "300px", // Jarak antar elemen
            margin: "30px auto", // Margin antar konten
            maxWidth: "90%", // Batas lebar konten
            flexWrap: "wrap", // Membuat responsif
          }}
        >
          {/* Konten Teks */}
          <div
            style={{
              flex: "1 1 50%", // Menentukan ruang untuk teks
              textAlign: "left",
              maxWidth: "500px", // Batas lebar maksimum teks
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontSize: "50px",
                marginBottom: "10px",
              }}
            >
              {feature.title}
            </h3>
            <p style={{ color: "#fff", fontSize: "20px" }}>{feature.text}</p>
            {/* Tombol */}
            <button
              style={{
                marginTop: "15px", // Jarak dari paragraf
                padding: "10px 50px", // Ukuran tombol
                fontSize: "25px", // Ukuran font
                backgroundColor: "#FA8806", // Warna tombol hijau
                color: "#fff", // Warna teks putih
                border: "50px", // Hilangkan border
                borderRadius: "5px",
                marginLeft: "auto",
                cursor: "pointer", // Pointer saat hover
              }}
              onClick={() => alert(`Anda memilih: ${feature.title}`)} // Fungsi sederhana untuk contoh
            >
              Jelajahi
            </button>
          </div>
          {/* Gambar */}
          <img
            src={feature.image}
            alt={feature.title}
            style={{
              flex: "1 1 40%", // Gambar responsif
              maxWidth: "300px",
              height: "auto", // Proporsi gambar tetap
              border: "20px",
              borderRadius: "20px",
            }}
          />
        </div>
      ))}
      <hr
        style={{
          width: "90%", // Sesuaikan lebar garis
          border: "1px solid #fff", // Warna garis
          margin: "20px auto", // Jarak dari elemen sebelumnya
        }}
      />

      {/* Tambahkan foto-foto Kenangan  */}
      <div
        style={{
          width: "100%", // Lebar penuh container
          textAlign: "center", // Judul di tengah
          color: "#fff", // Warna teks putih
          marginBottom: "50px", // Jarak antara judul dan grid
        }}
      >
        <h2 style={{ fontSize: "50px", margin: "0" }}>
          Kenangan Perjalanan Bersama Kami
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 2 kolom
          gridGap: "20px", // Jarak antar gambar
          marginTop: "20px",
          maxWidth: "90%", // Batas lebar
        }}
      >
        {[
          PrivateTripImage,
          OpenTripImage,
          FamilyTripImage,
          GatheringImage,
          PrivateTripImage,
          OpenTripImage,
        ].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Foto Kenangan ${index + 1}`}
            style={{
              width: "100%", // Gambar menyesuaikan kolom
              height: "auto", // Menjaga proporsi gambar
              borderRadius: "0px", // Membuat sudut melengkung
              border: "0px solid #fff", // Tambahkan border putih
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Paket;
