import React from "react";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa", // Warna latar navbar
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  };

  const searchContainerStyle = {
    display: "flex",
    alignItems: "center",
    width: "50%",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const searchInputStyle = {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px 0 0 5px",
    outline: "none",
    fontSize: 16,
  };

  const searchButtonStyle = {
    padding: "10px",
    backgroundColor: "#FA8806",
    border: "none",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
  };

  const rightContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px", // Jarak antar elemen
  };

  const notificationStyle = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "#FA8806",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  const notificationIconStyle = {
    color: "white",
    fontSize: 20,
  };

  const adminContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  };

  const onlineIndicatorStyle = {
    width: 10,
    height: 10,
    backgroundColor: "green", // Warna indikator online
    borderRadius: "50%",
    marginTop: 5,
  };

  return (
    <nav style={navbarStyle}>
      {/* Tulisan Admin Dashboard */}
      <div style={titleStyle}>Admin Dashboard</div>

      {/* Kolom pencarian */}
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Cari sesuatu..."
          style={searchInputStyle}
        />
        <button style={searchButtonStyle}>Cari</button>
      </div>

      {/* Notifikasi dan nama admin */}
      <div style={rightContainerStyle}>
        {/* Logo notifikasi */}
        <div style={notificationStyle}>
          <i className="fas fa-bell" style={notificationIconStyle}></i>
        </div>

        {/* Nama Admin dan indikator online */}
        <div style={adminContainerStyle}>
          Admin
          <div style={onlineIndicatorStyle}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
