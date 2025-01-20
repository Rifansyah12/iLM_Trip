import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Content Wrapper */}
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <h1>Welcome to Admin Dashboard</h1>
            <p>This is the main content area.</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
