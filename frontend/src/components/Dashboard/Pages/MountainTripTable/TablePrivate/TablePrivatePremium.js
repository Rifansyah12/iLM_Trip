import React, { useState, useEffect } from "react";
import axios from "axios"; // Untuk melakukan request ke API
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useParams } from "react-router-dom";

const TablePrivate = () => {
  const { id_layanan, id_privatetrip } = useParams();
  const [destinasi, setDestinasi] = useState([]);
  const [mountainTrips, setMountainTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [showFullKeterangan, setShowFullKeterangan] = useState(false);
  const [showFullDeskripsi, setShowFullDeskripsi] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const [newDestinasi, setNewDestinasi] = useState({
    nama_gunung: "",
    lokasi: "",
    paket: "",
    harga: "",
    foto: null,
    keterangan: "",
    deskripsi: "",
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
    formData.append("deskripsi", newDestinasi.deskripsi);
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
      const response = await axios.get(
        `http://localhost:5000/getDestinasiByIdPrivate/${id_privatetrip}`
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
                        <label>Deskripsi</label>
                        <ReactQuill
                          value={newDestinasi.keterangan}
                          onChange={(value) =>
                            setNewDestinasi({
                              ...newDestinasi,
                              keterangan: value,
                            })
                          }
                          modules={{
                            toolbar: [
                              ["bold", "italic", "underline", "strike"], // Gaya teks
                              [{ script: "sub" }, { script: "super" }], // Superscript/Subscript
                              [{ list: "ordered" }, { list: "bullet" }], // List
                              ["link", "image", "video"], // Media
                            ],
                          }}
                          formats={[
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "script",
                            "list",
                            "bullet",
                            "link",
                            "image",
                            "video",
                          ]}
                        />
                      </div>

                      <div className="form-group">
                        <label>Keterangan</label>
                        <ReactQuill
                          value={newDestinasi.deskripsi}
                          onChange={(value) =>
                            setNewDestinasi({
                              ...newDestinasi,
                              deskripsi: value,
                            })
                          }
                          modules={{
                            toolbar: [
                              ["bold", "italic", "underline", "strike"], // Gaya teks
                              [{ script: "sub" }, { script: "super" }], // Superscript/Subscript
                              [{ list: "ordered" }, { list: "bullet" }], // List
                              ["link", "image", "video"], // Media
                            ],
                          }}
                          formats={[
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "script",
                            "list",
                            "bullet",
                            "link",
                            "image",
                            "video",
                          ]}
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
                          value={id_layanan} // Pastikan ini adalah ID yang valid
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
                      <th>No</th>
                      <th>Nama Gunung</th>
                      <th>Lokasi</th>
                      <th>Paket</th>
                      <th>Harga</th>
                      <th>Deskripsi</th>
                      <th>Keterangan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(destinasi) && destinasi.length > 0 ? (
                      destinasi.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.nama_gunung}</td>
                          <td>{item.lokasi}</td>
                          <td>{item.paket}</td>
                          <td>{item.harga}</td>

                          <td>
                            {showFullKeterangan ? (
                              <>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: item.keterangan,
                                  }}
                                />{" "}
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowFullKeterangan(false);
                                  }}
                                >
                                  Sembunyikan
                                </a>
                              </>
                            ) : (
                              <>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      item.keterangan.slice(0, 100) + "...",
                                  }}
                                />{" "}
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowFullKeterangan(true);
                                  }}
                                >
                                  Lihat Detail
                                </a>
                              </>
                            )}
                          </td>
                          <td>
                            {showFullDeskripsi ? (
                              <>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: item.deskripsi,
                                  }}
                                />{" "}
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowFullDeskripsi(false);
                                  }}
                                >
                                  Sembunyikan
                                </a>
                              </>
                            ) : (
                              <>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      item.deskripsi.slice(0, 100) + "...",
                                  }}
                                />{" "}
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setShowFullDeskripsi(true);
                                  }}
                                >
                                  Lihat Detail
                                </a>
                              </>
                            )}
                          </td>

                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(item.id)}
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          <strong>Data belum tersedia</strong>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span>Total Data: {destinasi.length}</span>
                </div>

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
