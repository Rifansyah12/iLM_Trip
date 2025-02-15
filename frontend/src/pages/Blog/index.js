import React, { useState, useEffect } from "react";
import PageheaderImage from "../../assets/Gunung/Gede/gede.jpg";
import axios from "axios";

const Blog = () => {
  // ✅ Panggil useState DI DALAM fungsi komponen
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/blogs");
      setData(response.data);
    } catch (error) {
      console.error("Gagal mengambil data blog:", error);
    }
  };
  return (
    <div
      style={{
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Page Header Start */}
      <div
        style={{
          width: "100%",
          backgroundImage: `url(${PageheaderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "80px 0",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparan hitam
          }}
        ></div>

        {/* Konten Page Header */}
        <div style={{ position: "relative", zIndex: 1, color: "white" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Blog</h1>
          <nav aria-label="breadcrumb">
            <ol
              style={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                padding: 0,
                margin: 0,
                gap: "10px",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{ color: "#40E0D0", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a
                  href="#"
                  style={{ color: "#40E0D0", textDecoration: "none" }}
                >
                  Pages
                </a>
              </li>
              <li>/</li>
              <li style={{ color: "white" }}>Blog</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      <div
        style={{
          width: "80%",
          maxWidth: "800px",
          padding: "40px",
          borderRadius: "10px",
          backgroundColor: "#1E1E1E",
          position: "relative",
          marginTop: "40px",
          marginBottom: "40px", // Tambahkan jarak bawah
        }}
      >
        {/* Lapisan Transparan */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
          }}
        ></div>

        {/* Konten Blog */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {data.length > 0 ? (
            <>
              <h2
                style={{
                  color: "white",
                  marginBottom: "20px",
                  borderBottom: "2px solid orange",
                  display: "inline-block",
                  paddingBottom: "8px",
                }}
              >
                {data[0].title}
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  textAlign: "justify",
                  lineHeight: "1.6",
                }}
              >
                {data[0].content}
              </p>
            </>
          ) : (
            <p style={{ color: "white" }}>Loading data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
