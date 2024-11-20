import React from "react";
import Header from "./components/Header/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Galeri from "./pages/Galeri";
import Paket from "./pages/Paket";
import Testimoni from "./pages/Testimoni";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        {/* Tentang Petualangan */}
        <section
          style={{
            padding: "50px 20px",
            textAlign: "center",
            backgroundColor: "#f7f4e7", // Background warna
          }}
        >
          <h2
            style={{
              color: "#164F4C",
              fontSize: 36,
              fontWeight: "700",
              fontFamily: "Poppins",
            }}
          >
            Tentang Petualangan Kami
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: 18,
              fontFamily: "Poppins",
              marginTop: 20,
            }}
          >
            Kami menghadirkan pengalaman petualangan yang unik dan mendalam,
            membawa Anda untuk menjelajahi keindahan alam dan menemukan kekuatan
            dalam diri Anda.
          </p>
        </section>

        {/* Fitur-Fitur */}
        <Paket />

        <div style={{ backgroundColor: "#f7f4e7", padding: "20px" }}>
          {/* Galeri dengan latar belakang yang sama */}
          <div style={{ marginBottom: "40px" }}>
            <Galeri />
          </div>

          {/* Testimoni dengan latar belakang yang sama */}
          <div>
            <Testimoni />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
