import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header/index";
import Galeri from "./pages/Galeri";
import Paket from "./pages/Paket";
import PaketHome from "./pages/Paket/Home";
import Testimoni from "./pages/Testimoni";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import ChatRoom from "./Roomchat"; // Import halaman Room Chat
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
            backgroundColor: "#E18503",
          }}
        >
          <h2
            style={{
              color: "#ffff",
              fontSize: 25,
              fontWeight: "500",
              fontFamily: "Poppins",
              width: "60%",
              margin: "0 auto",
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
  const [isChatOpen, setIsChatOpen] = useState(false); // State untuk membuka/tutup Room Chat

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/Galeri" element={<Galeri />} />
        <Route path="/Paket" element={<Paket />} />
        <Route path="/Paket/Home" element={<PaketHome />} />
        <Route path="/Testimoni" element={<Testimoni />} />
        <Route path="/Kontak" element={<Kontak />} />
      </Routes>

      {/* Tombol Live Chat */}
      <button
        className="btn btn-success btn-livechat"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => setIsChatOpen(true)} // Buka Room Chat
      >
        <i
          className="bi bi-chat-dots"
          style={{ fontSize: "24px", color: "white" }}
        ></i>
      </button>

      {/* Room Chat */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            width: "400px",
            height: "60%",
            backgroundColor: "white",
            boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1100,
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <ChatRoom onClose={() => setIsChatOpen(false)} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
