import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Untuk mendapatkan lokasi path aktif
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

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
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/Logo_trip.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light fw-bold">IL'M TRIP</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
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

        {/* SidebarSearch Form */}
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
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <Link
                to="#"
                className={`nav-link ${
                  location.pathname === "/dashboard/Dashboard" ? "active" : ""
                }`}
              >
                <i className="right fas fa-angle-left" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Content
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link
                    to="mountaintrip"
                    className={`nav-link ${
                      location.pathname === "/dashboard/mountaintrip"
                        ? "active"
                        : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Mountain Trip</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="another"
                    className={`nav-link ${
                      location.pathname === "/dashboard/another" ? "active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Another</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="merchen"
                    className={`nav-link ${
                      location.pathname === "/dashboard/merchen" ? "active" : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Merchendise</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>
                  Data pendaftaran
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link
                    to="DataPesertaBaru"
                    className={`nav-link ${
                      location.pathname === "/dashboard/DataPesertaBaru"
                        ? "active"
                        : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Pedaftar Baru</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="DataPeserta"
                    className={`nav-link ${
                      location.pathname === "/dashboard/DataPeserta"
                        ? "active"
                        : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>DataPeserta</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="Schedule"
                    className={`nav-link ${
                      location.pathname === "/dashboard/Schedule"
                        ? "active"
                        : ""
                    }`}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Schedule</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item menu-open">
              <Link
                to="#"
                className={`nav-link ${
                  location.pathname === "/logout" ? "active" : ""
                }`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <i />
                <p
                  style={{
                    textAlign: "center",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Log Out
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
