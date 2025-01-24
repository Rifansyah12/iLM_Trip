import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header/index";
// Public Pages
import Galeri from "./pages/Galeri";
import Paket from "./pages/Paket";
import PaketHome from "./pages/Paket/Home";
import PaketAnother from "./pages/Paket/Another";
import Explore from "./pages/Paket/Another/explore";
import Tourpage from "./pages/tourpage/home";
import PrivateTrip from "./pages/Paket/PrivateTrip";
import OpenTrip from "./pages/Paket/OpenTrip";
// Gunung
import Merbabu from "./pages/Paket/OpenTrip/Gunung/merbabu/index";
import Prau from "./pages/Paket/OpenTrip/Gunung/prau";
import Gede from "./pages/Paket/OpenTrip/Gunung/gede";
import Pangrango from "./pages/Paket/OpenTrip/Gunung/pangrango";
import Papandayan from "./pages/Paket/OpenTrip/Gunung/papandayan";
import Sumbing from "./pages/Paket/OpenTrip/Gunung/sumbing";
import Sindoro from "./pages/Paket/OpenTrip/Gunung/sindoro";
import Sangar from "./pages/Paket/OpenTrip/Gunung/sangar";

// Login & Admin Pages
import LoginPage from "./components/Login";
import DashboardAdmin from "./components/Dashboard/Pages/Dashboard";

// PrivateTrip
import Luxury from "./pages/Paket/PrivateTrip/Luxury";
import Premium from "./pages/Paket/PrivateTrip/Premium";
// Form
import FormDaftar from "./components/FormDaftar";
// Lainnya
import FamilyTrip from "./pages/Paket/FamilyTrip";
import Gathering from "./pages/Paket/Gathering";
import TestimoniHome from "./pages/Testimoni/Home";
import Testimoni from "./pages/Testimoni";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import ChatRoom from "./Roomchat";
// Layouts
import LayoutDashboard from "./components/Dashboard/LayoutDashboard"; // Layout untuk Admin
import Dashboard from "./components/Dashboard/Pages/Dashboard";
import AnotherAdmin from "./components/Dashboard/Pages/another";
import MountainTrip from "./components/Dashboard/Pages/mountaintrip";
import MerchenAdmin from "./components/Dashboard/Pages/merchen";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Halaman Home (Public)

const Home = () => (
  <>
    <Header />
    <main>
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
          }}
        >
          Nikmati petualangan yang akan menggugah jiwa, di mana keindahan alam
          menjadi bagian dari pengalaman luar biasa yang tak akan pernah Anda
          lupakan
        </h2>
      </section>
      <Paket />
      <div style={{ backgroundColor: "#000000", padding: "20px" }}>
        <Galeri />
        <Testimoni />
      </div>
    </main>
  </>
);

// Komponen Utama Aplikasi
const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/dashboard");

  return (
    <div>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/Galeri" element={<Galeri />} />
        <Route path="/Paket" element={<Paket />} />
        <Route path="/Paket/Home" element={<PaketHome />} />
        <Route path="/Paket/Another" element={<PaketAnother />} />
        <Route path="/Paket/Another/explore" element={<Explore />} />
        <Route path="/tourpage/home" element={<Tourpage />} />
        <Route path="/Paket/PrivateTrip" element={<PrivateTrip />} />
        <Route path="/Paket/OpenTrip" element={<OpenTrip />} />
        <Route path="/Paket/FamilyTrip" element={<FamilyTrip />} />
        <Route path="/Paket/Gathering" element={<Gathering />} />
        <Route path="/Testimoni/Home" element={<TestimoniHome />} />
        <Route path="/Kontak" element={<Kontak />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Paket/OpenTrip/Gunung/merbabu" element={<Merbabu />} />
        <Route path="/Paket/OpenTrip/Gunung/prau" element={<Prau />} />
        <Route path="/Paket/OpenTrip/Gunung/gede" element={<Gede />} />
        <Route
          path="/Paket/OpenTrip/Gunung/pangrango"
          element={<Pangrango />}
        />
        <Route
          path="/Paket/OpenTrip/Gunung/papandayan"
          element={<Papandayan />}
        />
        <Route path="/Paket/OpenTrip/Gunung/sindoro" element={<Sindoro />} />
        <Route path="/Paket/OpenTrip/Gunung/sumbing" element={<Sumbing />} />
        <Route path="/Paket/OpenTrip/Gunung/sangar" element={<Sangar />} />
        <Route path="/Paket/PrivateTrip/Premium" element={<Premium />} />
        <Route path="/Paket/PrivateTrip/Luxury" element={<Luxury />} />
        <Route path="/FormDaftar" element={<FormDaftar />} />
        {/* Admin Routes with Layout */}
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="mountaintrip" element={<MountainTrip />} />
          <Route path="another" element={<AnotherAdmin />} />
          <Route path="merchen" element={<MerchenAdmin />} />
          <Route path="dashboard" element={<DashboardAdmin />} />
        </Route>
        {/* 
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>

      {!isAdminPage && (
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
          onClick={() => setIsChatOpen(true)}
        >
          <i
            className="bi bi-chat-dots"
            style={{ fontSize: "24px", color: "white" }}
          ></i>
        </button>
      )}

      {isChatOpen && !isAdminPage && (
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

      {!isAdminPage && <Footer />}
    </div>
  );
};

export default App;
