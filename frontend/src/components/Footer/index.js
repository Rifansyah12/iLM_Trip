import React from "react";
import logoImage from "../../assets/logo/Logo_trip.png";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row">
          {/* Kolom Logo */}
          <div className="col-lg-4 footer-column mb-4">
            <div className="footer-content">
              <img
                src={logoImage}
                alt="IL'M Trip Organizer Logo"
                width="120"
                height="120"
              />
            </div>
          </div>

          {/* Kolom Informasi Kontak */}
          <div className="col-lg-4 col-md-6 footer-column mb-4">
            <div className="footer-content">
              <div className="border-wrapper">
                <h4 className="footer-title">Informasi Kontak</h4>
              </div>
              <div>
                <h5>Alamat</h5>
                <p>Jln. Trs Pasirkoja No 309, Bandung, Jawa Barat, Indonesia</p>
                <h5>Kontak</h5>
                <p>
                  <strong>Phone:</strong> +62821-2964-6631
                </p>
                <p>
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
            </div>
          </div>
          {/* Kolom Jelajahi Situs Kami */}
          <div className="col-lg-4 col-md-6 footer-column mb-4">
            <div className="border-wrapper2">
              <h4 className="footer-title">Jelajahi Situs Kami</h4>
            </div>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Paket</a>
              </li>
              <li>
                <a href="#">Testimoni</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Kontak</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
            </ul>
          </div>
          {/* Kolom Media Sosial */}
          <div className="col-lg-4 col-md-6 footer-column mb-4">
            <div className="border-wrapper3">
              <h4 className="footer-title">Media Sosial</h4>
            </div>
            <ul className="footer-social">
              <li>
                <a
                  href="https://www.instagram.com/ilmtriporganizer?igsh=amttNWJ0cDhqOWt2&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i> @ilmtriporganize
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i> @username
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@ilmtriporganizer?si=3hHJ0xrfDP_ZCvMG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-youtube"></i> @ilmtriporganize
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@ilm_triporganizer?_t=8s3iAwPw9zT&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-tiktok"></i> @ilm_triporganizer
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/il-m-trip-organizer-a23a03347/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i> ilm trip organizer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bagian Copyright */}
      <div className="text-start mt-4">
        <p>
          © <strong>IL'M TRIP ORGANIZIER</strong> All Rights Reserved Designed
          by <a href="https://ftek.uninus.ac.id/">RR_PROJECT</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
