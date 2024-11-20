import React, { useState } from "react";
import logoImage from "../../assets/lgo2-removebg-preview1.png";
import "../../App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"; // Menggunakan react-icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        width: "100%",
        height: "89px",
        background: "#0f4142",
        position: "sticky",
        top: 0,
        zIndex: 1000, // memastikan navbar tetap di atas elemen lainnya
      }}
    >
      <div className="container-fluid d-flex align-items-center">
        {/* Logo dan Media Sosial */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Logo Utama */}
          <a className="navbar-brand" href="#">
            <img src={logoImage} alt="Logo" width="145" height="84" />
          </a>

          {/* Ikon Media Sosial */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              color: "#fff",
            }}
          >
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <FaInstagram size={20} />
              <span>@yourusername</span>
            </a>
            <a
              href="https://www.youtube.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <FaYoutube size={20} />
              <span>@yourusername</span>
            </a>
            <a
              href="https://www.tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <FaTiktok size={20} />
              <span>@yourusername</span>
            </a>
          </div>
        </div>

        {/* Navbar Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto ms-4">
            <a className="nav-link active fs-4 ms-4" href="#">
              Home
            </a>
            <a className="nav-link fs-4 ms-4" href="#">
              Paket
            </a>
            <a className="nav-link fs-4 ms-4" href="#">
              Testimoni
            </a>
            <a className="nav-link fs-4 ms-4" href="#">
              Blog
            </a>
            <a className="nav-link fs-4 ms-4" href="#">
              Kontak
            </a>
            <a className="nav-link fs-4 ms-4" href="#">
              Booking
            </a>
          </div>
          <button className="btn btn-success btn-livechat ms-4">
            <span>Live Chat</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
