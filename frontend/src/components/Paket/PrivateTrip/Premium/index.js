import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// Import semua gambar yang digunakan

import Merbabu from "../../../../assets/Gunung/Merbabu/merbabu1.jpg";

const OpenTrip = () => {
  const navigate = useNavigate();
  const { id_privatetrip } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [destinasi, setDestinasi] = useState([]);

  useEffect(() => {
    const fetchDestinasiByIdPrivate = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getDestinasiByIdPrivate/${id_privatetrip}`);
        setDestinasi(response.data || []);
      } catch (error) {
        console.error("Error fetching destinasi:", error);
        setDestinasi([]);
      }
    };

    if (id_privatetrip) {
      fetchDestinasiByIdPrivate();
    }
  }, [id_privatetrip]);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

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

      <div
  style={{
    display: "flex",
    justifyContent: "center", // Pusatkan kontennya
    alignItems: "flex-start",
    margin: "20px auto",
    maxWidth: "1600px",
  }}
>
  {/* Content trip Merbabu */}
  {destinasi.length > 0 ? (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: destinasi.length > 5 ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      {destinasi.map((item) => (
        <div
          key={item.id}
          style={{
            textAlign: "center",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#333",
          }}
        >
          <h2 style={{ fontSize: "24px", fontFamily: "'Belanosima', sans-serif" }}>
            {item.nama_gunung}
          </h2>
          <p style={{ fontSize: "18px", color: "#ccc" }}>{item.lokasi}</p>
          <img
            src={`http://localhost:5000/images/Destinasi/${item.foto}`}
            alt={item.nama_gunung}
            style={{
              width: "100%",
              height: "180px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            onClick={() => openModal(item.foto)}
          />
          <button
           onClick={() => navigate(`/FormDaftar/${item.id}`)}
            style={{
              backgroundColor: "#FA8806",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Harga: IDR {item.harga}
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p style={{ fontSize: "18px", color: "#ccc" }}>Destinasi tidak ditemukan.</p>
  )}
</div>


      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal} // Klik luar modal untuk menutup
        >
          <img
            src={modalImage}
            alt="Modal View"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default OpenTrip;
