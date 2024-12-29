import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import semua gambar yang digunakan
import MerbabuImage from "../../../../../assets/Gunung/Merbabu/merbabu2.jpg";
import SampleImage1 from "../../../../../assets/Documentasi/PrivateTrip/DP.jpg";
import SampleImage2 from "../../../../../assets/Documentasi/PrivateTrip/DP2.jpg";
import SampleImage3 from "../../../../../assets/Documentasi/PrivateTrip/DP3.jpg";
import SampleImage4 from "../../../../../assets/Documentasi/PrivateTrip/DP4.jpg";
import SampleImage5 from "../../../../../assets/Documentasi/PrivateTrip/DP5.jpg";
import SampleImage6 from "../../../../../assets/Documentasi/PrivateTrip/DP6.jpg";
import SampleImage7 from "../../../../../assets/Documentasi/PrivateTrip/DP7.jpg";

const Merbabu = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false); // State untuk modal
  const [modalImage, setModalImage] = useState(""); // State untuk gambar yang ditampilkan di modal

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "50px",
          maxWidth: "90%",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {/* Gambar */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          {/* Gambar-Gambar Berjejer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "10px",
            }}
          >
            <img
              src={MerbabuImage}
              alt="Private Trip"
              style={{
                maxWidth: "400px",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                margin: "0 10px", // Spasi antar gambar
              }}
            />
            <img
              src={MerbabuImage}
              alt="Private Trip"
              style={{
                maxWidth: "400px",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                margin: "0 10px", // Spasi antar gambar
              }}
            />
            <img
              src={MerbabuImage}
              alt="Private Trip"
              style={{
                maxWidth: "400px",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                margin: "0 10px", // Spasi antar gambar
              }}
            />
          </div>

          {/* Deskripsi */}
          <div
            style={{
              maxWidth: "600px",
              textAlign: "left",
              margin: "0 auto",
            }}
          >
            <p style={{ fontSize: "30px", lineHeight: "1.8" }}>
              PAKET FAMILY PREMIUM TRIP (IDR 4.999.999 / 4 pax) Via Wates Ayah,
              Ibu, Anak, Anak
            </p>
          </div>
        </div>
      </div>

      {/* Informasi Tambahan */}
      <div
        style={{
          backgroundColor: "#333",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
          lineHeight: "1.8",
        }}
      >
        <h2 style={{ marginBottom: "10px", color: "#FA8806" }}>
          MEETING POINT:
        </h2>
        <p>Basecamp Prau</p>
        <h2 style={{ marginBottom: "10px", color: "#FA8806" }}>
          HARGA SUDAH TERMASUK:
        </h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>✓ Transportasi Ojeg Basecamp pos 1 PP</li>
          <li>✓ Tiket Masuk 2H1M</li>
          <li>✓ Homestay BC</li>
          <li>✓ kebersihan BC</li>
          <li>✓ Tenda Family</li>
          <li>✓ Tenda Toilet Portable</li>
          <li>✓ Kursi</li>
          <li>✓ Meja</li>
          <li>✓ Matras Aluminium Foil (untuk alas tenda)</li>
          <li>✓ Matras Tidur</li>
          <li>✓ Perlengkapan Makan & Minum</li>
          <li>✓ Welcome Drink Teh/Kopi</li>
          <li>✓ Cooking Set</li>
          <li>✓ Kompor Portable + Gas</li>
          <li>✓ Makan 3x di gunung</li>
          <li>✓ Makan sebelum dan sesudah pendakian di Basecamp</li>
          <li>✓ Sarapan sebelum summits 1 x</li>
          <li>✓ Cheff Gunung</li>
          <li>✓ Puding/Nutrijel</li>
          <li>✓ Buah-buahan (semangka/melon) di area camp</li>
          <li>✓ Logistik</li>
          <li>✓ Air mineral 3L / pax</li>
          <li>✓ HT</li>
          <li>✓ Guide Profesional</li>
          <li>✓ Sweeper</li>
          <li>✓ Porter Pribadi Maximal beban 20 KG</li>
          <li>✓ Porter Tenda</li>
          <li>✓ Porter Logistik</li>
          <li>✓ Porter Makan & Minum</li>
          <li>✓ Porter barang (Alat makan + minum)</li>
          <li>✓ P3K Standar</li>
          <li>✓ Sajadah Solat</li>
          <li>✓ Teman & Keluarga baru</li>
        </ul>
        <h2 style={{ marginBottom: "10px", color: "#FA8806" }}>
          TIDAK TERMASUK:
        </h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>× Transportasi Menuju Meeting Point</li>
          <li>× Cemilan</li>
          <li>× Perlengkapan Pribadi</li>
          <li>× Surat Sehat</li>
          <li>× Asuransi Pribadi</li>
          <li>× Biaya Evakuasi</li>
          <li>× Tips Crew Sukarela</li>
          <li>× dan yang tidak disebutkan di paket</li>
        </ul>
        <h2 style={{ marginBottom: "10px", color: "#FA8806" }}>
          ITINERARY TRIP:
        </h2>
        <p>
          <b>MEETING POINT PESERTA:</b> Basecamp: Sabtu, 06:00 - 06:30 WIB
        </p>
        <p>
          (HARI KE 1) <br />
          06:00 - 08:00 = Tiba di basecamp dan prepare <br />
          08:00 - 08:30 = Breafing dan berdoa bersama <br />
          08:30 - 09:00 = Basecamp - Post 1 (Ojeg) <br />
          ... (dan seterusnya sesuai jadwal Anda) ...
        </p>
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
          onClick={() => navigate("/booking")} // Navigasi ke halaman booking
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
      </div>
      {/* Galeri Foto */}
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
          <img
            src={SampleImage7}
            alt="Foto 7"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
            }}
            onClick={() => openModal(SampleImage7)}
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

export default Merbabu;
