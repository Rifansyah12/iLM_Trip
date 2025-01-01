import React, { useState, useEffect } from "react";

// Menambahkan CSS untuk styling
const formStyle = {
  backgroundColor: "black",
  color: "white",
  fontFamily: "Belanosima, sans-serif",
  padding: "20px",
  textAlign: "center",
  borderRadius: "10px",
  maxWidth: "600px",
  margin: "auto",
};

const inputStyle = {
  marginBottom: "10px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "100%",
  color: "black",
};

const buttonStyle = {
  backgroundColor: "#0066FF",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  width: "100%",
  border: "none",
};

const FormDaftar = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    alamat: "",
    domisili: "",
    pekerjaan: "",
    telepon: "",
    teleponDarurat: "",
    gunung: "",
    tanggal: "",
    paket: "",
    fasilitas: "",
    meetingPoint: "",
    keterangan: "",
    fotoKTP: null,
    kesehatan: false,
    riwayatPenyakit: false,
    riwayatPenyakitBerat: false,
    setuju: false,
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const isComplete = Object.values(formData).every((field) => {
      if (typeof field === "boolean") return field;
      return field !== "" && field !== null;
    });
    setIsFormComplete(isComplete);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={formStyle}>
      {/* Logo */}
      <img
        src="logo.png"
        alt="Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />

      {/* Judul */}
      <h2 style={{ color: "white" }}>Form Pengisian</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nama Lengkap:
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Alamat Lengkap:
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Domisili:
          <input
            type="text"
            name="domisili"
            value={formData.domisili}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Pekerjaan:
          <input
            type="text"
            name="pekerjaan"
            value={formData.pekerjaan}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Nomor Telepon/WA:
          <input
            type="tel"
            name="telepon"
            value={formData.telepon}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Nomor Telepon Darurat Aktif:
          <input
            type="tel"
            name="teleponDarurat"
            value={formData.teleponDarurat}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Gunung yang Diambil:
          <input
            type="text"
            name="gunung"
            value={formData.gunung}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Tanggal Perjalanan:
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Paket yang Diambil:
          <input
            type="text"
            name="paket"
            value={formData.paket}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Fasilitas yang Diambil:
          <input
            type="text"
            name="fasilitas"
            value={formData.fasilitas}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Meeting Point:
          <input
            type="text"
            name="meetingPoint"
            value={formData.meetingPoint}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Keterangan Lain:
          <textarea
            name="keterangan"
            value={formData.keterangan}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <label>
          Foto KTP (Sertakan Foto):
          <input
            type="file"
            name="fotoKTP"
            accept="image/*"
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <br />

        <h3>Informasi Kesehatan</h3>
        <label>
          <input
            type="checkbox"
            name="kesehatan"
            checked={formData.kesehatan}
            onChange={handleChange}
          />
          Peserta dalam keadaan sehat jasmani dan rohani ✓
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="riwayatPenyakit"
            checked={formData.riwayatPenyakit}
            onChange={handleChange}
          />
          Peserta tidak memiliki riwayat penyakit yang menular atau berbahaya ✓
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="riwayatPenyakitBerat"
            checked={formData.riwayatPenyakitBerat}
            onChange={handleChange}
          />
          Peserta tidak memiliki riwayat penyakit jantung, asma, stroke, dan
          lainnya ✓
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="setuju"
            checked={formData.setuju}
            onChange={handleChange}
          />
          Peserta menyetujui semua kebijakan, syarat, ketentuan, aturan, dan
          sanksi yang berlaku
        </label>
        <br />

        <button type="submit" disabled={!isFormComplete} style={buttonStyle}>
          Kirim Booking
        </button>
      </form>
    </div>
  );
};

export default FormDaftar;
