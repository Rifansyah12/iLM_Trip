import React from "react";

const Ebooks = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #1e3c72, #2a5298)", // Gradasi biru
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}
        >
          Koleksi Ebooks
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          Jelajahi koleksi buku digital kami yang penuh dengan inspirasi,
          panduan, dan pengetahuan.
        </p>
        <hr
          style={{
            width: "10%",
            border: "none",
            borderTop: "4px solid #00FFFF",
            margin: "20px auto",
          }}
        />
      </div>

      {/* Grid Ebooks */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "0 30px",
        }}
      >
        {/* Card Ebook */}
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#333333",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0px 12px 20px rgba(0, 0, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0px 8px 15px rgba(0, 0, 0, 0.3)";
            }}
          >
            <img
              src={`https://via.placeholder.com/250?text=Ebook+${id}`}
              alt={`Ebook ${id}`}
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "10px",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
              Judul Ebook {id}
            </h2>
            <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
              Deskripsi singkat tentang Ebook {id}.
            </p>
            <button
              style={{
                backgroundColor: "rgb(0 189 255)F",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#008B8B";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#00FFFF";
                e.currentTarget.style.color = "#000";
              }}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ebooks;
