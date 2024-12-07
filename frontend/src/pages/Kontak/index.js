// pages/Kontak.js
import React, { useState } from "react";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Disini Anda dapat menambahkan logika untuk mengirim form, seperti API atau notifikasi
    alert("Pesan Anda telah terkirim!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {/* Div pertama */}
      <div style={{ padding: "100px", backgroundColor: "#282C2B" }}>
        <h2 style={{ textAlign: "center", color: "#E18503", fontSize: "60px" }}>
          Kontak
        </h2>
        <p style={{ textAlign: "center", color: "#ffff", fontSize: "40px" }}>
          Kamu punya pertanyaan tentang layanan yang kami tawarkan, tinggal isi
          form di bawah ya. Kami akan coba jawab semua pertanyaan dan komentar
          dalam 24 jam.
        </p>
      </div>

      {/* Layer untuk form */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#222222",
          padding: "50px",
          color: "#fff",
        }}
      >
        {/* Bagian Kiri: Teks dan Media Sosial */}
        <div style={{ flex: 1, paddingRight: "20px", padding: "100px" }}>
          <h3 style={{ color: "#E18503", fontSize: "50px", textAlign: "left" }}>
            Hubungi Kami
          </h3>
          <p style={{ fontSize: "18px", lineHeight: "1.5", textAlign: "left" }}>
            Informasi | Konsultasi |Reservasi
          </p>
          <p style={{ fontSize: "18px", marginTop: "20px" }}>
            Ikuti kami di media sosial:
          </p>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#E18503"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              >
                <path d="M12 2C8.14 2 5 5.14 5 9c0 4.61 5.27 10.12 6.6 11.55.23.25.56.45.9.45s.67-.2.9-.45C13.73 19.12 19 13.61 19 9c0-3.86-3.14-7-7-7zm0 15c-1.94 0-5-3.06-5-6s2.06-6 5-6 5 3.06 5 6-3.06 6-5 6zm0-10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <p style={{ fontSize: "18px" }}>
                Alamat: Jl. Contoh No.123, Jakarta
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#E18503"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              >
                <path d="M20.54 17.12l-3.93-.98a1 1 0 00-1 .29l-2.2 2.2a15.94 15.94 0 01-7.41-7.41l2.2-2.2a1 1 0 00.29-1L6.88 3.46a1 1 0 00-1-.29H3a1 1 0 00-1 1A18.05 18.05 0 0017.5 21a1 1 0 001-1v-2.88a1 1 0 00-.29-1z" />
              </svg>

              <h1 style={{ fontSize: "18px" }}>Kontak: +62 812 3456 7890</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#E18503"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              >
                <path d="M22 4H2C.89 4 0 4.89 0 6v12c0 1.11.89 2 2 2h20c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1.2 2L12 10.8 3.2 6h17.6zM2 18V7.68l10 5.52 10-5.52V18H2z" />
              </svg>
              <h1 style={{ fontSize: "18px" }}>Email: info@contoh.com</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#E18503"
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="#E18503"
                  strokeWidth="2"
                />
                <line
                  x1="12"
                  y1="12"
                  x2="12"
                  y2="7"
                  stroke="#E18503"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="12"
                  y1="12"
                  x2="16"
                  y2="12"
                  stroke="#E18503"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="1.5" fill="#E18503" />
              </svg>

              <p style={{ fontSize: "18px" }}>
                Jam Operasional: Senin - Jumat, 09:00 - 17:00
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Kanan: Formulir */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            color: "#000",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ textAlign: "left", color: "#E18503", fontSize: "30px" }}>
            Masukan Pesan Anda di sini
          </h3>
          <form style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Pesan
              </label>
              <textarea
                placeholder="Tulis pesan Anda di sini"
                rows="5"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#E18503",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Kontak;
