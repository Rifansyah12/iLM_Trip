import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import logoImage from "../../assets/lgo2-removebg-preview1.png";
import "../../App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

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
        zIndex: 1000,
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
          <Link to="/" className="navbar-brand">
            <img src={logoImage} alt="Logo" width="145" height="84" />
          </Link>

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
              <FaInstagram size={30} />
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
              <FaYoutube size={30} />
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
              <FaTiktok size={30} />
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
            <Link className="nav-link active fs-4 ms-4" to="/">
              Home
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/Paket/Home">
              Paket
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/Testimoni/Home">
              Testimoni
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/TentangKami">
              Tentang Kami
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/Galeri">
              Galeri
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/Booking">
              Booking
            </Link>
          </div>
          <Link className="btn btn-success btn-livechat ms-4" to="/Kontak">
            <span>Kontak</span>
          </Link>
          <Link className="btn btn-primary btn-livechat ms-4" to="/Login">
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
