import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header/index";
import Galeri from "./pages/Galeri";
import Paket from "./pages/Paket";
import PaketHome from "./pages/Paket/Home";
import Testimoni from "./pages/Testimoni";
import TentangKami from "./pages/TentangKami";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Tentang Petualangan */}
        <section
          style={{
            padding: "10px 10px",
            textAlign: "center",
            backgroundColor: "#E18503", // Background warna
          }}
        >
          <h2
            style={{
              color: "#ffff",
              fontSize: 25,
              fontWeight: "500",
              fontFamily: "Poppins",
              width: "60%", // Kurangi lebar sesuai kebutuhan, misalnya 80%
              margin: "0 auto", // Agar tetap di tengah secara horizontal
              textAlign: "center",
            }}
          >
            Nikmati petualangan yang akan menggugah jiwa, di mana keindahan alam
            menjadi bagian dari pengalaman luar biasa yang tak akan pernah Anda
            lupakan
          </h2>
        </section>

        {/* Fitur-Fitur */}
        <Paket />

        <div style={{ backgroundColor: "#000000", padding: "20px" }}>
          {/* Galeri dengan latar belakang yang sama */}
          <div style={{ marginBottom: "50px" }}>
            <Galeri />
          </div>

          {/* Testimoni dengan latar belakang yang sama */}
          <div>
            <Testimoni />
          </div>
        </div>
      </main>
    </>
  );
};

const App = () => {
  return (
    <div>
      {/* Navbar tetap ada di semua halaman */}
      <Navbar />

      <Routes>
        {/* Rute Home */}
        <Route path="/" element={<Home />} />

        {/* Halaman Tentang Kami */}
        <Route path="/TentangKami" element={<TentangKami />} />

        {/* Rute lainnya (contoh halaman lain) */}
        <Route path="/Galeri" element={<Galeri />} />
        <Route path="/Paket" element={<Paket />} />
        <Route path="/Paket/Home" element={<PaketHome />} />
        <Route path="/Testimoni" element={<Testimoni />} />
      </Routes>

      <button
        className="btn btn-success btn-livechat"
        style={{
          position: "fixed",
          bottom: "20px", // Jarak dari bawah
          right: "20px", // Jarak dari kanan
          zIndex: 1000, // Pastikan di atas elemen lainnya
          borderRadius: "50%", // Membuat tombol berbentuk bulat
          width: "60px", // Lebar tombol
          height: "60px", // Tinggi tombol
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Bayangan
        }}
      >
        {/* Ikon Pesan */}
        <i
          className="bi bi-chat-dots"
          style={{ fontSize: "24px", color: "white" }}
        ></i>
      </button>

      {/* Footer tetap ada di semua halaman */}
      <Footer />
    </div>
  );
};

export default App;
