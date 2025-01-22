import React, { useState } from "react";

const Merchen = () => {
  const [data, setData] = useState([
    { id: 1, produk: "Update software", harga: "Rp 100,000", foto: null },
    { id: 2, produk: "Clean database", harga: "Rp 200,000", foto: null },
    { id: 3, produk: "Cron job running", harga: "Rp 150,000", foto: null },
    { id: 4, produk: "Fix and squish bugs", harga: "Rp 250,000", foto: null },
    { id: 5, produk: "Fix", harga: "Rp 250,000", foto: null },
    { id: 6, produk: "Update software", harga: "Rp 100,000", foto: null },
    { id: 7, produk: "Clean database", harga: "Rp 200,000", foto: null },
    { id: 8, produk: "Cron job running", harga: "Rp 150,000", foto: null },
    { id: 9, produk: "Fix and squish bugs", harga: "Rp 250,000", foto: null },
    { id: 10, produk: "Fix", harga: "Rp 250,000", foto: null },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    produk: "",
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

  const handleAddProduct = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        produk: newProduct.produk,
        harga: newProduct.harga,
        foto: newProduct.foto,
      },
    ]);
    setShowModal(false);
    setNewProduct({ produk: "", harga: "", foto: null });
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

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Merchandise</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Merchen</li>
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
                Tambah Produk
              </button>
            </div>

            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: 10 }}>#</th>
                    <th>Produk</th>
                    <th>Harga</th>
                    <th>Foto</th>
                    <th style={{ width: 100 }}>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{indexOfFirstData + index + 1}.</td>
                      <td>{item.produk}</td>
                      <td>{item.harga}</td>
                      <td>
                        {item.foto ? (
                          <img
                            src={item.foto}
                            alt="Produk"
                            style={{ width: 50, height: 50 }}
                          />
                        ) : (
                          "Tidak ada foto"
                        )}
                      </td>
                      <td>
                        <div className="d-flex">
                          <button className="btn btn-sm btn-warning mr-2">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-danger">
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
                  <div className="form-group">
                    <label>Nama Produk</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.produk}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, produk: e.target.value })
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
                    <label>Foto Produk</label>
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

export default Merchen;
