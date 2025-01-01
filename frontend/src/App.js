import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header/index";
import Galeri from "./pages/Galeri";
import Paket from "./pages/Paket";
import PaketHome from "./pages/Paket/Home";
import PrivateTrip from "./pages/Paket/PrivateTrip";
import OpenTrip from "./pages/Paket/OpenTrip";
// gunung
import Merbabu from "./pages/Paket/OpenTrip/Gunung/merbabu";
import Prau from "./pages/Paket/OpenTrip/Gunung/prau";
import Gede from "./pages/Paket/OpenTrip/Gunung/gede";
import Pangrango from "./pages/Paket/OpenTrip/Gunung/pangrango";
import Papandayan from "./pages/Paket/OpenTrip/Gunung/papandayan";
import Sumbing from "./pages/Paket/OpenTrip/Gunung/sumbing";
import Sindoro from "./pages/Paket/OpenTrip/Gunung/sindoro";
import Sangar from "./pages/Paket/OpenTrip/Gunung/sangar";
//
// PrivateTrip

import Luxury from "./pages/Paket/PrivateTrip/Luxury";
import Premium from "./pages/Paket/PrivateTrip/Premium";
// form
import FormDaftar from "./components/FormDaftar";
//
import FamilyTrip from "./pages/Paket/FamilyTrip";
import Gathering from "./pages/Paket/Gathering";
import TestimoniHome from "./pages/Testimoni/Home";
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
        <Route path="/Paket/PrivateTrip" element={<PrivateTrip />} />
        <Route path="/Paket/OpenTrip" element={<OpenTrip />} />
        <Route path="/Paket/FamilyTrip" element={<FamilyTrip />} />
        <Route path="/Paket/Gathering" element={<Gathering />} />
        <Route path="/Testimoni/Home" element={<TestimoniHome />} />
        <Route path="/Kontak" element={<Kontak />} />

        {/* <Route path="/open-trip" element={<OpenTrip />} /> */}
        <Route path="/Paket/OpenTrip/Gunung/merbabu" element={<Merbabu />} />
        <Route path="/Paket/OpenTrip/Gunung/prau" element={<Prau />} />
        <Route
          path="/Paket/OpenTrip/Gunung/papandayan"
          element={<Papandayan />}
        />
        <Route
          path="/Paket/OpenTrip/Gunung/pangrango"
          element={<Pangrango />}
        />
        <Route path="/Paket/OpenTrip/Gunung/gede" element={<Gede />} />
        <Route path="/Paket/OpenTrip/Gunung/sindoro" element={<Sindoro />} />
        <Route path="/Paket/OpenTrip/Gunung/sumbing" element={<Sumbing />} />
        <Route path="/Paket/OpenTrip/Gunung/sangar" element={<Sangar />} />

        {/* PrivateTrip */}
        <Route path="/Paket/PrivateTrip/Premium" element={<Premium />} />
        <Route path="/Paket/PrivateTrip/Luxury" element={<Luxury />} />
        {/* form */}
        <Route path="/FormDaftar" element={<FormDaftar />} />
        {/*  */}
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
