import React, { useState } from "react";
import logoImage from "../../assets/lgo2-removebg-preview1.png";
import "../../App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logoImage} alt="Logo" width="145" height="84" />
        </a>

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

      {/* Live Chat Button */}
    </nav>
  );
};

export default Navbar;
