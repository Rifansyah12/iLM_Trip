import React, { useState, useEffect } from "react";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header/index";
// Public Pages
import Galeri from "./pages/Galeri";
import Paket from "./pages/Paket";
import PaketHome from "./pages/Paket/Home";
import PaketAnother from "./pages/Paket/Another";
import Explore from "./pages/Paket/Another/explore";
import Ebook from "./components/Ebook";
import Tourpage from "./pages/tourpage/home";
import PrivateTrip from "./pages/Paket/PrivateTrip";
import OpenTrip from "./pages/Paket/OpenTrip";
// Gunung
import Merbabu from "./pages/Paket/OpenTrip/Gunung/merbabu/index";

// Login & Admin Pages
import LoginPage from "./components/Login";
import DashboardAdmin from "./components/Dashboard/Pages/Dashboard";

// PrivateTrip
import Luxury from "./pages/Paket/PrivateTrip/Luxury";
import DestinasiLuxury from "./pages/Paket/PrivateTrip/Luxury/Destinasi";
import Premium from "./pages/Paket/PrivateTrip/Premium";
import DestinasiPremium from "./pages/Paket/PrivateTrip/Premium/Destinasi";
// Form
import FormDaftar from "./components/FormDaftar";
// Lainnya
import FamilyTrip from "./pages/Paket/FamilyTrip";
import Gathering from "./pages/Paket/Gathering";
import TestimoniHome from "./pages/Testimoni/Merchen";
import Testimoni from "./pages/Testimoni";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import ChatRoom from "./Roomchat";
// Layouts
import LayoutDashboard from "./components/Dashboard/LayoutDashboard"; // Layout untuk Admin
import Dashboard from "./components/Dashboard/Pages/Dashboard";
import AnotherAdmin from "./components/Dashboard/Pages/another";
import MountainTrip from "./components/Dashboard/Pages/mountaintrip";
import MountainTripTablePrivate from "./components/Dashboard/Pages/MountainTripTable/MountainTripTablePrivate";
import TablePrivatePremium from "./components/Dashboard/Pages/MountainTripTable/TablePrivate/TablePrivatePremium";
import TablePrivateLuxury from "./components/Dashboard/Pages/MountainTripTable/TablePrivate/TablePrivateLuxury";
import MountainTripTableOpen from "./components/Dashboard/Pages/MountainTripTable/MountainTripTableOpen";
import MountainTripTableGathering from "./components/Dashboard/Pages/MountainTripTable/MountainTripTableGathering";
import MountainTripTableFamily from "./components/Dashboard/Pages/MountainTripTable/MountainTripTableFamily";
import DataPesertaBaru from "./components/Dashboard/Pages/DataPeserta/DataPesertaBaru";
import Schedule from "./components/Dashboard/Pages/DataPeserta/Schedule";
import DataPeserta from "./components/Dashboard/Pages/DataPeserta/DataPeserta";
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
        <Route path="/Ebook" element={<Ebook />} />
        <Route path="/Paket" element={<Paket />} />
        <Route path="/Paket/Home" element={<PaketHome />} />
        <Route path="/Paket/Another" element={<PaketAnother />} />
        <Route path="/Paket/Another/explore" element={<Explore />} />
        <Route path="/tourpage/home" element={<Tourpage />} />
        <Route path="/Paket/PrivateTrip" element={<PrivateTrip />} />
        <Route path="/Paket/OpenTrip" element={<OpenTrip />} />
        <Route path="/Paket/FamilyTrip" element={<FamilyTrip />} />
        <Route path="/Paket/Gathering" element={<Gathering />} />
        <Route path="/Testimoni/Merchen" element={<TestimoniHome />} />
        <Route path="/Kontak" element={<Kontak />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Paket/OpenTrip/Gunung/merbabu" element={<Merbabu />} />
        <Route path="/Paket/PrivateTrip/Premium" element={<Premium />} />
        <Route
          path="/Paket/PrivateTrip/Premium/Destinasi"
          element={<DestinasiPremium />}
        />
        <Route
          path="/Paket/PrivateTrip/Luxury/Destinasi"
          element={<DestinasiLuxury />}
        />
        <Route path="/Paket/PrivateTrip/Luxury" element={<Luxury />} />
        <Route path="/FormDaftar" element={<FormDaftar />} />
        {/* Admin Routes with Layout */}
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="mountaintrip" element={<MountainTrip />} />
          <Route
            path="mountaintrip/table/private"
            element={<MountainTripTablePrivate />}
          />
          <Route
            path="mountaintrip/table/private/premium/:id_privatetrip"
            element={<TablePrivatePremium />}
          />
          <Route
            path="mountaintrip/table/private/luxury"
            element={<TablePrivateLuxury />}
          />
          <Route
            path="mountaintrip/table/Open/:id_layanan"
            element={<MountainTripTableOpen />}
          />
          <Route
            path="mountaintrip/table/Gathering"
            element={<MountainTripTableGathering />}
          />
          <Route
            path="mountaintrip/table/Family"
            element={<MountainTripTableFamily />}
          />
          <Route path="another" element={<AnotherAdmin />} />
          <Route path="merchen" element={<MerchenAdmin />} />
          <Route path="dashboard" element={<DashboardAdmin />} />

          <Route path="DataPesertaBaru" element={<DataPesertaBaru />} />
          <Route path="DataPeserta" element={<DataPeserta />} />
          <Route path="Schedule" element={<Schedule />} />
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
