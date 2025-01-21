import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import semua gambar yang digunakan
import SampleImage1 from "../../../assets/Gunung/Merbabu/merbabu1.jpg";
import SampleImage2 from "../../../assets/Gunung/Merbabu/merbabu2.jpg";
import SampleImage3 from "../../../assets/Gunung/Merbabu/merbabu3.JPG";
import SampleImage4 from "../../../assets/Gunung/Merbabu/merbabu4.JPG";
import SampleImage5 from "../../../assets/Gunung/Merbabu/merbabu5.JPG";
import SampleImage6 from "../../../assets/Gunung/Merbabu/merbabu6.JPG";
import FormData from "../../FormDaftar";

const FamilyTrip = () => {
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
        alignItems: "flex-start", // Disesuaikan agar kiri rata
      }}
    >
      {/* Judul */}
      <h2>PAKET FAMILY PREMIUM TRIP (IDR 4.999.999 / 4 pax) Via Wates</h2>
      <h3>Ayah, Ibu, Anak, Anak</h3>

      {/* Informasi Meeting Point */}
      <div
        style={{
          backgroundColor: "#333", // Warna latar kotak
          padding: "20px",
          borderRadius: "10px",
          marginTop: "30px",
          lineHeight: "1.8",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#FA8806" }}>MEETING POINT:</h2>
          <p>Basecamp Prau</p>
        </div>

        {/* Harga Sudah Termasuk & Tidak Termasuk */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1" }}>
            <h2 style={{ color: "#FA8806" }}>HARGA SUDAH TERMASUK:</h2>
            <ul>
              {[
                "Transportasi Ojeg Basecamp pos 1 PP",
                "Tiket Masuk 2H1M",
                "Homestay BC",
                "Kebersihan BC",
                "Tenda Family",
                "Tenda Toilet Portable",
                "Kursi",
                "Meja",
                "Matras Alumunium Foil (untuk alas tenda)",
                "Matras Tidur",
                "Perlengkapan Makan & Minum",
                "Welcome Drink Teh/Kopi",
                "Cooking Set",
                "Kompor Portable + Gas",
                "Makan 3x di gunung",
                "Makan sebelum dan sesudah pendakian di Basecamp",
                "Sarapan sebelum summits 1x",
                "Cheff Gunung",
                "Puding/Nutrijel",
                "Buah-buahan (semangka / melon) di area camp",
                "Logistik",
                "Air mineral 3L / pax",
                "HT",
                "Guide Profesional",
                "Sweeper",
                "Porter Pribadi Maximal beban 20 KG",
                "Porter Tenda",
                "Porter Logistik",
                "Porter Makan & Minum",
                "Porter barang (Alat makan+ minum)",
                "P3K Standar",
                "Sejadah solat",
                "Teman & Keluarga baru",
              ].map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div style={{ flex: "1" }}>
            <h2 style={{ color: "#FA8806" }}>TIDAK TERMASUK:</h2>
            <ul>
              {[
                "Transportasi Menuju Meeting Point",
                "Cemilan",
                "Perlengkapan Pribadi",
                "Surat Sehat",
                "Asuransi Pribadi",
                "Biaya Evakuasi",
                "Tips Crew Sukarela",
                "dan yang tidak disebutkan di paket",
              ].map((item, index) => (
                <li key={index}>× {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Itinerary */}
        <div>
          <h2 style={{ color: "#FA8806", marginTop: "20px" }}>
            ITINERARY TRIP:
          </h2>
          <p>
            <b>MEETING POINT PESERTA:</b> <br />
            Mepo Basecamp: Sabtu, 06:00 - 06:30 WIB
          </p>
          {/* Hari Ke-1 */}
          <p>
            <b>(HARI KE 1)</b> <br />
            06:00 - 08:00 = Tiba di basecamp dan prepare <br />
            08:00 - 08:30 = Breafing dan berdoa bersama <br />
            08:30 - 09:00 = Basecamp - Post 1 (Ojeg) <br />
            09:00 - 10:30 = Post 1 - Post 2 <br />
            10:30 - 12:00 = Post 2 - Post 3 <br />
            12:00 - 13:00 = ISHOMA Makan ke 1 <br />
            13:00 - 14:00 = Post 3 - Plawangan <br />
            14:00 - 14:30 = Tiba di Area Camp <br />
            18:00 - 20:00 = ISHOMA Makan ke 2 Malam (CAMP) <br />
            20:00 = Istirahat
          </p>
          {/* Hari Ke-3 */}
          <p>
            <b>(HARI KE 3)</b> <br />
            03:30 - 04:00 = Bangun, Sarapan, Prepare Summits <br />
            04:00 - 06:00 = Menuju Puncak Prau <br />
            06:00 – 06:30 = Enjoy Puncak <br />
            06:30 - 07:30 = Menuju tempat camp <br />
            07:30 – 08:00 = Makan ke 3 Pagi, Prepare Turun <br />
            08:30 - 12:00 = Puncak - Post 1 <br />
            12:00 - 12:30 = Post 1 - Basecamp (by ojeg, tidak termasuk) <br />
            12:30 - 13:30 = ISHOMA, bersih bersih, prepare pulang <br />
            14:00 – 15:00 = Trip selesai dan pulang ke rumah masing-masing
            dengan selamat
          </p>
        </div>

        {/* Catatan */}
        <div>
          <h2 style={{ color: "#FA8806", marginTop: "20px" }}>CATATAN:</h2>
          <ul>
            <li>
              Sewaktu-waktu dapat berubah tergantung fisik dan kondisi di
              lapangan. Diharapkan peserta koordinasi dengan crew apabila
              terjadi sakit atau cedera.
            </li>
            <li>
              Seluruh peserta harus mengikuti arahan SOP pendakian yang ada di
              taman nasional maupun SOP Il'm Trip Organizer. Peserta harus
              saling membantu, kompak, komunikasi, dan menjaga kebersamaan satu
              sama lain.
            </li>
            <li>
              Jalur Wates terdapat sumber mata air di pos 3. Peserta WAJIB
              membawa air minum pribadi minimal 2-3 botol (ukuran 1.5L) dengan
              perhitungan: 1 botol untuk naik, 1 botol saat di camp, dan 1 botol
              saat turun (refill di mata air).
            </li>
            <li>
              Sampah cemilan dan air minum kemasan pribadi, harap dibawa turun
              kembali oleh masing-masing peserta.
            </li>
          </ul>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <button
          onClick={() => navigate("/")}
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
          onClick={openModal}
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

      {/* Modal */}
      {isModalOpen && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <button onClick={closeModal} style={modalStyles.closeButton}>
              X
            </button>
            <FormData />
          </div>
        </div>
      )}
    </section>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    width: "500px",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "20px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
};

export default FamilyTrip;
