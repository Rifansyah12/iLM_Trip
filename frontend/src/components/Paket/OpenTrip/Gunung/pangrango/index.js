import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import semua gambar yang digunakan
import SampleImage1 from "../../../../../assets/Gunung/Merbabu/merbabu1.jpg";
import SampleImage2 from "../../../../../assets/Gunung/Merbabu/merbabu2.jpg";
import SampleImage3 from "../../../../../assets/Gunung/Merbabu/merbabu3.JPG";
import SampleImage4 from "../../../../../assets/Gunung/Merbabu/merbabu4.JPG";
import SampleImage5 from "../../../../../assets/Gunung/Merbabu/merbabu5.JPG";
import SampleImage6 from "../../../../../assets/Gunung/Merbabu/merbabu6.JPG";

const Pangrango = () => {
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
      <h2>PAKET MEDIUM TRIP (IDR 725.000/pax) Via Cibodas</h2>
      <h2>Minimal Keberangkatan 16 Orang</h2>
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
      ></div>

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* MEETING POINT */}
          <div style={{ flex: "1" }}>
            <h2 style={{ color: "#FA8806" }}>MEETING POINT :</h2>
            <p>BANDUNG – JAKARTA – BASECAMP</p>
          </div>

          {/* FLEX CONTAINER FOR REMAINING CONTENT */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {/* HARGA SUDAH TERMASUK */}
            <div style={{ flex: "1" }}>
              <h2 style={{ color: "#FA8806" }}>HARGA SUDAH TERMASUK :</h2>✓
              <ul>
                <li>✓ Transportasi Hiace / Elf long PP</li>
                <li>✓ BBM, parkir, Tol, Tips Driver</li>
                <li>✓ Tiket Masuk 2H1M TNGP</li>
                <li>✓ Homestay BC</li>
                <li>✓ Kebersihan BC</li>
                <li>✓ Tenda kap 4-5 (diisi max 4 orang)</li>
                <li>✓ Tenda Toilet Portable</li>
                <li>✓ Matras Alumunium Foil (untuk alas tenda)</li>
                <li>✓ Perlengkapan Makan & Minum</li>
                <li>✓ Welcome Drink Teh/Kopi</li>
                <li>✓ Cooking Set</li>
                <li>✓ Kompor Portable + Gas</li>
                <li>✓ Makan 3x di gunung</li>
                <li>✓ Cheff Gunung</li>
                <li>✓ Puding/Nutrijel</li>
                <li>✓ Buah-buahan (semangka/melon) di area camp</li>
                <li>✓ Logistik</li>
                <li>✓ HT</li>
                <li>✓ Guide Profesional</li>
                <li>✓ Sweeper</li>
                <li>✓ Porter Tenda</li>
                <li>✓ Porter Logistik</li>
                <li>✓ Porter Makan & Minum</li>
                <li>✓ Porter barang (Alat makan+ minum)</li>
                <li>✓ P3K Standar</li>
                <li>✓ Sejadah solat</li>
                <li>✓ Teman & Keluarga baru</li>
              </ul>
            </div>

            {/* TIDAK TERMASUK */}
            <div style={{ flex: "1" }}>
              <h2 style={{ color: "#FA8806" }}>TIDAK TERMASUK :</h2>
              <ul>
                <ul>
                  <li>× Transportasi Menuju Meeting Point</li>
                  <li>× Cemilan & Air pribadi</li>
                  <li>× Perlengkapan Pribadi</li>
                  <li>× Porter Pribadi</li>
                  <li>× Surat Sehat</li>
                  <li>× Asuransi Pribadi</li>
                  <li>× Biaya Evakuasi</li>
                  <li>× Ojeg</li>
                  <li>× Tips Crew Sukarela</li>
                  <li>× Dan yang tidak disebutkan di paket</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        {/* ITINERARY */}
        <div>
          <h2 style={{ color: "#FA8806", marginTop: "20px" }}>
            ITINERARY TRIP :
          </h2>
          <p>
            <b>MEETING POINT PESERTA :</b>
          </p>
          <p>
            Mepo Bandung : Jumat, 18:00 - 19:00 WIB <br />
            Mepo Jakarta : Jumat, 22:00 – 22:30 WIB <br />
            Mepo Basecamp : Sabtu, 06:00
          </p>
          <p>
            <b>NOTED :</b> JIKA PESERTA HANYA MEETING POINT BANDUNG MAKA, JAM
            JEMPUTAN MEETING POINT BANDUNG MENYESUAIKAN MENJADI JAM 20:00 –
            21:00
          </p>
          <p>
            <b>(HARI KE 1)</b>
            <br />
            18:00 - 19:00 = Penjemputan Mepo Bandung
            <br />
            19:00 - 22:00 = Penjemputan Mepo Jakarta dan Melanjutkan Perjalanan
            ke Gunung Gede
            <br />
            <b>(HARI KE 2)</b>
            <br />
            03:00 - 06:00 = Tiba di basecamp istirahat dan prepare
            <br />
            06:00 - 06:30 = Breafing dan berdoa bersama
            <br />
            07:00 - 11:00 = Mulai perjalanan
            <br />
            12:00 - 12:30 = ISHOMA Makan ke 1
            <br />
            13:00 – 14:00 = Tiba Di tempat Camp Kandang Badak
            <br />
            18:00 - 20:00 = ISHOMA Makan ke 2 Malam
            <br />
            20:00 - = Istirahat
            <br />
            <b>(HARI KE 3)</b>
            <br />
            03:00 - 03:30 = Bangun, Sarapan Prepare Summits
            <br />
            04:00 – 07:00 = Summits Puncak Pangrango
            <br />
            07:00 : 07:30 = Enjoy Puncak Enjoy Sunrise, Enjoy Lembah
            Mandalawangi
            <br />
            07:30 – 09:30 = Turun Dari Puncak Ke tempat camp
            <br />
            09:30 – 10:00 = Makan ke 3 Pagi, Prepare Turun
            <br />
            10:00 – 15:00 = Turun menuju Basecamp
            <br />
            15:00 - 15:30 = ISHOMA, bersih bersih, prepare pulang
            <br />
            16:00 - 20:00 = Perjalanan pulang ke Mepo (Jakarta bila ada)
            <br />
            20:00 – 24:00 = Perjalanan ke Mepo Bandung
            <br />
            24:00 - = Trip selesai dan pulang kerumah masing-masing dengan
            selamat
          </p>

          <div>
            <h2 style={{ color: "#FA8806", marginTop: "20px" }}>CATATAN :</h2>
            <ul>
              <li>
                Sewaktu Waktu dapat berubah-ubah tergantung fisik dan kondisi di
                lapangan. Diharapkan peserta berkoordinasi dengan crew apabila
                terjadi sakit atau cedera.
              </li>
              <li>
                Seluruh peserta harus mengikuti arahan SOP pendakian yang ada di
                taman nasional maupun SOP Il’m Trip Organizer, peserta harus
                saling membantu, kompak, komunikasi, dan menjaga kebersamaan
                satu sama lain.
              </li>
              <li>
                Peserta WAJIB membawa air minum pribadi minimal 2-3 botol
                (ukuran 1.5L) dengan perhitungan: 1 Botol untuk naik, 1 botol
                saat dicamp/summits dan 1 botol saat turun pendakian.
              </li>
              <li>Terdapat warung-warung di track pendakian.</li>
              <li>
                Sampah cemilan dan air minum kemasan pribadi, harap dibawa turun
                kembali oleh masing-masing peserta.
              </li>
            </ul>
          </div>
        </div>
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

        <button
          onClick={() => navigate("/Syarat")} // Navigasi ke halaman booking
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
          Syarat & Ketentuan
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

export default Pangrango;
