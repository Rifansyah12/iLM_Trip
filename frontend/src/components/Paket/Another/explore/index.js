import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import semua gambar yang digunakan
import SampleImage1 from "../../../../assets/Gunung/Merbabu/merbabu1.jpg";
import SampleImage2 from "../../../../assets/Gunung/Merbabu/merbabu2.jpg";
import SampleImage3 from "../../../../assets/Gunung/Merbabu/merbabu3.JPG";
import SampleImage4 from "../../../../assets/Gunung/Merbabu/merbabu4.JPG";
import SampleImage5 from "../../../../assets/Gunung/Merbabu/merbabu5.JPG";
import SampleImage6 from "../../../../assets/Gunung/Merbabu/merbabu6.JPG";

const Explore = ({ trip }) => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false); // State untuk modal
  const [modalImage, setModalImage] = useState(""); // State untuk gambar yang ditampilkan di modal
  const [showDetails, setShowDetails] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const maxLength = 150; // Batasi teks awal

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

  const handleKeteranganClick = () => {
    setShowDetails((prevState) => !prevState);
  };

  const styles = {
    quillContent: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#ffffff",
      textAlign: "justify",
      backgroundColor: "#444",
      padding: "15px",
      borderRadius: "5px",
    },
    quillContentH1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    quillContentH2: {
      fontSize: "1.8rem",
      fontWeight: "bold",
    },
    quillContentBold: {
      fontWeight: "bold",
    },
    quillContentList: {
      marginLeft: "20px",
      listStyleType: "disc",
    },
    quillContentOrderedList: {
      marginLeft: "20px",
      listStyleType: "decimal",
    },
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
      <h2>
        <br />
        PAKET MEDIUM TRIP (IDR {trip.harga})
      </h2>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#2c3e50",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {trip?.nama_layanan?.toUpperCase() || "Loading..."}
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#34495e",
            textAlign: "justify",
            marginBottom: "20px",
            whiteSpace: "pre-line", // Menampilkan teks dengan format baris baru
          }}
        >
          {showFullText
            ? trip.deskripsi_layanan.replace(/<\/?[^>]+(>|$)/g, "") // Menghapus tag HTML jika ada
            : trip.deskripsi_layanan
                .substring(0, maxLength)
                .replace(/<\/?[^>]+(>|$)/g, "") + "..."}
        </p>

        <button
          onClick={() => setShowFullText(!showFullText)}
          style={{
            backgroundColor: "#3498db",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showFullText ? "Tampilkan Lebih Sedikit" : "Lihat Selengkapnya"}
        </button>
      </div>
      <br />

      {/* Informasi Tambahan */}
      <div
        style={{
          backgroundColor: "#333",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
          lineHeight: "1.8",
          color: "#fff",
        }}
      >
        {showDetails && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ flex: "1" }}>
              <h2 style={{ color: "#FA8806" }}>Keterangan Layanan</h2>
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{ __html: trip.keterangan_layanan }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tombol Navigasi */}
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => navigate("/")} // Navigasi kembali ke halaman utama
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#FA8806",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Kembali ke Beranda
        </button>

        <button
          onClick={() => navigate(`/FormDaftar/${trip.id}`)} // Navigasi ke halaman booking
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#0066FF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Pesan Sekarang
        </button>

        <button
          onClick={handleKeteranganClick} // Navigasi ke halaman booking
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#32CD32",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Keterangan
        </button>
      </div>
      {/* Galeri Foto */}

      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#111",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            color: "#FA8806",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          Galeri Foto Perjalanan
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {/* Tambahkan onClick ke setiap gambar */}
          <img
            src={SampleImage1}
            alt="Foto 1"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage1)}
          />
          <img
            src={SampleImage2}
            alt="Foto 2"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage2)}
          />
          {/* Tambahkan gambar lainnya sesuai kebutuhan */}
          <img
            src={SampleImage3}
            alt="Foto 3"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage3)}
          />
          <img
            src={SampleImage4}
            alt="Foto 4"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage4)}
          />
          <img
            src={SampleImage5}
            alt="Foto 5"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage5)}
          />
          <img
            src={SampleImage6}
            alt="Foto 6"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage6)}
          />
        </div>
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

export default Explore;
