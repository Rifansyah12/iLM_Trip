import React, { useState, useEffect } from "react";
import axios from "axios"; // Untuk melakukan request ke API
import "react-summernote/dist/react-summernote.css";
import "summernote/dist/summernote-bs4.js"; // Import JS untuk Summernote
import ReactSummernote from "react-summernote"; // Import komponen ReactSummernote

import { useParams } from "react-router-dom";

const TableOpen = () => {
  const { id_layanan } = useParams(); // Only keep id_layanan
  const [destinasi, setDestinasi] = useState([]);
  const [mountainTrips, setMountainTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const [newDestinasi, setNewDestinasi] = useState({
    nama_gunung: "",
    lokasi: "",
    paket: "",
    harga: "",
    foto: null,
    keterangan: "",
  });
  const [file, setFile] = useState(null);

  // Ambil data dari API saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchDestinasi = async () => {
      if (!id_layanan) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/getDestinasiByIdLayanan/${id_layanan}`
        );

        setDestinasi(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Gagal mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinasi();
  }, [id_layanan]);

  useEffect(() => {
    const fetchMountainTrips = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/getMountaintrip"
        );
        setMountainTrips(response.data);
      } catch (error) {
        console.error("Error fetching mountain trips:", error);
      }
    };

    fetchMountainTrips();
  }, []); // Tidak ada dependensi, hanya dipanggil sekali saat komponen dimuat

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const totalPages = Math.ceil(destinasi.length / dataPerPage);
  const currentData = destinasi.slice(indexOfFirstData, indexOfLastData);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDestinasi({ ...newDestinasi, [name]: value });
  };

  // Menangani perubahan file
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Menangani perubahan pada select
  const handleChange = (event) => {
    const value = event.target.value;
    if (value) {
      setSelectedTrip(value); // Set nilai ID layanan
    } else {
      setSelectedTrip(""); // Atur menjadi string kosong jika tidak ada pilihan
    }
  };

  // Fungsi untuk mengirimkan data ke backend
  const handleAddData = async () => {
    if (!selectedTrip) {
      alert("Silakan pilih layanan gunung terlebih dahulu!");
      return;
    }

    // Pastikan id_layanan sudah ada
    if (!id_layanan) {
      alert("ID layanan tidak ditemukan!");
      return;
    }

    const formData = new FormData();

    formData.append("nama_gunung", newDestinasi.nama_gunung);
    formData.append("lokasi", newDestinasi.lokasi);
    formData.append("paket", newDestinasi.paket);
    formData.append("harga", newDestinasi.harga);
    formData.append("keterangan", newDestinasi.keterangan);
    formData.append("foto", file);

    // Kirim id_layanan yang valid
    formData.append("id_layanan", selectedTrip); // Kirim id layanan yang dipilih

    try {
      await axios.post(
        `http://localhost:5000/createDestinasi/${selectedTrip}`,
        formData
      );

      const response = await axios.get(
        `http://localhost:5000/getMountaintrip/${id_layanan}` // Update URL ke id_layanan yang valid
      );
      setDestinasi(response.data);
    } catch (err) {
      alert("Gagal menambahkan data");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus destinasi ini?")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/deleteDestinasi/${id}`);

      alert("Data berhasil dihapus!");

      // Perbarui state dengan menghapus destinasi yang telah dihapus
      setDestinasi(destinasi.filter((item) => item.id !== id));
    } catch (err) {
      alert("Gagal menghapus data");
      console.error(err);
    }
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <h1 className="m-0">Destinasi Trip</h1> {/* Judul diubah */}
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="mb-3">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#addDataModal"
              >
                Tambah Data
              </button>
            </div>

            {/* FORM TAMBAH DATA  */}
            <div
              className="modal fade"
              id="addDataModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="addDataModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addDataModalLabel">
                      Tambah Destinasi Baru
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>Nama Gunung</label>
                        <input
                          type="text"
                          className="form-control"
                          name="nama_gunung"
                          value={newDestinasi.nama_gunung || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Lokasi</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lokasi"
                          value={newDestinasi.lokasi || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Paket</label>
                        <input
                          type="text"
                          className="form-control"
                          name="paket"
                          value={newDestinasi.paket || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Harga</label>
                        <input
                          type="number"
                          className="form-control"
                          name="harga"
                          value={newDestinasi.harga || ""}
                          onChange={handleInputChange}
                          step="0.01" // Menyediakan input angka desimal
                          min="0" // Menghindari angka negatif
                          required // Menandakan bahwa input ini wajib diisi
                        />
                      </div>

                      <div className="form-group">
                        <label>Keterangan</label>
                        <ReactSummernote
                          value={newDestinasi.keterangan}
                          options={{
                            height: 200, // Menentukan tinggi editor
                            toolbar: [
                              [
                                "style",
                                ["bold", "italic", "underline", "clear"],
                              ],
                              [
                                "font",
                                ["strikethrough", "superscript", "subscript"],
                              ],
                              ["para", ["ul", "ol", "paragraph"]],
                              ["insert", ["link", "picture"]],
                              ["view", ["fullscreen", "codeview"]],
                            ],
                          }}
                          onChange={(content) => {
                            setNewDestinasi({
                              ...newDestinasi,
                              keterangan: content,
                            });
                          }}
                        />
                      </div>

                      <div className="form-group">
                        <label>Foto</label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={handleFileChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Layanan</label>
                        <select
                          className="form-control"
                          value={selectedTrip}
                          onChange={handleChange}
                        >
                          <option value="">Pilih Layanan</option>
                          {mountainTrips.map((trip) => (
                            <option key={trip.id} value={trip.id}>
                              {trip.nama_layanan} {trip.id}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAddData}
                    >
                      Tambah
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Gunung</th>
                  <th>Lokasi</th>
                  <th>Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((destinasi, index) => (
                  <tr key={destinasi.id}>
                    <td>{index + 1}</td>
                    <td>{destinasi.nama_gunung}</td>
                    <td>{destinasi.lokasi}</td>
                    <td>{destinasi.harga}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(destinasi.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <nav>
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      index + 1 === currentPage ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TableOpen;
