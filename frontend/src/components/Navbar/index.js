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
        background: "#000000",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container-fluid d-flex align-items-center">
        {/* Logo di sebelah kiri */}
        <Link to="/" className="navbar-brand">
          <img src={logoImage} alt="Logo" width="145" height="84" />
        </Link>

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

        {/* Bagian Menu Tengah */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            menuOpen ? "show" : ""
          }`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link active fs-4 ms-4" to="/">
              Home
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/tourpage/home">
              Tour Package
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/Testimoni/Home">
              About Us
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/TentangKami">
              Merchendise
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/Galeri">
              Blog
            </Link>
            <Link className="nav-link fs-4 ms-4" to="/Booking">
              Booking
            </Link>
            {/* Dropdown Lainnya */}
            <div className="nav-item dropdown fs-4 ms-4">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lainnya
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/Kontak">
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Login">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
