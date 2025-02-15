import React, { useState, useEffect } from "react";

import moment from 'moment'
import NewImage from "../../assets/logo/Logo_trip2.png";
import Background from "../../assets/volcano-3779159_1280.png";
import axios from "axios";

const containerStyle = {

  backgroundColor: "transparent",
  padding: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const formWrapperStyle = {
  backgroundColor: "rgb(8, 8, 8)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  width: "70%",
  margin: "0 auto",
};

const formStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "#FFFFFF",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(255, 132, 0, 0.74)",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px", // Jarak antar baris form
};

const labelStyle = {
  width: "30%",
  textAlign: "left",
  fontWeight: "bold",
};

const inputStyle = {
  width: "65%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ced4da",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  outline: "none",
  marginRight: "10px",
};

const fileInputStyle = {
  ...inputStyle,
  padding: "5px",
};

const submitButtonStyle = {
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
  marginTop: "20px",
  width: "30%",
};

const MultiStepForm = () => {

  
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email : "",
    alamat_lengkapi: "",
    domisili: "",
    nomer_telepon: "",
    nomertelp_darurat: "",
    pekerjaan: "",
    fasilitas: "",
    meetingPoint: "",
    keterangan: "",
    fotoKtp: null,

  });

  const [message, setMessage] = useState("");
  const [destinasiList, setDestinasiList] = useState([]);

  useEffect(() => {
    // Ambil data destinasi dari backend
    axios
      .get("http://localhost:5000/getDestinasi")
      .then((response) => {
        setDestinasiList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching destinasi:", error);
      });
  }, [])

  const handleChange = (e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  
 



  const handleFileChange = (e) => {
    setFormData({ ...formData, fotoKtp: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/createPendaftaran`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(res.data.msg);
      setFormData({
        nama_lengkap: "",
        email: "",
        alamat_lengkapi: "",
        domisili: "",
        nomer_telepon: "",
        nomertelp_darurat: "",
        pekerjaan: "",
        paket: "",
        fasilitas: "",
        meetingPoint: "",
        keterangan: "",
        kesehatan: "",
        fotoKtp: null,
      });
    } catch (error) {
      setMessage(error.response?.data?.msg || "Terjadi kesalahan.");
    }
  };


  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <div style={formStyle}>
          <img
            src={NewImage}
            alt="Logo"
            style={{
              width: "120px",
              marginBottom: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
              color: "#17a2b8", // Warna hijau
              textShadow: "2px 2px 4px rgba(255, 132, 0, 0.74)", // Bayangan oranye
            }}
          >
            Formulir Pendaftaran
          </h2>
          {message && <div className="alert alert-info">{message}</div>}

          <form onSubmit={handleSubmit}>
            {/* Nama - Pekerjaan - Keterangan */}
            <div style={rowStyle}>
              <label style={labelStyle}>Nama:</label>
              <input
                type="text"
                name="nama_lengkap"
                style={inputStyle}
                value={formData.nama_lengkap}
                onChange={handleChange}
              />
              <label style={labelStyle}>Pekerjaan:</label>
              <input
                type="text"
                name="pekerjaan"
                style={inputStyle}
                value={formData.pekerjaan}
                onChange={handleChange}
              />
              <label style={labelStyle}>Ket:</label>
              <input
                type="text"
                name="keterangan"
                style={inputStyle}
                value={formData.keterangan}
                onChange={handleChange}
              />
            </div>

            {/* Email - Gunung - Foto KTP */}
            <div style={rowStyle}>
              <label style={labelStyle}>Email:</label>
              <input
                type="email"
                name="email"
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
              />
             <label>Pilih Gunung:</label>
          <select name="id_destinasi" value={formData.id_destinasi} onChange={handleChange}>
            <option value="">Pilih Gunung</option>
            {destinasiList.map((destinasi) => (
              <option key={destinasi.id} value={destinasi.id}>
                {destinasi.nama_gunung} 
              </option>
            ))}
          </select>
              <label style={labelStyle}>Foto KTP:</label>
              <input
                type="file"
                name="fotoKtp"
                accept=".jpg,.jpeg,.png"
                style={fileInputStyle}
                onChange={handleFileChange}
              />
            </div>

            {/* Alamat - Tanggal */}
            <div style={rowStyle}>
              <label style={labelStyle}>Alamat:</label>
              <input
                type="text"
                name="alamat_lengkapi"
                style={inputStyle}
                value={formData.alamat_lengkapi}
                onChange={handleChange}
              />
              <label style={labelStyle}>Tanggal:</label>
              <input
                type="date"
                name="tanggal"
                style={inputStyle}
                value={formData.tanggal}
                onChange={handleChange}
              />
            </div>

            {/* Domisili - Paket */}
            <div style={rowStyle}>
              <label style={labelStyle}>Domisili:</label>
              <input
                type="text"
                name="domisili"
                style={inputStyle}
                value={formData.domisili}
                onChange={handleChange}
              />
              <label style={labelStyle}>Paket:</label>
              <input
                type="text"
                name="paket"
                style={inputStyle}
                value={formData.paket}
                onChange={handleChange}
              />
            </div>

            {/* Telepon - Fasilitas */}
            <div style={rowStyle}>
              <label style={labelStyle}>Telepon:</label>
              <input
                type="tel"
                name="nomer_telepon"
                style={inputStyle}
                value={formData.nomer_telepon}
                onChange={handleChange}
              />
              <label style={labelStyle}>Fasilitas:</label>
              <input
                type="text"
                name="fasilitas"
                style={inputStyle}
                value={formData.fasilitas}
                onChange={handleChange}
              />
            </div>

            {/* Telepon Darurat - Meeting Point */}
            <div style={rowStyle}>
              <label style={labelStyle}>Telepon Darurat:</label>
              <input
                type="tel"
                name="nomertelp_darurat"
                style={inputStyle}
                value={formData.nomertelp_darurat}
                onChange={handleChange}
              />
              <label style={labelStyle}>Meeting Point:</label>
              <input
                type="text"
                name="meetingPoint"
                style={inputStyle}
                value={formData.meetingPoint}
                onChange={handleChange}
              />
              <label style={labelStyle}>Riwayat Kesehatan</label>
              <input
                type="text"
                name="kesehatan"
                style={inputStyle}
                value={formData.kesehatan}
                onChange={handleChange}
              />
            </div>

            {/* Checkbox & Tombol Kirim */}
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  name="setuju"
                  checked={formData.setuju}
                  onChange={handleChange}
                />{" "}
                Saya menyetujui syarat & ketentuan
              </label>
              <button type="submit" style={submitButtonStyle}>
                Kirim Formulir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
