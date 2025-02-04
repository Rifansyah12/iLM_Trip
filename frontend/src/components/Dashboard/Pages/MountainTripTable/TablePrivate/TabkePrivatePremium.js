import React, { useState, useEffect } from "react";
import axios from "axios"; // Untuk melakukan request ke API
import "react-summernote/dist/react-summernote.css";
import "summernote/dist/summernote-bs4.js"; // Import JS untuk Summernote
import ReactSummernote from "react-summernote"; // Import komponen ReactSummernote

import { useParams } from "react-router-dom";

const TablePrivate = () => {
  const { id_layanan, id_privatetrip } = useParams();
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
      if (!id_privatetrip) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/getDestinasiByIdPrivate/${id_privatetrip}`
        );
        setDestinasi(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Gagal mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinasi();
  }, [id_privatetrip]);

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

  // Tentukan judul berdasarkan id_privatetrip
  const getTitle = () => {
    if (id_privatetrip === "1") {
      return "Premium Trip"; // Judul untuk ID 1
    } else if (id_privatetrip === "2") {
      return "Luxury Trip"; // Judul untuk ID 2
    }
    return "Destinasi Trip"; // Default judul
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
    const formData = new FormData();

    formData.append("nama_gunung", newDestinasi.nama_gunung);
    formData.append("lokasi", newDestinasi.lokasi);
    formData.append("paket", newDestinasi.paket);
    formData.append("harga", newDestinasi.harga);
    formData.append("keterangan", newDestinasi.keterangan);
    formData.append("foto", file);

    if (!selectedTrip) {
      alert("Silakan pilih layanan gunung terlebih dahulu!");
      return;
    }

    formData.append("id_layanan", selectedTrip);

    try {
      await axios.post(
        `http://localhost:5000/createDestinasi/${selectedTrip}/${id_privatetrip}`, // Mengirim selectedTrip dan id_privatetrip di URL
        formData
      );

      alert("Data berhasil ditambahkan!");
      // Menambahkan destinasi baru ke state tanpa me-reload
      setDestinasi([...destinasi, newDestinasi]);
    } catch (err) {
      alert("Gagal menambahkan data");
      console.error(err);
    }
  };

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <h1 className="m-0">{getTitle()}</h1>
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
                          value={newDestinasi.nama_gunung}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Lokasi</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lokasi"
                          value={newDestinasi.lokasi}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Paket</label>
                        <input
                          type="text"
                          className="form-control"
                          name="paket"
                          value={newDestinasi.paket}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Harga</label>
                        <input
                          type="number"
                          className="form-control"
                          name="harga"
                          value={newDestinasi.harga}
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
                              ["insert", ["link", "picture", "video"]],
                            ],
                          }}
                          onChange={(value) =>
                            setNewDestinasi({
                              ...newDestinasi,
                              keterangan: value,
                            })
                          } // Update state saat konten berubah
                        />
                      </div>

                      <div className="form-group">
                        <label>Foto</label>
                        <input
                          type="file"
                          className="form-control-file"
                          onChange={handleFileChange}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="selectMountainTrip">
                          Layanan Gunung:
                        </label>
                        <select
                          id="selectMountainTrip"
                          className="form-control"
                          value={selectedTrip} // Pastikan ini adalah ID yang valid
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

                      <div className="form-group">
                        {/* from yang di sembunykan */}
                        <input
                          type="number"
                          value={id_privatetrip}
                          className="form-control-file"
                          onChange={handleFileChange}
                        />
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
                      Simpan Data
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
              {destinasi.length === 0 ? (
                <p>Tidak ada destinasi yang ditemukan.</p>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Judul</th>
                      <th>Nama Gunung</th>
                      <th>Lokasi</th>
                      <th>Paket</th>
                      <th>Harga</th>
                      <th>Foto</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((item, index) => (
                      <tr key={item.id}>
                        <td>{indexOfFirstData + index + 1}.</td>
                        <td>
                          Pendakian di{" "}
                          {item.mountaintrip?.nama_layanan ||
                            "Nama tidak tersedia"}
                        </td>
                        <td>
                          {item.mountaintrip?.nama_layanan ||
                            "Nama tidak tersedia"}
                        </td>

                        <td>{item.lokasi}</td>
                        <td>{item.paket}</td>
                        <td>{item.harga}</td>
                        <td>
                          {item.foto ? (
                            <img
                              src={`http://localhost:5000/images/Destinasi/${item.foto}`}
                              alt="Foto"
                              style={{ width: 50, height: 50 }}
                            />
                          ) : (
                            "Tidak ada foto"
                          )}
                        </td>
                        <td>{item.keterangan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              <div className="d-flex justify-content-between align-items-center">
                <span>Total Data: {data.length}</span>
                <nav>
                  <ul className="pagination">
                    {[...Array(totalPages)].map((_, i) => (
                      <li
                        key={i}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TablePrivate;
