import React from "react";
import logoImage from "../../assets/lgo2-removebg-preview1.png";
import "../../App.css";
// Jangan lupa untuk membuat file CSS terpisah agar lebih mudah dikelola

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <a className="container fluid" href="#">
        <img src={logoImage} alt="Logo" width="145" height="84" />
      </a>
      <div className="container footer-top">
        <div className="row gy-4">
          {/* Bagian About */}
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">INFORMASI KONTAK</span>
            </a>
            <h3>Alamat</h3>
            <div className="footer-contact pt-3">
              <p>Jln.Trs Pasirkoja No 309,Bandung, Jawa Barat,Indonesia</p>
              <p>Desa Rancakalong, Kec. Rancakalong, Kab. Sumedang</p>
              <h3>Kontak</h3>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+62821-2964-6631</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Bagian Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bagian Copyright */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">IL'M TRIP ORGANIZIER</strong>
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://ftek.uninus.ac.id/">RR_PROJECT</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
