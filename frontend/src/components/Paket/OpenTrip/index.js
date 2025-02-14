import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// Import semua gambar yang digunakan
import SampleImage1 from "../../../assets/Documentasi/OpenTrip/DO1.jpg";
import SampleImage2 from "../../../assets/Documentasi/OpenTrip/DO2.jpg";
import SampleImage3 from "../../../assets/Documentasi/OpenTrip/DO3.jpg";
import Merbabu from "../../../assets/Gunung/Merbabu/merbabu1.jpg";

const OpenTrip = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false); // State untuk modal
  const [modalImage, setModalImage] = useState(""); // State untuk gambar yang ditampilkan di modal
  const { id_layanan } = useParams();
  const [destinasi, setDestinasi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();


  useEffect(() => {
    const fetchDestinasi = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getDestinasiByIdMountrip/${id_layanan}`);
        setDestinasi(response.data);
      } catch (error) {
        setError("Data tidak ditemukan atau terjadi kesalahan pada server");
      } finally {
        setLoading(false);
      }
    };
    fetchDestinasi();
  }, [id_layanan]);

  // Fungsi untuk membuka modal
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  return (
    <section
      style={{
        backgroundColor: "#222222", // Warna latar abu-abu gelap
        color: "#fff", // Warna teks putih
        padding: "50px", // Padding untuk tata letak rapi
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
      }}
    >
      {/* Judul */}
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "20px",
          textAlign: "left", // Teks berada di sebelah kiri
          paddingBottom: "10px", // Memberi jarak antara teks dan garis
          fontFamily: "'Belanosima', sans-serif",
        }}
      >
        Temukan Destinasi Impian Anda
      </h1>

      {/* Kolom Pencarian */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
          gap: "10px",
          maxWidth: "600px", // Batas lebar pencarian
        }}
      >
        <input
          type="text"
          placeholder="Cari destinasi..."
          style={{
            flex: 1,
            padding: "12px",
            fontSize: "18px",
            border: "2px solid #FA8806",
            borderRadius: "5px",
            outline: "none",
          }}
        />
        <button
          style={{
            padding: "12px 20px",
            fontSize: "18px",
            backgroundColor: "#FA8806",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "'Belanosima', sans-serif",
          }}
        >
          Cari
        </button>
      </div>

      <h1
        style={{
          fontSize: "50px",
          marginBottom: "20px",
          textAlign: "center",
          borderBottom: "4px solid #ffff",
          paddingBottom: "10px",
          display: "inline-block", // Tambahkan ini agar garis bawah sesuai panjang teks
          fontFamily: "'Belanosima', sans-serif",
        }}
      >
        LAYANAN MOUNTAIN TRIP :
      </h1>
      {/* content trip Merbabu */}
      <div
        style={{
          maxWidth: "800px", // Menentukan lebar maksimum konten
          margin: "0 auto", // Membuat konten berada di tengah secara horizontal
        }}
      >
        
      {destinasi.map((destination, index) => (
        <div
          key={index}
          style={{ maxWidth: "800px", margin: "0 auto", marginBottom: "50px" }}
        >
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "10px",
                borderBottom: "2px solid #ffff",
                display: "inline-block",
                paddingBottom: "5px",
                width: "fit-content",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              {destination.nama_gunung}
            </h2>
            <p
              style={{
                fontSize: "36px",
                marginTop: "10px",
                color: "#ccc",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              {destination.lokasi}
            </p>
          </div>

          <div
  style={{
    display: "flex",
    flexDirection: "row", // Biar tetap horizontal
    alignItems: "flex-start", // Sejajarkan dari atas
    gap: "20px", // Tambahkan jarak antar elemen
  }}
>

<div style={{ flex: 1, textAlign: "left" }}>

              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "100px",
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                {destination.keterangan}
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "left" }}>

              <img
  src={`http://localhost:5000/images/Destinasi/${destination.foto}`}
  alt={destination.nama_gunung}
  style={{
    width: "300px",
    height: "300px",
    borderRadius: "10px",
    objectFit: "cover",
    cursor: "pointer",
  }}
  onClick={() => openModal(destination.foto || Merbabu)}
/>

              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "100px",
                  fontFamily: "'Belanosima', sans-serif",
                  maxWidth: "100%", // Pastikan teks tidak menyempit terlalu kecil
                }}
              >
                {destination.paket}
              </p>
            </div>
          </div>

          <div
            style={{ textAlign: "center", marginTop: "20px", paddingBottom: "20px" }}
          >
            <button
              onClick={() =>
                navigate(
                  `/Paket/OpenTrip/Gunung/merbabu/${destination.id}`
                )
              }
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                backgroundColor: "#FA8806",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontFamily: "'Belanosima', sans-serif",
              }}
            >
              IDR. {destination.mountaintrip?.harga_paket || "500.000"} / Jelajahi
            </button>
            <div
              style={{ marginTop: "10px", borderTop: "1px solid #ccc", width: "100%" }}
            ></div>
          </div>
        </div>
      ))}
      </div>
      {/* end content trip Merbabu*/}
    </section>
  );
};

export default OpenTrip;
