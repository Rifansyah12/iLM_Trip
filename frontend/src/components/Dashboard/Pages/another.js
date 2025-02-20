import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AnotherAdmin = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const [showFullKeterangan, setShowFullKeterangan] = useState(false);
  const [showFullDeskripsi, setShowFullDeskripsi] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    nama_layanan: "",
    keterangan_singkat: "",
    keterangan_layanan: "",
    deskripsi_layanan: "",
    lokasi: "",
    harga: "",
    foto: null,
  });

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const totalPages = Math.ceil(data.length / dataPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const stripHTML = (html) => {
    return html.replace(/<[^>]+>/g, "").trim();
  };

  const handleAddProduct = async () => {
    try {
      console.log("Data sebelum dikirim:", newProduct);

      const formData = new FormData();
      formData.append("nama_layanan", newProduct.nama_layanan);
      formData.append("keterangan_singkat", newProduct.keterangan_singkat);
      formData.append("keterangan_layanan", newProduct.keterangan_layanan); // Cek apakah masih dalam format HTML
      formData.append("deskripsi_layanan", newProduct.deskripsi_layanan);
      formData.append("lokasi", newProduct.lokasi);
      formData.append("harga", newProduct.harga);

      if (newProduct.foto) {
        formData.append("foto", newProduct.foto);
      }

      // Debugging: Lihat isi FormData sebelum dikirim
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await axios.post(
        "http://localhost:5000/createAnothertrip",
        formData
      );

      console.log("Response dari server:", response.data);

      setData([...data, response.data]);
      setShowModal(false);
      setNewProduct({
        nama_layanan: "",
        keterangan_singkat: "",
        keterangan_layanan: "",
        deskripsi_layanan: "",
        lokasi: "",
        harga: "",
        foto: null,
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({ ...newProduct, foto: file });
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getAnothertrip");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteAnothertrip/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">AnotherTrip</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">AnotherTrip</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="mb-3">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Tambah Content
              </button>
            </div>

            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: 10 }}>No</th>
                    <th>Nama Layanan</th>
                    <th>Keterangan Singkat</th>
                    <th>Keterangan Layanan</th>
                    <th>Deskripsi Layanan</th>
                    <th>Lokasi</th>
                    <th>Harga</th>
                    <th>Foto</th>
                    <th style={{ width: 100 }}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{indexOfFirstData + index + 1}.</td>
                      <td>{item.nama_layanan}</td>
                      <td>{item.keterangan_singkat}</td>
                      <td>
                        {showFullKeterangan ? (
                          <>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.keterangan_layanan,
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
                                  item.keterangan_layanan.slice(0, 100) + "...",
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
                                __html: item.deskripsi_layanan,
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
                                  item.deskripsi_layanan.slice(0, 100) + "...",
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
                      <td>{item.lokasi}</td>
                      <td>{item.harga}</td>
                      <td>
                        {item.foto ? (
                          <img
                            src={`http://localhost:5000/images/anothertrip/${item.foto}`}
                            alt="Foto"
                            style={{ width: 50, height: 50 }}
                          />
                        ) : (
                          "Tidak ada foto"
                        )}
                      </td>
                      <td>
                        <div className="d-flex">
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDeleteProduct(item.id)}
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

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

        {showModal && (
          <div className="modal" style={{ display: "block" }}>
            <div
              className="modal-dialog"
              style={{
                marginTop: "10%",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Tambah Produk Baru</h5>
                  <button className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Nama Layanan</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newProduct.nama_layanan}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            nama_layanan: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Keterangan Singkat</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newProduct.keterangan_singkat}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            keterangan_singkat: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Keterangan Layanan</label>
                      <ReactQuill
                        value={newProduct.keterangan_layanan}
                        onChange={(content) => {
                          setNewProduct({
                            ...newProduct,
                            keterangan_layanan: content, // Pastikan ReactQuill menyimpan HTML
                          });
                        }}
                        modules={{
                          toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["bold", "italic", "underline"],
                            ["link", "image"],
                            ["clean"],
                          ],
                        }}
                        formats={[
                          "header",
                          "font",
                          "bold",
                          "italic",
                          "underline",
                          "list",
                          "bullet",
                          "link",
                          "image",
                        ]}
                      />
                    </div>

                    <div className="form-group">
                      <label>Deskripsi Layanan</label>
                      <ReactQuill
                        value={newProduct.deskripsi_layanan}
                        onChange={(content) => {
                          setNewProduct({
                            ...newProduct,
                            deskripsi_layanan: content, // Pastikan ReactQuill menyimpan HTML
                          });
                        }}
                        modules={{
                          toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["bold", "italic", "underline"],
                            ["link", "image"],
                            ["clean"],
                          ],
                        }}
                        formats={[
                          "header",
                          "font",
                          "bold",
                          "italic",
                          "underline",
                          "list",
                          "bullet",
                          "link",
                          "image",
                        ]}
                      />
                    </div>

                    <div className="form-group">
                      <label>Lokasi</label>
                      <input
                        type="text"
                        className="form-control"
                        value={newProduct.lokasi}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            lokasi: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Harga</label>
                      <input
                        type="number"
                        className="form-control"
                        value={newProduct.harga}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            harga: e.target.value,
                          })
                        }
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
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddProduct}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnotherAdmin;
