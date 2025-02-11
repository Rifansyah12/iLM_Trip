import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import axios from "axios";
import { jsPDF } from "jspdf";
import Logo_tiket from "../../../../assets/logo/Logo_trip.png";
import BackgroundImageTiket from "../../../../assets/Trip/bg2.png";

import vectorUser from "../../../../assets/icons/User.png"; // Ikon vektor user
import vectorEmail from "../../../../assets/icons/Email.png"; // Ikon vektor email
import vectorPhone from "../../../../assets/icons/Telefon.png"; // Ikon vektor phone
import vectorFacilities from "../../../../assets/icons/Fasilitas.png"; // Ikon vektor fasilitas
import vectorPrice from "../../../../assets/icons/Paket.png"; // Ikon vektor harga

const DataPeserta = () => {
  const [data, setData] = useState([]);
  const [pesertaData, setPesertaData] = useState([]);

  // Data peserta per bulan
  const pesertaPerBulan = [
    { bulan: "Januari", peserta: 120 },
    { bulan: "Februari", peserta: 110 },
    { bulan: "Maret", peserta: 105 },
  ];

  //menarik data api
  useEffect(() => {
    const fetchPesertaData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/getPendaftaranpeserta"
        );
        console.log(response.data); // Cek data yang diterima

        const approvedPeserta = response.data.filter(
          (peserta) => peserta.status === "Disetujui"
        );
        setPesertaData(approvedPeserta);

        // Log setelah data diset
        console.log(approvedPeserta);
      } catch (error) {
        console.error("Error fetching peserta data:", error);
      }
    };

    fetchPesertaData();
  }, []);

  // Fungsi untuk mengunduh tiket dalam format PDF
  const handleDownloadTiket = (peserta) => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [120, 50], // Ukuran tiket: 120mm x 50mm
    });

    // Tambahkan background sesuai ukuran tiket
    doc.addImage(BackgroundImageTiket, "PNG", 0, 0, 120, 50, "", "FAST");

    // Header Tiket
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(0, 0, 0);
    doc.text("TIKET", 51, 11);
    doc.setTextColor(255, 255, 0);
    doc.text("TIKET", 50, 10);

    // Menambahkan logo
    doc.addImage(Logo_tiket, "PNG", 5, 5, 30, 30);

    // Mengatur warna teks menjadi putih untuk informasi peserta
    doc.setFontSize(7);
    doc.setTextColor(255, 255, 255);
    doc.addFont("times", "times", "normal");

    // Nama
    doc.addImage(vectorUser, "PNG", 35, 14, 4, 4);
    doc.setFont("times");
    doc.setTextColor(0, 0, 0);
    doc.text(`Nama:`, 42.2, 17.2);
    doc.setTextColor(255, 255, 255);
    doc.text(`Nama:    ${peserta.nama_lengkap}`, 42, 17);

    // Email
    doc.addImage(vectorEmail, "PNG", 35, 20, 4, 4);
    doc.setTextColor(0, 0, 0);
    doc.text(`Email:`, 42.2, 23.2);
    doc.setTextColor(255, 255, 255);
    doc.text(`Email:   ${peserta.email}`, 42, 23);

    // No Telp
    doc.addImage(vectorPhone, "PNG", 35, 26, 4, 4);
    doc.setTextColor(0, 0, 0);
    doc.text(`No Telp:`, 42.2, 29.2);
    doc.setTextColor(255, 255, 255);
    doc.text(`No Telp:  ${peserta.nomer_telepon}`, 42, 29);

    // Fasilitas
    doc.addImage(vectorFacilities, "PNG", 35, 32, 4, 4);
    doc.setTextColor(0, 0, 0);
    doc.text(`Fasilitas:`, 42.5, 35.2);
    doc.setTextColor(255, 255, 255);
    doc.text(`Fasilitas:   ${peserta.fasilitas}`, 42, 35);

    // Paket
    doc.addImage(vectorPrice, "PNG", 70, 14, 4, 4);
    doc.setTextColor(0, 0, 0);
    doc.text(`Paket:`, 75.2, 17.2);
    doc.setTextColor(255, 255, 255);
    doc.text(`Paket:  ${peserta.paket}`, 75, 17);

    // Footer (Tanggal & ID)
    doc.setFont("helvetica", "normal");
    const today = new Date();
    const dateString = today.toLocaleDateString();

    doc.setTextColor(0, 0, 0);
    doc.text(`Tanggal: ${dateString}`, 6, 46);
    doc.setTextColor(255, 255, 0);
    doc.text(`Tanggal: ${dateString}`, 5, 45);

    doc.setTextColor(0, 0, 0);
    doc.text(`ID : ${peserta.id}`, 91, 46);
    doc.setTextColor(255, 255, 0);
    doc.text(`ID : ${peserta.id}`, 90, 45);

    // Menambahkan border untuk estetika
    doc.setLineWidth(0.5);
    doc.rect(2, 2, 116, 46);

    // Simpan sebagai PDF
    doc.save(`Tiket_${peserta.nama_lengkap}.pdf`);
  };

  // Fungsi untuk mengunduh laporan dalam format Excel
  const downloadExcelReport = () => {
    const ws = XLSX.utils.json_to_sheet(pesertaPerBulan); // Mengonversi data ke sheet Excel
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Peserta Per Bulan");

    const excelFile = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelFile], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "Laporan_Peserta_Per_Bulan.xlsx"); // Menyimpan file Excel
  };

  const handleDelete = async (id) => {
    try {
      // Mengirim request DELETE ke server
      const response = await axios.delete(
        `http://localhost:5000/deletePeserta/${id}` // Sesuaikan URL dengan backend
      );
      console.log("Peserta berhasil dihapus", response.data);

      // Menghapus data peserta dari state setelah berhasil dihapus
      setPesertaData((prevData) =>
        prevData.filter((peserta) => peserta.id !== id)
      );
    } catch (error) {
      console.error(
        "Gagal menghapus peserta:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-success">Data Peserta</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Data Peserta</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Persentasi */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>PrivateTrip Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>FamilyTrip Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>OpenTrip Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Gathering Kantor Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabel Data Peserta */}
        <section className="content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Daftar Peserta Terkonfirmasi</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-striped">
                  <thead className="bg-info text-white">
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pesertaData.length > 0 ? (
                      pesertaData.map((peserta, index) => (
                        <tr key={peserta.id}>
                          <td>{index + 1}</td>
                          <td>{peserta.nama_lengkap}</td>
                          <td>{peserta.email}</td>
                          <td>
                            <span className="badge badge-success">
                              {peserta.status}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleDownloadTiket(peserta)}
                            >
                              <i className="fas fa-download"></i> Download Tiket
                            </button>

                            <button
                              className="btn btn-danger btn-sm ml-2"
                              onClick={() => handleDelete(peserta.id)}
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">Data tidak tersedia.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Tabel Peserta Per Bulan */}
        <section className="content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Peserta Per Bulan</h3>
                <button
                  className="btn btn-success float-right"
                  onClick={downloadExcelReport}
                >
                  <i className="fas fa-download"></i> Unduh Laporan Excel
                </button>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-striped">
                  <thead className="bg-info text-white">
                    <tr>
                      <th>Bulan</th>
                      <th>Jumlah Peserta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pesertaPerBulan.map((data, index) => (
                      <tr key={index}>
                        <td>{data.bulan}</td>
                        <td>{data.peserta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataPeserta;
