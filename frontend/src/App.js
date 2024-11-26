import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header/index";
import Galeri from "./pages/Galeri";
import Paket from "./pages/Paket";
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
        <Route path="/Testimoni" element={<Testimoni />} />
      </Routes>

      {/* Footer tetap ada di semua halaman */}
      <Footer />
    </div>
  );
};

export default App;
