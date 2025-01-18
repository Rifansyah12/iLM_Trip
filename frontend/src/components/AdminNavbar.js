import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>Admin Dashboard</h1>
      <ul style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/dashboard"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Dashboard
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/logout" style={{ color: "#fff", textDecoration: "none" }}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
