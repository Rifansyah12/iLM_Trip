import React, { useState, useEffect } from "react";
import "summernote/dist/summernote-lite.css"; // Import Summernote CSS
import $ from "jquery"; // Import jQuery untuk Summernote
import "summernote/dist/summernote-lite.js"; // Import Summernote JS

const MountainTripTablePrivate = () => {
  const [data, setData] = useState([
    {
      id: 1,
      judul: "Pendakian Gunung Rinjani",
      namaGunung: "Gunung Rinjani",
      lokasi: "Lombok, NTB",
      paket: "Medium Trip",
      harga: "Rp 2,500,000",
      foto: null,
      keterangan:
        "<b>Meeting Point:</b> Bandara Lombok <br/> <b>Harga Termasuk:</b> Guide, Logistik",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    judul: "",
    namaGunung: "",
    lokasi: "",
    paket: "",
    harga: "",
    foto: null,
    keterangan: "",
  });

  const [editProduct, setEditProduct] = useState(null); // State untuk produk yang sedang diedit

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const totalPages = Math.ceil(data.length / dataPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddProduct = () => {
    if (editProduct) {
      // Jika sedang edit, update data
      setData(
        data.map((item) =>
          item.id === editProduct.id ? { ...editProduct, ...newProduct } : item
        )
      );
    } else {
      // Jika tambah data baru
      setData([
        ...data,
        {
          id: data.length + 1,
          ...newProduct,
        },
      ]);
    }

    setShowModal(false);
    setEditProduct(null); // Reset editProduct setelah update
    setNewProduct({
      judul: "",
      namaGunung: "",
      lokasi: "",
      paket: "",
      harga: "",
      foto: null,
      keterangan: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewProduct({ ...newProduct, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = (item) => {
    setEditProduct(item);
    setNewProduct(item); // Set data yang akan diedit ke form
    setShowModal(true); // Tampilkan modal
  };

  const handleDeleteClick = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    // Initialize Summernote
    $("#summernote").summernote({
      height: 200,
      toolbar: [
        ["style", ["bold", "italic", "underline", "clear"]],
        ["para", ["ul", "ol", "paragraph"]],
        ["view", ["fullscreen", "codeview"]],
      ],
      callbacks: {
        onChange: function (contents) {
          setNewProduct((prev) => ({ ...prev, keterangan: contents }));
        },
      },
    });
  }, [showModal]);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Open Trip</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Open Trip</li>
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
                Tambah Data
              </button>
            </div>

            <div className="card-body">
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
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{indexOfFirstData + index + 1}.</td>
                      <td>{item.judul}</td>
                      <td>{item.namaGunung}</td>
                      <td>{item.lokasi}</td>
                      <td>{item.paket}</td>
                      <td>{item.harga}</td>
                      <td>
                        {item.foto ? (
                          <img
                            src={item.foto}
                            alt="Foto"
                            style={{ width: 50, height: 50 }}
                          />
                        ) : (
                          "Tidak ada foto"
                        )}
                      </td>
                      <td
                        dangerouslySetInnerHTML={{ __html: item.keterangan }}
                      ></td>
                      <td>
                        <div className="d-flex">
                          <button
                            className="btn btn-sm btn-warning mr-2"
                            onClick={() => handleEditClick(item)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDeleteClick(item.id)}
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
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editProduct ? "Edit Data" : "Tambah Data"}
                  </h5>
                  <button className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Judul</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.judul}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          judul: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Nama Gunung</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.namaGunung}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          namaGunung: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Lokasi</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.lokasi}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, lokasi: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Paket</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.paket}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, paket: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Harga</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.harga}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, harga: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Foto</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                    {newProduct.foto && (
                      <img
                        src={newProduct.foto}
                        alt="Preview"
                        style={{ width: 100, height: 100, marginTop: 10 }}
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label>Keterangan</label>
                    <textarea id="summernote"></textarea>
                  </div>
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
                    {editProduct ? "Update" : "Tambah"}
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

export default MountainTripTablePrivate;
