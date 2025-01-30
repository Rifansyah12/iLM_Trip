import React from "react";
import { saveAs } from "file-saver"; // Library untuk menyimpan file
import * as XLSX from "xlsx"; // Untuk XLSX

const DataPeserta = () => {
  // Data peserta yang telah dikonfirmasi
  const pesertaData = [
    {
      id: 1,
      nama: "Ahmad Santoso",
      email: "ahmad@gmail.com",
      status: "Terkonfirmasi",
      tiket: "tiket_ahmad.pdf",
    },
    {
      id: 2,
      nama: "Siti Aisyah",
      email: "siti@gmail.com",
      status: "Terkonfirmasi",
      tiket: "tiket_siti.pdf",
    },
    {
      id: 3,
      nama: "Budi Hartono",
      email: "budi@gmail.com",
      status: "Terkonfirmasi",
      tiket: "tiket_budi.pdf",
    },
  ];

  // Data peserta per bulan
  const pesertaPerBulan = [
    { bulan: "Januari", peserta: 120 },
    { bulan: "Februari", peserta: 110 },
    { bulan: "Maret", peserta: 105 },
  ];

  // Fungsi untuk mengunduh tiket
  const handleDownload = (tiket) => {
    alert(`Mengunduh tiket: ${tiket}`);
    // Logika untuk mengunduh tiket bisa ditambahkan di sini
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
                    {pesertaData.map((peserta, index) => (
                      <tr key={peserta.id}>
                        <td>{index + 1}</td>
                        <td>{peserta.nama}</td>
                        <td>{peserta.email}</td>
                        <td>
                          <span className="badge badge-success">
                            {peserta.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleDownload(peserta.tiket)}
                          >
                            <i className="fas fa-download"></i> Download Tiket
                          </button>
                        </td>
                      </tr>
                    ))}
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
