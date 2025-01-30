import React, { useState } from "react";
// import Calendar from "react-calendar"; // Import Calendar dari react-calendar
// import "react-calendar/dist/Calendar.css"; // Import CSS untuk kalender

const DataPesertaBaru = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Aliyah",
      email: "aliyah@email.com",
      no: "081234567890",
      keterangan: "Sudah mengisi formulir",
      waktu: "2024-01-15 10:30",
      paket: "Open Trip",
      fasilitas: "Medium",
      status: "Belum Dikonfirmasi",
    },
    {
      id: 2,
      nama: "Budi",
      email: "budi@email.com",
      no: "081234567891",
      keterangan: "Menunggu verifikasi dokumen",
      waktu: "2024-01-16 11:45",
      paket: "Private Trip",
      fasilitas: "Luxury",
      status: "Belum Dikonfirmasi",
    },
    {
      id: 3,
      nama: "Citra",
      email: "citra@email.com",
      no: "081234567892",
      keterangan: "Menunggu pembayaran",
      waktu: "2024-01-17 14:20",
      paket: "Family Trip",
      fasilitas: "Medium",
      status: "Belum Dikonfirmasi",
    },
  ]);

  const paketColors = {
    "Open Trip": "badge-success",
    "Private Trip": "badge-primary",
    "Family Trip": "badge-warning",
    "Gathering Kantor": "badge-danger",
  };

  const fasilitasColors = {
    Medium: "badge-secondary",
    Luxury: "badge-warning",
    Premium: "badge-info",
  };

  const handleKonfirmasi = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: "Dikonfirmasi" } : item
      )
    );
  };

  // States for managing form visibility
  const [isFormVisible, setFormVisible] = useState(false);
  const [newData, setNewData] = useState({
    nama: "",
    email: "",
    no: "",
    keterangan: "",
    waktu: "",
    paket: "Open Trip",
    fasilitas: "Medium",
  });

  const [isDetailVisible, setDetailVisible] = useState(false); // State for detail visibility
  const [selectedData, setSelectedData] = useState(null); // State for selected data to show details

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const handleAddData = () => {
    const newId = data.length + 1;
    setData([
      ...data,
      {
        ...newData,
        id: newId,
        status: "Belum Dikonfirmasi",
      },
    ]);
    setNewData({
      nama: "",
      email: "",
      no: "",
      keterangan: "",
      waktu: "",
      paket: "Open Trip",
      fasilitas: "Medium",
    });
    setFormVisible(false); // Hide form after adding data
  };

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Pagination calculations
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Data Peserta Baru</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="card-body">
              {/* Tombol untuk tambah data di atas tabel sebelah kanan */}
              <div className="d-flex justify-content-end mb-3">
                <button
                  className="btn btn-primary"
                  onClick={() => setFormVisible(true)}
                >
                  Tambah Data Peserta
                </button>
              </div>

              {/* Form Pop-Up */}
              {isFormVisible && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      width: "400px",
                      animation: "fadeIn 0.5s ease-out",
                    }}
                  >
                    <h5>Tambah Data Peserta</h5>
                    <div className="form-group">
                      <label>Nama:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nama"
                        value={newData.nama}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={newData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>No:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="no"
                        value={newData.no}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Keterangan:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="keterangan"
                        value={newData.keterangan}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Waktu Pendaftaran:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="waktu"
                        value={newData.waktu}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Paket:</label>
                      <select
                        className="form-control"
                        name="paket"
                        value={newData.paket}
                        onChange={handleInputChange}
                      >
                        <option value="Open Trip">Open Trip</option>
                        <option value="Private Trip">Private Trip</option>
                        <option value="Family Trip">Family Trip</option>
                        <option value="Gathering Kantor">
                          Gathering Kantor
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Fasilitas:</label>
                      <select
                        className="form-control"
                        name="fasilitas"
                        value={newData.fasilitas}
                        onChange={handleInputChange}
                      >
                        <option value="Medium">Medium</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Premium">Premium</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAddData}
                    >
                      Tambah Data
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => setFormVisible(false)}
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              )}

              {/* Detail Pop-Up for Lihat Detail */}
              {isDetailVisible && selectedData && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "20px",
                      borderRadius: "8px",
                      width: "400px",
                      animation: "fadeIn 0.5s ease-out", // Animasi untuk pop-up detail
                    }}
                  >
                    <h5>Detail Peserta</h5>
                    <p>
                      <strong>Nama:</strong> {selectedData.nama}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedData.email}
                    </p>
                    <p>
                      <strong>No:</strong> {selectedData.no}
                    </p>
                    <p>
                      <strong>Keterangan:</strong> {selectedData.keterangan}
                    </p>
                    <p>
                      <strong>Waktu Pendaftaran:</strong> {selectedData.waktu}
                    </p>
                    <p>
                      <strong>Paket:</strong> {selectedData.paket}
                    </p>
                    <p>
                      <strong>Fasilitas:</strong> {selectedData.fasilitas}
                    </p>
                    <p>
                      <strong>Status:</strong> {selectedData.status}
                    </p>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => setDetailVisible(false)}
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              )}

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>No</th>
                    <th>Keterangan</th>
                    <th>Waktu Pendaftaran</th>
                    <th>Paket</th>
                    <th>Fasilitas</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nama}</td>
                      <td>{item.email}</td>
                      <td>{item.no}</td>
                      <td>{item.keterangan}</td>
                      <td>{item.waktu}</td>
                      <td>
                        <span className={`badge ${paketColors[item.paket]}`}>
                          {item.paket}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge ${fasilitasColors[item.fasilitas]}`}
                        >
                          {item.fasilitas}
                        </span>
                      </td>
                      <td>{item.status}</td>
                      <td>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => {
                            setSelectedData(item);
                            setDetailVisible(true); // Menampilkan detail
                          }}
                        >
                          Lihat Detail
                        </button>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleKonfirmasi(item.id)}
                        >
                          Konfirmasi
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="d-flex justify-content-between">
                <div>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
                <div>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="form-control form-control-sm"
                    style={{ width: "auto" }}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <h2>Kalender</h2>
            <Calendar />  */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataPesertaBaru;
