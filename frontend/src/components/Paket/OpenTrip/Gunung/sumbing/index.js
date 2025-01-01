import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import semua gambar yang digunakan
import SampleImage1 from "../../../../../assets/Gunung/Merbabu/merbabu1.jpg";
import SampleImage2 from "../../../../../assets/Gunung/Merbabu/merbabu2.jpg";
import SampleImage3 from "../../../../../assets/Gunung/Merbabu/merbabu3.JPG";
import SampleImage4 from "../../../../../assets/Gunung/Merbabu/merbabu4.JPG";
import SampleImage5 from "../../../../../assets/Gunung/Merbabu/merbabu5.JPG";
import SampleImage6 from "../../../../../assets/Gunung/Merbabu/merbabu6.JPG";

const Sumbing = () => {
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
      <h2>PAKET MEDIUM TRIP (IDR 729.999/pax) Via Garung</h2>
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
            <p>BANDUNG – JAKARTA – TOL TRANS JAWA – BASECAMP</p>
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
              <h2 style={{ color: "#FA8806" }}>HARGA SUDAH TERMASUK :</h2>
              <ul>
                <li> ✓ Transportasi Hiace / Elf long PP</li>
                <li>✓ BBM, parkir, Tol , Tips Driver</li>
                <li>✓ Tiket Masuk 2H1M</li>
                <li>✓ Homestay BC</li>
                <li>✓ kebersihan BC</li>
                <li>✓ Tenda kap 4-5 ( diisi max 4 orang)</li>
                <li>✓ Tenda Toilet Portable</li>
                <li>✓ Matras Alumunium Foil (untuk alas tenda )</li>
                <li>✓ Perlengkapan Makan & Minum</li>
                <li>✓ Welcome Drink Teh/Kopi</li>
                <li>✓ Cooking Set</li>
                <li>✓ Kompor Portable + Gas</li>
                <li>✓ Makan 3x di gunung</li>
                <li>✓ Sarapan sebelum summits 1 x</li>
                <li>✓ Cheff Gunung</li>
                <li>✓ Puding/Nutrijel</li>
                <li>✓ Buah-buahan ( semangka / melon) di area camp</li>
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
                <li>× Transportasi Menuju Meeting Point</li>
                <li>× Cemilan & Air pribadi</li>
                <li>× Perlengkapan Pribadi</li>
                <li>× Porter Pribadi</li>
                <li>× Surat Sehat</li>
                <li>× Asuransi Pribadi</li>
                <li>× Biaya Evakuasi</li>
                <li>× Ojek</li>
                <li>× Tips Crew Sukarela</li>
                <li>× dan yang tidak disebutkan di paket</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ITINERARY */}
        <div>
          <h2 style={{ color: "#FA8806", marginTop: "20px" }}>
            ITINERARY TRIP
          </h2>

          <p>
            <b>MEETING POINT PESERTA :</b>
          </p>
          <p>
            Mepo Bandung: Jumat, 15:30 - 16:00 WIB <br />
            Mepo Jakarta: Jumat, 19:00 - 20:00 WIB <br />
            Mepo trans jawa: Kondisional <br />
            Mepo Basecamp: Sabtu, 06:00
          </p>

          <p>
            <b>(HARI KE 1)</b>
            <br />
            15:30 - 16:00 = Kumpul, absensi di Mepo Bandung
            <br />
            16:00 - 20:00 = Perjalanan & Penjemputan Mepo Jakarta
            <br />
            20:00 - 20:30 = Melanjutkan Perjalanan ke Gunung Sumbing
          </p>

          <p>
            <b>(HARI KE 2)</b>
            <br />
            06:00 - 08:00 = Tiba di basecamp dan prepare pendakian
            <br />
            08:00 - 08:30 = Briefing dan berdoa bersama
            <br />
            08:30 - 09:00 = Ojek Basecamp - Batas Hutan pos 1 (Ojek, Tidak
            Termasuk)
            <br />
            09:00 - 10:00 = Post 1 - Post 2<br />
            10:00 - 11:30 = Post 2 – Pengkolan 9<br />
            11:30 - 12:30 = ISHOMA Makan ke 1<br />
            12:30 - 14:30 = Menuju Post 3 - Sunrise Camp
            <br />
            15:00 - = Enjoy Sunrise Camp
            <br />
            18:00 - 20:00 = ISHOMA Makan ke 2 Malam
            <br />
            20:00 - = Istirahat
          </p>

          <p>
            <b>(HARI KE 3)</b>
            <br />
            02:30 - 03:00 = Bangun, Prepare Summits, Sarapan sebelum Summits
            <br />
            03:00 - 05:00 = Sunrise Camp - Post 4<br />
            05:00 - 07:00 = Post 4 - Puncak
            <br />
            07:00 - 07:30 = Enjoy Puncak Sumbing
            <br />
            07:30 - 09:30 = Turun kembali ke area camp
            <br />
            09:30 - 10:30 = Makan ke 3 siang, Prepare Turun
            <br />
            10:30 - 14:30 = Camp – Pos Ojek
            <br />
            14:30 - 15:00 = Pos 1 Setengah - Basecamp (by Ojek, tidak termasuk)
            <br />
            15:00 - 16:00 = ISHOMA, bersih-bersih, prepare pulang
            <br />
            16:00 - 02:00 = Perjalanan pulang ke Mepo
            <br />
            04:00 - = Trip selesai dan pulang ke rumah masing-masing dengan
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
                Jalur Sumbing Via Garung hanya terdapat mata air di Post 1.
                Peserta WAJIB membawa air minum pribadi minimal 2-3 botol
                (ukuran 1.5L) dengan perhitungan: 1 Botol untuk naik, 1 botol
                saat dicamp/summits, dan 1 botol saat turun pendakian.
              </li>
              <li>Terdapat warung di beberapa post.</li>
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

export default Sumbing;
