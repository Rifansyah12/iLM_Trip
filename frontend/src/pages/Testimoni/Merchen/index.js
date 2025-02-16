import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "../../../assets/Gunung/bgmerchine.jpg";
import backgroundImage2 from "../../../assets/Gunung/bgmerchen2.jpg";

const Merchandise = () => {
  // State untuk menyimpan data produk dari backend
  const [product, setProduct] = useState([]);

  // Fungsi untuk mengambil data dari backend
  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getProduct"); // Sesuaikan endpoint dengan backend-mu
      setProduct(response.data);
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
    }
  };

  // Panggil `fetchProduct` saat komponen pertama kali dirender
  useEffect(() => {
    fetch("http://localhost:5000/getProduct") // Sesuaikan dengan endpoint backend
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          padding: "50px 20px",
          textAlign: "center",
          color: "#ffffff",
          marginBottom: "40px",
        }}
      >
        <h1
          className="fw-bold text-dark text-center"
          style={{
            fontSize: "clamp(40px, 8vw, 80px)", // Ukuran font responsif
            textShadow: "5px 5px 10px orange",
          }}
        >
          Merchandise
        </h1>

        <p
          style={{
            fontSize: "24px",
            marginTop: "10px",
            color: "rgb(9 93 129)",
          }}
        >
          Temukan berbagai perlengkapan untuk petualangan Anda
        </p>
      </div>

      {/* Grid Produk */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {product.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%", fontSize: "20px" }}>
            Tidak ada produk tersedia
          </p>
        ) : (
          product.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#333333",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={item.foto} // Langsung gunakan item.foto karena backend sudah mengembalikan URL lengkap
                alt={item.nama_produk}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />

              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "20px",
                  color: "#ffffff",
                }}
              >
                {item.produk}
              </h3>
              <p
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "18px",
                  color: "rgb(255 200 0)",
                }}
              >
                Rp {item.harga}
              </p>
              <button
                style={{
                  backgroundColor: "rgb(16 182 151)",
                  color: "#222222",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Beli Sekarang
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Merchandise;
