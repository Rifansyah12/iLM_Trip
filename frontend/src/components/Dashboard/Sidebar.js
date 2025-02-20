import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isDataOpen, setIsDataOpen] = useState(false);
  const location = useLocation();
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Tampilkan alert sebelum logout
    alert("Anda akan logout dalam waktu 2 detik...");

    // Tunggu 2 detik sebelum logout
    setTimeout(() => {
      // Hapus token dari localStorage
      localStorage.removeItem("token");

      // Redirect ke halaman login
      navigate("/");
    }, 2000);
  };

  useEffect(() => {
    const storeAdmin = localStorage.getItem("admin");
    if (storeAdmin) {
      try {
        setAdmin(JSON.parse(storeAdmin));
      } catch (error) {
        console.error("Error Parsing admin data from localstorage", error);
        navigate("/Login");
      }
    } else {
      navigate("/Login");
    }
  }, [navigate]);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-6">
      <a href="index3.html" className="brand-link">
        <span className="brand-text font-weight-light fw-bold">IL'M TRIP</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={
                admin
                  ? `http://localhost:5000/images/admin/${admin.adminFoto}`
                  : "dist/img/user2-160x160.jpg"
              }
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {admin ? admin.adminNama : "Admin"}
            </a>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
          >
            <li className="nav-item">
              <Link
                to="/dashboard/Dashboard"
                className={`nav-link ${
                  location.pathname === "/dashboard/Dashboard" ? "active" : ""
                }`}
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>

            {/* Dropdown Content */}
            <li className={`nav-item ${isContentOpen ? "menu-open" : ""}`}>
              <a
                className="nav-link"
                onClick={() => setIsContentOpen(!isContentOpen)}
              >
                <i className="nav-icon fas fa-book"></i>
                <p>
                  Content
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul
                className={`nav nav-treeview ${
                  isContentOpen ? "d-block" : "d-none"
                }`}
              >
                <li className="nav-item">
                  <Link
                    to="/dashboard/mountaintrip"
                    className={`nav-link ${
                      location.pathname === "/dashboard/mountaintrip"
                        ? "active"
                        : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Mountain Trip</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard/another"
                    className={`nav-link ${
                      location.pathname === "/dashboard/another" ? "active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Another</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard/merchen"
                    className={`nav-link ${
                      location.pathname === "/dashboard/merchen" ? "active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Merchandise</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard/blog"
                    className={`nav-link ${
                      location.pathname === "/dashboard/blog" ? "active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Blog</p>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown Data Pendaftaran */}
            <li className={`nav-item ${isDataOpen ? "menu-open" : ""}`}>
              <a
                className="nav-link"
                onClick={() => setIsDataOpen(!isDataOpen)}
              >
                <i className="nav-icon fas fa-table"></i>
                <p>
                  Data Pendaftaran
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul
                className={`nav nav-treeview ${
                  isDataOpen ? "d-block" : "d-none"
                }`}
              >
                <li className="nav-item">
                  <Link
                    to="/dashboard/DataPesertaBaru"
                    className={`nav-link ${
                      location.pathname === "/dashboard/DataPesertaBaru"
                        ? "active"
                        : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Pendaftar Baru</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard/DataPeserta"
                    className={`nav-link ${
                      location.pathname === "/dashboard/DataPeserta"
                        ? "active"
                        : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Data Peserta</p>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Logout */}
            <li className="nav-item">
              <li className="nav-item">
                <button className="nav-link text-danger" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt nav-icon"></i>
                  <p>Logout</p>
                </button>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
