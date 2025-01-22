// components/LayoutDashboard.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const LayoutDashboard = () => {
  return (
    <div className="layout-dashboard">
      {/* Header */}
      <Header />

      <div className="dashboard-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LayoutDashboard;
