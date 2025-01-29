import React from "react";
import backgroundImage from "../../../assets/Gunung/bgmerchine.jpg";
import backgroundImage2 from "../../../assets/Gunung/bgmerchen2.jpg";

const Merchandise = () => {
  const products = [
    {
      id: 1,
      name: "Kaos Adventure",
      price: "Rp 150.000",
      image: "https://via.placeholder.com/200", // Ganti dengan URL gambar produk
    },
    {
      id: 2,
      name: "Topi Hiking",
      price: "Rp 80.000",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Jaket Gunung",
      price: "Rp 300.000",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "Sepatu Trail",
      price: "Rp 450.000",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Gunakan template string untuk memanggil gambar
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
        <h1 style={{ fontSize: "60px", margin: "0", color: "#000000" }}>
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
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Tata letak responsif
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#333333",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
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
              {product.name}
            </h3>
            <p
              style={{
                margin: "0 0 10px 0",
                fontSize: "18px",
                color: "rgb(255 200 0)",
              }}
            >
              {product.price}
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
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
