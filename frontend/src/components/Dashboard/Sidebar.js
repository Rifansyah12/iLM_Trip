import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Untuk mendapatkan lokasi path aktif

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/Logo_trip.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">IL'M TRIP</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Admin
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
                  <a href="pages/tables/simple.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/data.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>DataTables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/jsgrid.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>jsGrid</p>
                  </a>
                </li>
              </ul>
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
